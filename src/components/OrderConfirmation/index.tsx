import { FiCheck } from 'react-icons/fi'
import {
  Card,
  IconCircle,
  Title,
  Subtitle,
  Divider,
  DetailsTable,
  DetailRow,
  Message,
  ContinueButton
} from './styles'

const formatarPreco = (valor: number) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

type Props = {
  orderId: number | string
  formaPagamento: boolean // true = cartão, false = boleto
  total: number
  email: string
}

const OrderConfirmation = ({
  orderId,
  formaPagamento,
  total,
  email
}: Props) => (
  <Card>
    <IconCircle>
      <FiCheck />
    </IconCircle>

    <Title>Muito obrigado</Title>
    <Subtitle>
      Recebemos seu pedido com sucesso. Abaixo estão os detalhes da sua compra:
    </Subtitle>

    <Divider />

    <DetailsTable>
      <DetailRow>
        <span>Número do pedido</span>
        <span>#{orderId}</span>
      </DetailRow>
      <DetailRow>
        <span>Forma de pagamento</span>
        <span>{formaPagamento ? 'Cartão de crédito' : 'Boleto bancário'}</span>
      </DetailRow>
      <DetailRow>
        <span>Total</span>
        <span>{formatarPreco(total)}</span>
      </DetailRow>
      <DetailRow>
        <span>E-mail</span>
        <span>{email}</span>
      </DetailRow>
    </DetailsTable>

    <Divider />

    {formaPagamento ? (
      <Message>
        Seu pagamento no cartão já foi processado. Em breve você receberá um
        e-mail com o código de rastreio da entrega.
      </Message>
    ) : (
      <Message>
        Como você optou pelo boleto bancário, a confirmação pode levar até 3
        dias úteis. Assim que o pagamento for aprovado, enviaremos um e-mail com
        o código de rastreio da entrega.
      </Message>
    )}

    <Message>
      Verifique sua caixa de entrada e a pasta de spam para garantir que receba
      nossa comunicação. Em caso de dúvidas, fale com o nosso atendimento.
    </Message>

    <Message>Agradecemos por escolher a Trama.</Message>

    <ContinueButton to="/">Continuar navegando</ContinueButton>
  </Card>
)

export default OrderConfirmation
