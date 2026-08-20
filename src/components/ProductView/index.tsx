import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import CardProduct, { formatarPreco } from '../../components/CardProduct'
import Product from '../../models/Product'
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

const API_URL = 'https://projeto-virtual-store-api.onrender.com'

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
  //pega o parâmetro para criar a rota
  const { id } = useParams()
  //estado para armazenar o produto atual que começa nulo
  const [product, setProduct] = useState<Product | null>(null)
  //estado para armazenar os produtos relacionados que começa como um array vazio
  const [related, setRelated] = useState<Product[]>([])

  useEffect(() => {
    //limpa o produto antes de carregar um novo
    setProduct(null)

    fetch(`${API_URL}/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res))
    //executa quando muda o id do produto, ou seja, quando o usuário clica em outro produto
  }, [id])

  //armazena o estado dos produtos relacionados
  useEffect(() => {
    //só inicia quanto o produto atual estiver carregado
    if (!product) return

    fetch(`${API_URL}/products?colecao=${product.colecao}`)
      .then((res) => res.json())
      .then((res: Product[]) =>
        //filtra excluindo o produto atual e limitando a 3 produtos
        setRelated(res.filter((item) => item.id !== product.id).slice(0, 3))
      )
  }, [product])

  //enquanto o produto não for carregado retorne null, ou seja, não renderiza nada
  if (!product) return null

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

          <AddToCartButton>Adicionar ao carrinho</AddToCartButton>

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

      {related.length > 0 && (
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
