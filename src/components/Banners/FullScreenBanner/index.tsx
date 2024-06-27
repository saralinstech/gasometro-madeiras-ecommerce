'use client'

import Image from 'next/image'
import { Container, Banner } from './styles'

const FullScreenBanner = () => {
  return (
    <Container>
      <Banner>
        <div className="banner-infomations">
          <h4>Plano de Corte Online</h4>
          <ul>
            <li>Crie um login</li>
            <li>Escolha os MDFs ou Compensados que vai usar no seu projeto</li>
            <li>Escolha as Fitas, caso queira utilizar em seu projeto</li>
          </ul>
        </div>
        <div className="banner-image">
          <Image
            src={'/banners/planner.png'}
            alt="Imagem que contém partes de um lápis e um papel com desenho de uma planta"
            fill
          />
          <button>Acessar ferramenta</button>
        </div>
      </Banner>
    </Container>
  )
}
export default FullScreenBanner
