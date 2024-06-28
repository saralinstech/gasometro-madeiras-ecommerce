'use client'
import { products } from '@/utils'
import { Container } from './styles'
import ProductCard from './ProductCard'
import Wrapper from '../_ui/Wrapper'

const Showcase = () => {
  const productsLits = products.map((product, index) => (
    <ProductCard key={index} {...product} />
  ))

  return (
    <Wrapper>
      <Container>
        <h3>Chapas de MDF em Oferta!</h3>
        <div className="container-products">{productsLits}</div>
      </Container>
    </Wrapper>
  )
}
export default Showcase
