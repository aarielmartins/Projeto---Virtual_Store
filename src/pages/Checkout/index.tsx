import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'
import { FiCreditCard, FiShield } from 'react-icons/fi'
import { useFormik } from 'formik'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { formatarPreco } from '../../components/CardProduct'
import { SectionTitle } from '../../components/Card/styles'
import { RiBarcodeLine } from 'react-icons/ri'
import { totalItem, valorFinalItens, valorFinal } from '../../components/Cart'
import Card from '../../components/Card'
import CollectionHeader from '../../components/CollectionHeader'
import {
  Field,
  Row,
  Label,
  Input,
  MaskedInput,
  PaymentTabs,
  PaymentTab,
  PaymentNotice,
  Select,
  ItemsList,
  ItemRow,
  ItemName,
  ItemPrice,
  Totals,
  TotalRow,
  GrandTotal,
  CheckoutButton,
  SecureNotice,
  ErrorMessage
} from './styles'
import OrderConfirmation from '../../components/OrderConfirmation'

export type Props = {
  gapNumber?: number
}

const Checkout = () => {
  const [formaPagamento, setFormaPagamento] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const form = useFormik({
    initialValues: {
      nomeCompleto: '',
      email: '',
      cpf: '',
      endereco: '',
      numero: '',
      complemento: '',
      cep: '',
      cidade: '',
      estado: '',
      nomeTitular: '',
      cpfTitular: '',
      numeroCartao: '',
      mes: '',
      ano: '',
      cvv: '',
      parcelamento: ''
    },
    validationSchema: Yup.object({
      nomeCompleto: Yup.string()
        .min(5, 'Nome completo inválido')
        .required('Campo obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
      cpf: Yup.string()
        .min(14, 'CPF inválido') // 11 dígitos + 2 pontos + 1 traço
        .max(14, 'CPF inválido')
        .required('Campo obrigatório'),
      endereco: Yup.string().required('Campo obrigatório'),
      numero: Yup.string().required('Campo obrigatório'),
      complemento: Yup.string().required('Campo obrigatório'),
      cep: Yup.string()
        .min(9, 'CEP inválido') // 8 dígitos + 1 traço
        .max(9, 'CEP inválido')
        .required('Campo obrigatório'),
      cidade: Yup.string().required('Campo obrigatório'),
      estado: Yup.string().required('Campo obrigatório'),

      nomeTitular: Yup.string().when([], {
        is: () => formaPagamento,
        then: (schema) => schema.required('Campo obrigatório'),
        otherwise: (schema) => schema
      }),

      cpfTitular: Yup.string().when([], {
        is: () => formaPagamento,
        then: (schema) =>
          schema
            .min(14, 'CPF inválido')
            .max(14, 'CPF inválido')
            .required('Campo obrigatório'),
        otherwise: (schema) => schema
      }),

      numeroCartao: Yup.string().when([], {
        is: () => formaPagamento,
        then: (schema) =>
          schema
            .min(19, 'Número do cartão inválido') // 16 dígitos + 3 espaços
            .max(19, 'Número do cartão inválido')
            .required('Campo obrigatório'),
        otherwise: (schema) => schema
      }),

      mes: Yup.string().when([], {
        is: () => formaPagamento,
        then: (schema) =>
          schema
            .min(2, 'Mês inválido')
            .max(2, 'Mês inválido')
            .required('Campo obrigatório'),
        otherwise: (schema) => schema
      }),

      ano: Yup.string().when([], {
        is: () => formaPagamento,
        then: (schema) =>
          schema
            .min(2, 'Ano inválido')
            .max(2, 'Ano inválido')
            .required('Campo obrigatório'),
        otherwise: (schema) => schema
      }),

      cvv: Yup.string().when([], {
        is: () => formaPagamento,
        then: (schema) =>
          schema
            .min(3, 'CVV inválido')
            .max(3, 'CVV inválido')
            .required('Campo obrigatório'),
        otherwise: (schema) => schema
      }),

      parcelamento: Yup.string().when([], {
        is: () => formaPagamento,
        then: (schema) =>
          schema
            .required('Selecione o parcelamento')
            .notOneOf([''], 'Selecione o parcelamento'),
        otherwise: (schema) => schema
      })
    }),
    onSubmit: (values) => {
      // remove pontos, traços e espaços antes de enviar pra API
      const onlyDigits = (value: string) => value.replace(/\D/g, '')

      purchase({
        billing: {
          name: values.nomeCompleto,
          email: values.email,
          document: onlyDigits(values.cpf)
        },
        delivery: {
          email: values.email,
          address: values.endereco,
          number: values.numero,
          add: values.complemento,
          city: values.cidade,
          state: values.estado,
          zipCode: Number(onlyDigits(values.cep))
        },
        payment: {
          card: {
            active: formaPagamento,
            owner: {
              name: values.nomeTitular,
              document: onlyDigits(values.cpfTitular)
            },
            name: values.nomeCompleto,
            number: onlyDigits(values.numeroCartao),
            expires: {
              month: Number(values.mes),
              year: Number(values.ano)
            },
            code: Number(values.cvv)
          },
          installments: 1
        },
        products: [
          {
            id: '1',
            price: 20
          }
        ]
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isValid = fieldName in form.errors
    const hasError = isTouched && isValid

    return hasError
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    return checkInputHasError(fieldName) ? message : ''
  }

  if (items.length === 0) {
    return <Navigate to="/" />
  }

  return (
    <>
      {isSuccess && data ? (
        <OrderConfirmation
          orderId={data.id}
          formaPagamento={formaPagamento}
          total={valorFinal(items)}
          email={form.values.email}
        />
      ) : (
        <form onSubmit={form.handleSubmit}>
          <CollectionHeader
            title="Checkout"
            description="Finalize sua compra aqui."
          />
          <Card title="Dados de cobrança">
            <>
              <Row>
                <Field>
                  <Label htmlFor="nomeCompleto">Nome completo</Label>
                  <Input
                    id="nomeCompleto"
                    type="text"
                    name="nomeCompleto"
                    value={form.values.nomeCompleto}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('nomeCompleto') ? 'error' : ''
                    }
                  />
                  <ErrorMessage>
                    {getErrorMessage('nomeCompleto', form.errors.nomeCompleto)}
                  </ErrorMessage>
                </Field>
                <Field>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('email') ? 'error' : ''}
                  />
                  <ErrorMessage>
                    {getErrorMessage('email', form.errors.email)}
                  </ErrorMessage>
                </Field>
                <Field>
                  <Label htmlFor="cpf">CPF</Label>
                  <MaskedInput
                    mask="000.000.000-00"
                    id="cpf"
                    name="cpf"
                    value={form.values.cpf}
                    onAccept={(value: string) =>
                      form.setFieldValue('cpf', value)
                    }
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cpf') ? 'error' : ''}
                    placeholder="000.000.000-00"
                  />
                  <ErrorMessage>
                    {getErrorMessage('cpf', form.errors.cpf)}
                  </ErrorMessage>
                </Field>
              </Row>

              <SectionTitle style={{ marginTop: '32px' }}>
                Dados de entrega
              </SectionTitle>
              <Row gapNumber={4}>
                <Field gapNumber={2}>
                  <Label htmlFor="endereco">Endereço</Label>
                  <Input
                    id="endereco"
                    type="text"
                    name="endereco"
                    value={form.values.endereco}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('endereco') ? 'error' : ''}
                  />
                  <ErrorMessage>
                    {getErrorMessage('endereco', form.errors.endereco)}
                  </ErrorMessage>
                </Field>
                <Field gapNumber={1}>
                  <Label htmlFor="numero">Número</Label>
                  <Input
                    id="numero"
                    type="text"
                    name="numero"
                    value={form.values.numero}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('numero') ? 'error' : ''}
                  />
                  <ErrorMessage>
                    {getErrorMessage('numero', form.errors.numero)}
                  </ErrorMessage>
                </Field>
                <Field gapNumber={1}>
                  <Label htmlFor="complemento">Complemento</Label>
                  <Input
                    id="complemento"
                    type="text"
                    name="complemento"
                    value={form.values.complemento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('complemento') ? 'error' : ''}
                  />
                  <ErrorMessage>
                    {getErrorMessage('complemento', form.errors.complemento)}
                  </ErrorMessage>
                </Field>
              </Row>
              <Row>
                <Field>
                  <Label htmlFor="cep">CEP</Label>
                  <MaskedInput
                    mask="00000-000"
                    id="cep"
                    name="cep"
                    value={form.values.cep}
                    onAccept={(value: string) =>
                      form.setFieldValue('cep', value)
                    }
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cep') ? 'error' : ''}
                    placeholder="00000-000"
                  />
                  <ErrorMessage>
                    {getErrorMessage('cep', form.errors.cep)}
                  </ErrorMessage>
                </Field>
                <Field>
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input
                    id="cidade"
                    type="text"
                    name="cidade"
                    value={form.values.cidade}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cidade') ? 'error' : ''}
                  />
                  <ErrorMessage>
                    {getErrorMessage('cidade', form.errors.cidade)}
                  </ErrorMessage>
                </Field>
                <Field>
                  <Label htmlFor="estado">Estado</Label>
                  <Input
                    id="estado"
                    type="text"
                    name="estado"
                    value={form.values.estado}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('estado') ? 'error' : ''}
                  />
                  <ErrorMessage>
                    {getErrorMessage('estado', form.errors.estado)}
                  </ErrorMessage>
                </Field>
              </Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <PaymentTabs>
                <PaymentTab
                  type="button"
                  isActive={!formaPagamento}
                  onClick={() => setFormaPagamento(false)}
                >
                  <RiBarcodeLine />
                  Boleto bancário
                </PaymentTab>

                <PaymentTab
                  type="button"
                  isActive={formaPagamento}
                  onClick={() => setFormaPagamento(true)}
                >
                  <FiCreditCard />
                  Cartão de crédito
                </PaymentTab>
              </PaymentTabs>

              {formaPagamento ? (
                <>
                  <Row>
                    <Field gapNumber={2}>
                      <Label htmlFor="nomeTitular">
                        Nome do titular do cartão
                      </Label>
                      <Input
                        id="nomeTitular"
                        type="text"
                        name="nomeTitular"
                        value={form.values.nomeTitular}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('nomeTitular') ? 'error' : ''
                        }
                      />
                      <ErrorMessage>
                        {getErrorMessage(
                          'nomeTitular',
                          form.errors.nomeTitular
                        )}
                      </ErrorMessage>
                    </Field>
                    <Field gapNumber={1}>
                      <Label htmlFor="cpfTitular">CPF do titular</Label>
                      <MaskedInput
                        mask="000.000.000-00"
                        id="cpfTitular"
                        name="cpfTitular"
                        value={form.values.cpfTitular}
                        onAccept={(value: string) =>
                          form.setFieldValue('cpfTitular', value)
                        }
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cpfTitular') ? 'error' : ''
                        }
                        placeholder="000.000.000-00"
                      />
                      <ErrorMessage>
                        {getErrorMessage('cpfTitular', form.errors.cpfTitular)}
                      </ErrorMessage>
                    </Field>
                  </Row>
                  <Row gapNumber={6}>
                    <Field gapNumber={2}>
                      <Label htmlFor="numeroCartao">Número do cartão</Label>
                      <MaskedInput
                        mask="0000 0000 0000 0000"
                        id="numeroCartao"
                        name="numeroCartao"
                        value={form.values.numeroCartao}
                        onAccept={(value: string) =>
                          form.setFieldValue('numeroCartao', value)
                        }
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('numeroCartao') ? 'error' : ''
                        }
                        placeholder="0000 0000 0000 0000"
                      />
                      <ErrorMessage>
                        {getErrorMessage(
                          'numeroCartao',
                          form.errors.numeroCartao
                        )}
                      </ErrorMessage>
                    </Field>
                    <Field gapNumber={1}>
                      <Label htmlFor="mes">Mês</Label>
                      <MaskedInput
                        mask="00"
                        id="mes"
                        name="mes"
                        value={form.values.mes}
                        onAccept={(value: string) =>
                          form.setFieldValue('mes', value)
                        }
                        onBlur={form.handleBlur}
                        className={checkInputHasError('mes') ? 'error' : ''}
                        placeholder="MM"
                      />
                      <ErrorMessage>
                        {getErrorMessage('mes', form.errors.mes)}
                      </ErrorMessage>
                    </Field>
                    <Field gapNumber={1}>
                      <Label htmlFor="ano">Ano</Label>
                      <MaskedInput
                        mask="00"
                        id="ano"
                        name="ano"
                        value={form.values.ano}
                        onAccept={(value: string) =>
                          form.setFieldValue('ano', value)
                        }
                        onBlur={form.handleBlur}
                        className={checkInputHasError('ano') ? 'error' : ''}
                        placeholder="AA"
                      />
                      <ErrorMessage>
                        {getErrorMessage('ano', form.errors.ano)}
                      </ErrorMessage>
                    </Field>
                    <Field gapNumber={1}>
                      <Label htmlFor="cvv">CVV</Label>
                      <MaskedInput
                        mask="000"
                        id="cvv"
                        name="cvv"
                        value={form.values.cvv}
                        onAccept={(value: string) =>
                          form.setFieldValue('cvv', value)
                        }
                        onBlur={form.handleBlur}
                        className={checkInputHasError('cvv') ? 'error' : ''}
                        placeholder="000"
                      />
                      <ErrorMessage>
                        {getErrorMessage('cvv', form.errors.cvv)}
                      </ErrorMessage>
                    </Field>
                    <Field gapNumber={1}>
                      <Label htmlFor="parcelamento">Parcelamento</Label>
                      <Select
                        id="parcelamento"
                        name="parcelamento"
                        value={form.values.parcelamento}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('parcelamento') ? 'error' : ''
                        }
                      >
                        <option value="">Selecione</option>
                        {Array.from(
                          { length: 12 },
                          (_, index) => index + 1
                        ).map((parcela) => (
                          <option key={parcela} value={parcela}>
                            {parcela}x de{' '}
                            {formatarPreco(valorFinal(items) / parcela)}
                          </option>
                        ))}
                      </Select>
                      <ErrorMessage>
                        {getErrorMessage(
                          'parcelamento',
                          form.errors.parcelamento
                        )}
                      </ErrorMessage>
                    </Field>
                  </Row>
                </>
              ) : (
                <PaymentNotice>
                  Ao optar por essa forma de pagamento, a confirmação pode levar
                  até 3 dias úteis, devido aos prazos das instituições
                  financeiras.
                  <br />O envio das peças só é iniciado após a aprovação do
                  boleto.
                </PaymentNotice>
              )}
            </>
          </Card>
          <Card title="Resumo do pedido">
            <>
              <ItemsList>
                {items.map((item) => (
                  <ItemRow key={item.id}>
                    <ItemName>
                      {item.quantity} x {item.titulo}
                    </ItemName>
                    <ItemPrice>{formatarPreco(totalItem(item))}</ItemPrice>
                  </ItemRow>
                ))}
              </ItemsList>
              <Totals>
                <TotalRow>
                  <span>Subtotal</span>
                  <span>{formatarPreco(valorFinalItens(items))}</span>
                </TotalRow>
                <TotalRow>
                  <span>Entrega</span>
                  <span>{items.length > 0 ? formatarPreco(40) : '—'}</span>
                </TotalRow>
              </Totals>
              <GrandTotal>
                <span>Total</span>
                <span>{formatarPreco(valorFinal(items))}</span>
              </GrandTotal>
              <CheckoutButton disabled={items.length === 0} type="submit">
                {isLoading ? 'Enviando...' : 'Finalizar compra'}
              </CheckoutButton>
              <SecureNotice>
                <FiShield />
                Pagamento seguro criptografado
              </SecureNotice>
            </>
          </Card>
        </form>
      )}
    </>
  )
}

export default Checkout
