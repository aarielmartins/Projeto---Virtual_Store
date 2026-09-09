import { formatarPreco } from '../../components/CardProduct'
import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'
import { SectionTitle } from '../../components/Card/styles'
import { FiCreditCard, FiShield } from 'react-icons/fi'
import { RiBarcodeLine } from 'react-icons/ri'
import { useState } from 'react'
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
import Card from '../../components/Card'
import CollectionHeader from '../../components/CollectionHeader'
import { totalItem, valorFinalItens, valorFinal } from '../../components/Cart'

export type Props = {
  gapNumber?: number
}

const Checkout = () => {
  const [formaPagamento, setFormaPagamento] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <>
      <CollectionHeader
        title="Checkout"
        description="Finalize sua compra aqui."
      />
      <Card title="Dados de cobrança">
        <>
          <Row>
            <Field>
              <Label htmlFor="nomeCompleto">Nome completo</Label>
              <Input id="nomeCompleto" type="text" />
            </Field>
            <Field>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" />
            </Field>
            <Field>
              <Label htmlFor="cpf">CPF</Label>
              <Input id="cpf" type="text" placeholder="000.000.000-00" />
            </Field>
          </Row>

          <SectionTitle style={{ marginTop: '32px' }}>
            Dados de entrega
          </SectionTitle>
          <Row>
            <Field gapNumber={2}>
              <Label htmlFor="endereco">Endereço</Label>
              <Input id="endereco" type="text" />
            </Field>
            <Field gapNumber={1}>
              <Label htmlFor="numero">Número</Label>
              <Input id="numero" type="text" />
            </Field>
          </Row>
          <Row>
            <Field>
              <Label htmlFor="cep">CEP</Label>
              <Input id="cep" type="text" placeholder="00000-000" />
            </Field>
            <Field>
              <Label htmlFor="cidade">Cidade</Label>
              <Input id="cidade" type="text" />
            </Field>
            <Field>
              <Label htmlFor="estado">Estado</Label>
              <Input id="estado" type="text" />
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
                  <Input id="nomeTitular" type="text" />
                </Field>
                <Field gapNumber={1}>
                  <Label htmlFor="cpfTitular">CPF do titular</Label>
                  <Input
                    id="cpfTitular"
                    type="text"
                    placeholder="000.000.000-00"
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
                  />
                </Field>
                <Field gapNumber={1}>
                  <Label htmlFor="mes">Mês</Label>
                  <Input id="mes" type="text" placeholder="MM" />
                </Field>
                <Field gapNumber={1}>
                  <Label htmlFor="ano">Ano</Label>
                  <Input id="ano" type="text" placeholder="AA" />
                </Field>
                <Field gapNumber={1}>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" type="text" placeholder="123" />
                </Field>
                <Field gapNumber={1}>
                  <Label htmlFor="parcelamento">Parcelamento</Label>
                  <Select id="parcelamento">
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
    </>
  )
}

export default Checkout
