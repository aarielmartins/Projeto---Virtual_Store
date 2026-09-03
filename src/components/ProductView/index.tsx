import { useDispatch } from 'react-redux'
import {
  useGetProductQuery,
  useGetProductsByCollectionQuery
} from '../../services/api'
import { skipToken } from '@reduxjs/toolkit/query'
import { useParams, Link } from 'react-router-dom'
import CardProduct, { formatarPreco } from '../../components/CardProduct'
import Product from '../../models/Product'
import { add } from '../../store/reducers/cart'
import {
  PageContainer,
  Breadcrumb,
  ProductGrid,
  ImageWrapper,
  Info,
  Category,
  Title,
  Price,
  OldPrice,
  CurrentPrice,
  Description,
  AddToCartButton,
  DetailsTable,
  DetailRow,
  RelatedSection,
  RelatedTitle,
  RelatedGrid
} from './styles'

//pega os valores do campo "dimensões" e transforma em uma string formatada
const formatarDimensoes = (dimensoes: Product['dimensoes']) => {
  if (!dimensoes) return ''
  return `A${dimensoes.altura} x L${dimensoes.largura} x P${dimensoes.profundidade}`
}

//cria um objeto para mapear os valores da coleção para exibir como string "vestir" e "habitar"
const colecaoLabel: Record<Product['colecao'], string> = {
  vestir: 'Vestir',
  habitar: 'Habitar'
}

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
  }

  //enquanto o produto não for carregado retorne null, ou seja, não renderiza nada
  if (!product) {
    return <p>Carregando...</p>
  }

  return (
    <PageContainer>
      <Breadcrumb>
        <Link to="/">Início</Link>
        <span> / </span>
        <Link to={`/${product.colecao}`}>{colecaoLabel[product.colecao]}</Link>
        <span> / </span>
        <span className="current">{product.titulo}</span>
      </Breadcrumb>

      <ProductGrid>
        <ImageWrapper>
          <img src={product.imagem} alt={product.titulo} />
        </ImageWrapper>

        <Info>
          <Category>{product.categoria}</Category>
          <Title>{product.titulo}</Title>

          <Price>
            {product.valorComDesconto && (
              <OldPrice>{formatarPreco(product.valor)}</OldPrice>
            )}
            <CurrentPrice>
              {formatarPreco(product.valorComDesconto ?? product.valor)}
            </CurrentPrice>
          </Price>

          <Description>{product.descricao}</Description>

          <AddToCartButton onClick={addToCart}>
            Adicionar ao carrinho
          </AddToCartButton>

          <DetailsTable>
            <DetailRow>
              <span>Composição</span>
              <span>{product.composicao}</span>
            </DetailRow>

            {product.dimensoes && (
              <DetailRow>
                <span>Dimensões</span>
                <span>{formatarDimensoes(product.dimensoes)}</span>
              </DetailRow>
            )}

            {product.tamanhos && (
              <DetailRow>
                <span>Tamanhos</span>
                <span>{product.tamanhos.join(', ')}</span>
              </DetailRow>
            )}

            <DetailRow>
              <span>Feito à mão</span>
              <span>
                {product.feitoAMao ? `Sim, no ${product.origem}` : 'Não'}
              </span>
            </DetailRow>

            <DetailRow>
              <span>Entrega</span>
              <span>{product.entrega}</span>
            </DetailRow>
          </DetailsTable>
        </Info>
      </ProductGrid>

      {related && related.length > 0 && (
        <RelatedSection>
          <RelatedTitle>Você também pode gostar</RelatedTitle>
          <RelatedGrid>
            <CardProduct products={related} />
          </RelatedGrid>
        </RelatedSection>
      )}
    </PageContainer>
  )
}

export default ProductPage
