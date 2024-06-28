'use client'

import Wrapper from '@/components/_ui/Wrapper'
import HalfScreenBanner from '../HalfScreenBanner'
import { Container } from './styles'

const Banner1 = {
  title: (
    <h4>
      Fitas <br /> de Borda
    </h4>
  ),
  nameButton: 'Confira',
  image: '/banners/tapes.png',
  altImage: 'Mesa com várias fitas de borda',
}
const Banner2 = {
  title: <h4>Linha Sayerlack</h4>,
  nameButton: 'Confira',
  image: '/banners/paint.png',
  altImage:
    'Mão de um homem segurando um pincel passando em uma base de madeira',
}

const DoubleBanner = () => {
  return (
    <Wrapper>
      <Container>
        <HalfScreenBanner {...Banner1} />
        <HalfScreenBanner {...Banner2} />
      </Container>
    </Wrapper>
  )
}
export default DoubleBanner
