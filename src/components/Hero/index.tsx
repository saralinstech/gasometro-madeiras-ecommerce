'use client'
import Image from 'next/image'
import { Wrapper, Container } from './styles'

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <div className="container-product-hero">
          <h2>Compensado Virola Nalval</h2>
          <h2>2.200 x 1.600 z 15mm</h2>
          <span className="previous-product-price">
            de <strong>R$ 348,58</strong> por apenas:
          </span>
          <div className="container-product-price">
            <span className="product-price">3x de R$ 79,90</span>
            <span className="product-price-installments">
              ou <strong>R$ 225,15</strong> no Pix ou Boleto
            </span>
          </div>
          <button>COMPRAR</button>
        </div>
        <Image
          src={'/banners/hero/product.png'}
          alt=""
          width={263}
          height={263}
          className="product-image"
        />
        <div className="container-image-background"></div>
      </Container>
    </Wrapper>
  )
}
export default Hero
