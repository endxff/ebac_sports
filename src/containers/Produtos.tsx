import * as S from './styles'
import Produto from '../components/Produto'
import { useGetProductsQuery } from '../services/api'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProductsQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto produto={produto} key={produto.id} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
