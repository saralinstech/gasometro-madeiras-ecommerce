'use client'
import Image from 'next/image'
import { Container, ContainerProductData, Flag } from './styles'

interface IProductCard {
  image: string
  altImage: string
  name: string
  previousPrice: string
  currentPrice: string
  installments: string
}

const ProductCard = ({
  image,
  altImage,
  name,
  previousPrice,
  currentPrice,
  installments,
}: IProductCard) => {
  return (
    <Container>
      <figure>
        <p className="offer-flag">Super Oferta!</p>
        <Image src={image} alt={altImage} width={265} height={265} />
      </figure>
      <ContainerProductData>
        <span className="container-flags">
          <Flag>Novidade</Flag>
          <Flag>-10%</Flag>
        </span>
        <span className="container-datas">
          <h5>{name}</h5>
          <p className="previous-price">{previousPrice}</p>
          <p className="current-price">
            {currentPrice}&nbsp;
            <strong>no Pix</strong>
          </p>
          <p className="installments">{installments}</p>
          <span>
            <button>Compre agora</button>
          </span>
        </span>
      </ContainerProductData>
    </Container>
  )
}
export default ProductCard
