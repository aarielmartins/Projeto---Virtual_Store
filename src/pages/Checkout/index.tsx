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
      nomeCompleto: Yup.string().required('Campo obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
      cpf: Yup.string()
        .min(14, 'CPF inválido')
        .max(14, 'CPF inválido')
        .required('Campo obrigatório'),
      endereco: Yup.string().required('Campo obrigatório'),
      numero: Yup.string().required('Campo obrigatório'),
      cep: Yup.string()
        .min(8, 'CEP inválido')
        .max(8, 'CEP inválido')
        .required('Campo obrigatório'),
      cidade: Yup.string().required('Campo obrigatório'),
      estado: Yup.string().required('Campo obrigatório'),
      nomeTitular: Yup.string().required('Campo obrigatório'),
      cpfTitular: Yup.string()
        .min(14, 'CPF inválido')
        .max(14, 'CPF inválido')
        .required('Campo obrigatório'),
      numeroCartao: Yup.string()
        .min(19, 'Número do cartão inválido')
        .max(19, 'Número do cartão inválido')
        .required('Campo obrigatório'),
      mes: Yup.string()
        .min(2, 'Mês inválido')
        .max(2, 'Mês inválido')
        .required('Campo obrigatório'),
      ano: Yup.string()
        .min(2, 'Ano inválido')
        .max(2, 'Ano inválido')
        .required('Campo obrigatório'),
      cvv: Yup.string()
        .min(3, 'CVV inválido')
        .max(3, 'CVV inválido')
        .required('Campo obrigatório'),
      parcelamento: Yup.number().required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  console.log(form)

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
                    <option>1x de R$ 2.439,90</option>
                    <option>2x de R$ 1.219,95</option>
                    <option>3x de R$ 813,30</option>
                  </Select>
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

          <CheckoutButton disabled={items.length === 0}>
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
