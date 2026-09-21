import { FiCheck } from 'react-icons/fi'
import { priceSymbol } from '../../utils'
import * as S from './styles'

type Props = {
  orderId: number | string
  payment: boolean
  total: number
  email: string
}

const OrderConfirmation = ({ orderId, payment, total, email }: Props) => (
  <S.Card>
    <S.IconCircle>
      <FiCheck />
    </S.IconCircle>

    <S.Title>Muito obrigado</S.Title>
    <S.Subtitle>
      Recebemos seu pedido com sucesso. Abaixo estão os detalhes da sua compra:
    </S.Subtitle>

    <S.Divider />

    <S.DetailsTable>
      <S.DetailRow>
        <span>Número do pedido</span>
        <span>#{orderId}</span>
      </S.DetailRow>
      <S.DetailRow>
        <span>Forma de pagamento</span>
        <span>{payment ? 'Cartão de crédito' : 'Boleto bancário'}</span>
      </S.DetailRow>
      <S.DetailRow>
        <span>Total</span>
        <span>{priceSymbol(total)}</span>
      </S.DetailRow>
      <S.DetailRow>
        <span>E-mail</span>
        <span>{email}</span>
      </S.DetailRow>
    </S.DetailsTable>

    <S.Divider />

    {payment ? (
      <S.Message>
        Seu pagamento no cartão já foi processado. Em breve você receberá um
        e-mail com o código de rastreio da entrega.
      </S.Message>
    ) : (
      <S.Message>
        Como você optou pelo boleto bancário, a confirmação pode levar até 3
        dias úteis. Assim que o pagamento for aprovado, enviaremos um e-mail com
        o código de rastreio da entrega.
      </S.Message>
    )}

    <S.Message>
      Verifique sua caixa de entrada e a pasta de spam para garantir que receba
      nossa comunicação. Em caso de dúvidas, fale com o nosso atendimento.
    </S.Message>

    <S.Message>Agradecemos por escolher a Trama.</S.Message>

    <S.ContinueButton to="/">Continuar navegando</S.ContinueButton>
  </S.Card>
)

export default OrderConfirmation
