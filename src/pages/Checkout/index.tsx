import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'
import { FiCreditCard, FiShield } from 'react-icons/fi'
import { useFormik } from 'formik'
import { Navigate } from 'react-router-dom'
import { usePurchaseMutation } from '../../services/api'
import { SectionTitle } from '../../components/Card/styles'
import { RiBarcodeLine } from 'react-icons/ri'
import { clear } from '../../store/reducers/cart'
import * as Yup from 'yup'
import * as S from './styles'
import Card from '../../components/Card'
import CollectionHeader from '../../components/CollectionHeader'
import OrderConfirmation from '../../components/OrderConfirmation'
import {
  finalValue,
  totalItem,
  priceSymbol,
  finalValueItens
} from '../../utils'

export type Props = {
  gapNumber?: number
}

const Checkout = () => {
  const [formaPagamento, setFormaPagamento] = useState(false)
  const dispatch = useDispatch()
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

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
      console.log(items)
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
          installments: formaPagamento ? Number(values.parcelamento) : 0
        },
        products: items.map((item) => ({
          id: String(item.id),
          price: item.discountedPrice ?? item.valor,
          quantity: item.quantity
        }))
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

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <>
      {isSuccess && data ? (
        <OrderConfirmation
          orderId={data.id}
          payment={formaPagamento}
          total={finalValue(items)}
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
              <S.Row>
                <S.Field>
                  <S.Label htmlFor="nomeCompleto">Nome completo</S.Label>
                  <S.Input
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
                  <S.ErrorMessage>
                    {getErrorMessage('nomeCompleto', form.errors.nomeCompleto)}
                  </S.ErrorMessage>
                </S.Field>
                <S.Field>
                  <S.Label htmlFor="email">E-mail</S.Label>
                  <S.Input
                    id="email"
                    type="email"
                    name="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('email') ? 'error' : ''}
                  />
                  <S.ErrorMessage>
                    {getErrorMessage('email', form.errors.email)}
                  </S.ErrorMessage>
                </S.Field>
                <S.Field>
                  <S.Label htmlFor="cpf">CPF</S.Label>
                  <S.MaskedInput
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
                  <S.ErrorMessage>
                    {getErrorMessage('cpf', form.errors.cpf)}
                  </S.ErrorMessage>
                </S.Field>
              </S.Row>

              <SectionTitle style={{ marginTop: '32px' }}>
                Dados de entrega
              </SectionTitle>
              <S.Row gapNumber={4}>
                <S.Field gapNumber={2}>
                  <S.Label htmlFor="endereco">Endereço</S.Label>
                  <S.Input
                    id="endereco"
                    type="text"
                    name="endereco"
                    value={form.values.endereco}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('endereco') ? 'error' : ''}
                  />
                  <S.ErrorMessage>
                    {getErrorMessage('endereco', form.errors.endereco)}
                  </S.ErrorMessage>
                </S.Field>
                <S.Field gapNumber={1}>
                  <S.Label htmlFor="numero">Número</S.Label>
                  <S.Input
                    id="numero"
                    type="text"
                    name="numero"
                    value={form.values.numero}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('numero') ? 'error' : ''}
                  />
                  <S.ErrorMessage>
                    {getErrorMessage('numero', form.errors.numero)}
                  </S.ErrorMessage>
                </S.Field>
                <S.Field gapNumber={1}>
                  <S.Label htmlFor="complemento">Complemento</S.Label>
                  <S.Input
                    id="complemento"
                    type="text"
                    name="complemento"
                    value={form.values.complemento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </S.Field>
              </S.Row>
              <S.Row>
                <S.Field>
                  <S.Label htmlFor="cep">CEP</S.Label>
                  <S.MaskedInput
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
                  <S.ErrorMessage>
                    {getErrorMessage('cep', form.errors.cep)}
                  </S.ErrorMessage>
                </S.Field>
                <S.Field>
                  <S.Label htmlFor="cidade">Cidade</S.Label>
                  <S.Input
                    id="cidade"
                    type="text"
                    name="cidade"
                    value={form.values.cidade}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cidade') ? 'error' : ''}
                  />
                  <S.ErrorMessage>
                    {getErrorMessage('cidade', form.errors.cidade)}
                  </S.ErrorMessage>
                </S.Field>
                <S.Field>
                  <S.Label htmlFor="estado">Estado</S.Label>
                  <S.Input
                    id="estado"
                    type="text"
                    name="estado"
                    value={form.values.estado}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('estado') ? 'error' : ''}
                  />
                  <S.ErrorMessage>
                    {getErrorMessage('estado', form.errors.estado)}
                  </S.ErrorMessage>
                </S.Field>
              </S.Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <S.PaymentTabs>
                <S.PaymentTab
                  type="button"
                  isActive={!formaPagamento}
                  onClick={() => setFormaPagamento(false)}
                >
                  <RiBarcodeLine />
                  Boleto bancário
                </S.PaymentTab>

                <S.PaymentTab
                  type="button"
                  isActive={formaPagamento}
                  onClick={() => setFormaPagamento(true)}
                >
                  <FiCreditCard />
                  Cartão de crédito
                </S.PaymentTab>
              </S.PaymentTabs>

              {formaPagamento ? (
                <>
                  <S.Row>
                    <S.Field gapNumber={2}>
                      <S.Label htmlFor="nomeTitular">
                        Nome do titular do cartão
                      </S.Label>
                      <S.Input
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
                      <S.ErrorMessage>
                        {getErrorMessage(
                          'nomeTitular',
                          form.errors.nomeTitular
                        )}
                      </S.ErrorMessage>
                    </S.Field>
                    <S.Field gapNumber={1}>
                      <S.Label htmlFor="cpfTitular">CPF do titular</S.Label>
                      <S.MaskedInput
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
                      <S.ErrorMessage>
                        {getErrorMessage('cpfTitular', form.errors.cpfTitular)}
                      </S.ErrorMessage>
                    </S.Field>
                  </S.Row>
                  <S.Row gapNumber={6}>
                    <S.Field gapNumber={2}>
                      <S.Label htmlFor="numeroCartao">Número do cartão</S.Label>
                      <S.MaskedInput
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
                      <S.ErrorMessage>
                        {getErrorMessage(
                          'numeroCartao',
                          form.errors.numeroCartao
                        )}
                      </S.ErrorMessage>
                    </S.Field>
                    <S.Field gapNumber={1}>
                      <S.Label htmlFor="mes">Mês</S.Label>
                      <S.MaskedInput
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
                      <S.ErrorMessage>
                        {getErrorMessage('mes', form.errors.mes)}
                      </S.ErrorMessage>
                    </S.Field>
                    <S.Field gapNumber={1}>
                      <S.Label htmlFor="ano">Ano</S.Label>
                      <S.MaskedInput
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
                      <S.ErrorMessage>
                        {getErrorMessage('ano', form.errors.ano)}
                      </S.ErrorMessage>
                    </S.Field>
                    <S.Field gapNumber={1}>
                      <S.Label htmlFor="cvv">CVV</S.Label>
                      <S.MaskedInput
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
                      <S.ErrorMessage>
                        {getErrorMessage('cvv', form.errors.cvv)}
                      </S.ErrorMessage>
                    </S.Field>
                    <S.Field gapNumber={1}>
                      <S.Label htmlFor="parcelamento">Parcelamento</S.Label>
                      <S.Select
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
                            {priceSymbol(finalValue(items) / parcela)}
                          </option>
                        ))}
                      </S.Select>
                      <S.ErrorMessage>
                        {getErrorMessage(
                          'parcelamento',
                          form.errors.parcelamento
                        )}
                      </S.ErrorMessage>
                    </S.Field>
                  </S.Row>
                </>
              ) : (
                <S.PaymentNotice>
                  Ao optar por essa forma de pagamento, a confirmação pode levar
                  até 3 dias úteis, devido aos prazos das instituições
                  financeiras.
                  <br />O envio das peças só é iniciado após a aprovação do
                  boleto.
                </S.PaymentNotice>
              )}
            </>
          </Card>
          <Card title="Resumo do pedido">
            <>
              <S.ItemsList>
                {items.map((item) => (
                  <S.ItemRow key={item.id}>
                    <S.ItemName>
                      {item.quantity} x {item.titulo}
                    </S.ItemName>
                    <S.ItemPrice>{priceSymbol(totalItem(item))}</S.ItemPrice>
                  </S.ItemRow>
                ))}
              </S.ItemsList>
              <S.Totals>
                <S.TotalRow>
                  <span>Subtotal</span>
                  <span>{priceSymbol(finalValueItens(items))}</span>
                </S.TotalRow>
                <S.TotalRow>
                  <span>Entrega</span>
                  <span>{items.length > 0 ? priceSymbol(40) : '—'}</span>
                </S.TotalRow>
              </S.Totals>
              <S.GrandTotal>
                <span>Total</span>
                <span>{priceSymbol(finalValue(items))}</span>
              </S.GrandTotal>
              <S.CheckoutButton disabled={items.length === 0} type="submit">
                {isLoading ? 'Enviando...' : 'Finalizar compra'}
              </S.CheckoutButton>
              <S.SecureNotice>
                <FiShield />
                Pagamento seguro criptografado
              </S.SecureNotice>
            </>
          </Card>
        </form>
      )}
    </>
  )
}

export default Checkout
