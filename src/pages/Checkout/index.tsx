import { formatarPreco } from '../../components/CardProduct'
import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'
import { SectionTitle } from '../../components/Card/styles'
import { FiCreditCard, FiShield } from 'react-icons/fi'
import { RiBarcodeLine } from 'react-icons/ri'
import { useFormik } from 'formik'
import { useState } from 'react'
import { totalItem, valorFinalItens, valorFinal } from '../../components/Cart'
import * as Yup from 'yup'
import Card from '../../components/Card'
import CollectionHeader from '../../components/CollectionHeader'
import {
  Field,
  Row,
  Label,
  Input,
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
  SecureNotice
} from './styles'

export type Props = {
  gapNumber?: number
}

const Checkout = () => {
  const [formaPagamento, setFormaPagamento] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)

  //validação do formulário com Formik e Yup
  const form = useFormik({
    initialValues: {
      nomeCompleto: '',
      email: '',
      cpf: '',
      endereco: '',
      numero: '',
      cep: '',
      cidade: '',
      estado: '',
      nomeTitular: '',
      cpfTitular: '',
      numeroCartao: '',
      mes: '',
      ano: '',
      cvv: '',
      parcelamento: 1
    },
    validationSchema: Yup.object({
      nomeCompleto: Yup.string()
        .min(5, 'Nome completo inválido')
        .required('Campo obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
      cpf: Yup.string()
        .min(11, 'CPF inválido')
        .max(11, 'CPF inválido')
        .required('Campo obrigatório'),
      endereco: Yup.string().required('Campo obrigatório'),
      numero: Yup.string().required('Campo obrigatório'),
      cep: Yup.string()
        .min(8, 'CEP inválido')
        .max(8, 'CEP inválido')
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
            .min(11, 'CPF inválido')
            .max(11, 'CPF inválido')
            .required('Campo obrigatório'),
        otherwise: (schema) => schema
      }),
      //funciona apenas quando a forma de pagamento é cartão de crédito,
      // caso contrário não é necessário validar
      numeroCartao: Yup.string().when([], {
        is: () => formaPagamento,
        then: (schema) =>
          schema
            .min(19, 'Número do cartão inválido')
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
        then: (schema) => schema.required('Campo obrigatório'),
        otherwise: (schema) => schema
      })
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  //mostra o erro só depois que o usuário interagir com o campo
  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isValid = fieldName in form.errors

    if (isTouched && isValid) return message
    return ''
  }

  return (
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
              />
              <small>
                {getErrorMessage('nomeCompleto', form.errors.nomeCompleto)}
              </small>
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
              />
              <small>{getErrorMessage('email', form.errors.email)}</small>
            </Field>
            <Field>
              <Label htmlFor="cpf">CPF</Label>
              <Input
                id="cpf"
                type="text"
                name="cpf"
                value={form.values.cpf}
                placeholder="000.000.000-00"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
            </Field>
          </Row>

          <SectionTitle style={{ marginTop: '32px' }}>
            Dados de entrega
          </SectionTitle>
          <Row>
            <Field gapNumber={2}>
              <Label htmlFor="endereco">Endereço</Label>
              <Input
                id="endereco"
                type="text"
                name="endereco"
                value={form.values.endereco}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('endereco', form.errors.endereco)}</small>
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
              />
              <small>{getErrorMessage('numero', form.errors.numero)}</small>
            </Field>
          </Row>
          <Row>
            <Field>
              <Label htmlFor="cep">CEP</Label>
              <Input
                id="cep"
                type="text"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="00000-000"
              />
              <small>{getErrorMessage('cep', form.errors.cep)}</small>
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
              />
              <small>{getErrorMessage('cidade', form.errors.cidade)}</small>
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
              />
              <small>{getErrorMessage('estado', form.errors.estado)}</small>
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
                  <Label htmlFor="nomeTitular">Nome do titular do cartão</Label>
                  <Input
                    id="nomeTitular"
                    type="text"
                    name="nomeTitular"
                    value={form.values.nomeTitular}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('nomeTitular', form.errors.nomeTitular)}
                  </small>
                </Field>
                <Field gapNumber={1}>
                  <Label htmlFor="cpfTitular">CPF do titular</Label>
                  <Input
                    id="cpfTitular"
                    type="text"
                    placeholder="000.000.000-00"
                    name="cpfTitular"
                    value={form.values.cpfTitular}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('cpfTitular', form.errors.cpfTitular)}
                  </small>
                </Field>
              </Row>
              <Row gapNumber={6}>
                <Field gapNumber={2}>
                  <Label htmlFor="numeroCartao">Número do cartão</Label>
                  <Input
                    id="numeroCartao"
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    name="numeroCartao"
                    value={form.values.numeroCartao}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('numeroCartao', form.errors.numeroCartao)}
                  </small>
                </Field>
                <Field gapNumber={1}>
                  <Label htmlFor="mes">Mês</Label>
                  <Input
                    id="mes"
                    type="text"
                    placeholder="MM"
                    name="mes"
                    value={form.values.mes}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('mes', form.errors.mes)}</small>
                </Field>
                <Field gapNumber={1}>
                  <Label htmlFor="ano">Ano</Label>
                  <Input
                    id="ano"
                    type="text"
                    placeholder="AA"
                    name="ano"
                    value={form.values.ano}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('ano', form.errors.ano)}</small>
                </Field>
                <Field gapNumber={1}>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    type="text"
                    placeholder="123"
                    name="cvv"
                    value={form.values.cvv}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
                </Field>
                <Field gapNumber={1}>
                  <Label htmlFor="parcelamento">Parcelamento</Label>
                  <Select
                    id="parcelamento"
                    name="parcelamento"
                    value={form.values.parcelamento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  >
                    <option value="1">1x de R$ 2.439,90</option>
                    <option value="2">2x de R$ 1.219,95</option>
                    <option value="3">3x de R$ 813,30</option>
                  </Select>
                  <small>
                    {getErrorMessage('parcelamento', form.errors.parcelamento)}
                  </small>
                </Field>
              </Row>
            </>
          ) : (
            <PaymentNotice>
              Ao optar por essa forma de pagamento, a confirmação pode levar até
              3 dias úteis, devido aos prazos das instituições financeiras.
              <br />O envio das peças só é iniciado após a aprovação do boleto.
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
          {/* impede que o usuário finalize a compra sem ter itens no carrinho */}
          <CheckoutButton disabled={items.length === 0} type="submit">
            Finalizar compra
          </CheckoutButton>
          <SecureNotice>
            <FiShield />
            Pagamento seguro criptografado
          </SecureNotice>
        </>
      </Card>
    </form>
  )
}

export default Checkout
