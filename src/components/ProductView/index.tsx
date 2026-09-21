import {
  useGetProductQuery,
  useGetProductsByCollectionQuery
} from '../../services/api'
import { useDispatch } from 'react-redux'
import { skipToken } from '@reduxjs/toolkit/query'
import { useParams, Link } from 'react-router-dom'
import { add, open } from '../../store/reducers/cart'
import { priceSymbol, colecaoLabel, dimensionAdjustment } from '../../utils'
import CardProduct from '../../components/CardProduct'
import Loader from '../Loader'
import * as S from './styles'

const ProductPage = () => {
  const dispatch = useDispatch()
  //pega o parâmetro id da URL usando useParams do react-router-dom
  const { id } = useParams()

  //usa o hook useGetProductQuery para buscar o produto pelo id, se id for undefined, usa skipToken para não fazer a requisição
  const { data: product } = useGetProductQuery(id ?? skipToken)

  //usa o hook useGetProductsByCollectionQuery para buscar produtos relacionados da mesma coleção
  // se product for undefined, usa skipToken para não fazer a requisição
  const { data: relatedRaw } = useGetProductsByCollectionQuery(
    product?.colecao ?? skipToken
  )

  //o "?" é usado para verificar se relatedRaw é undefined, se for retorna sem quebrar
  //filtra os produtos relacionados para não incluir o produto atual e limita a 3 produtos
  const related = relatedRaw
    ?.filter((item) => item.id !== product?.id)
    .slice(0, 3)

  //se o produto não for carregado não faça nada, se for pode adicionar ao carrinho, usando o dispatch para chamar a action add do slice cart
  const addToCart = () => {
    if (!product) return

    dispatch(add(product))
    dispatch(open())
  }

  //enquanto o produto não for carregado retorne null, ou seja, não renderiza nada
  if (!product) {
    return <Loader />
  }

  return (
    <S.PageContainer>
      <S.Breadcrumb>
        <Link to="/">Início</Link>
        <span> / </span>
        <Link to={`/${product.colecao}`}>{colecaoLabel[product.colecao]}</Link>
        <span> / </span>
        <span className="current">{product.titulo}</span>
      </S.Breadcrumb>

      <S.ProductGrid>
        <S.ImageWrapper>
          <img src={product.imagem} alt={product.titulo} />
        </S.ImageWrapper>

        <S.Info>
          <S.Category>{product.categoria}</S.Category>
          <S.Title>{product.titulo}</S.Title>

          <S.Price>
            {product.discountedPrice && (
              <S.OldPrice>{priceSymbol(product.valor)}</S.OldPrice>
            )}
            <S.CurrentPrice>
              {priceSymbol(product.discountedPrice ?? product.valor)}
            </S.CurrentPrice>
          </S.Price>

          <S.Description>{product.descricao}</S.Description>

          <S.AddToCartButton onClick={addToCart}>
            Adicionar ao carrinho
          </S.AddToCartButton>

          <S.DetailsTable>
            <S.DetailRow>
              <span>Composição</span>
              <span>{product.composicao}</span>
            </S.DetailRow>

            {product.dimensoes && (
              <S.DetailRow>
                <span>Dimensões</span>
                <span>{dimensionAdjustment(product.dimensoes)}</span>
              </S.DetailRow>
            )}

            {product.tamanhos && (
              <S.DetailRow>
                <span>Tamanhos</span>
                <span>{product.tamanhos.join(', ')}</span>
              </S.DetailRow>
            )}

            <S.DetailRow>
              <span>Feito à mão</span>
              <span>
                {product.feitoAMao ? `Sim, no ${product.origem}` : 'Não'}
              </span>
            </S.DetailRow>

            <S.DetailRow>
              <span>Entrega</span>
              <span>{product.entrega}</span>
            </S.DetailRow>
          </S.DetailsTable>
        </S.Info>
      </S.ProductGrid>

      {related && related.length > 0 && (
        <S.RelatedSection>
          <S.RelatedTitle>Você também pode gostar</S.RelatedTitle>
          <S.RelatedGrid>
            <CardProduct products={related} />
          </S.RelatedGrid>
        </S.RelatedSection>
      )}
    </S.PageContainer>
  )
}

export default ProductPage
