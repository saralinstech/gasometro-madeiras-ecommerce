'use client'

import Image from 'next/image'
import { Container, Banner } from './styles'
import Link from 'next/link'
import Wrapper from '@/components/_ui/Wrapper'

const FullScreenBanner = () => {
  return (
    <Wrapper>
      <Container>
        <Banner>
          <div className="banner-infomations">
            <h4>Plano de Corte Online</h4>
            <ul>
              <li>Crie um login</li>
              <li>
                Escolha os MDFs ou Compensados que vai usar no seu projeto
              </li>
              <li>Escolha as Fitas, caso queira utilizar em seu projeto</li>
            </ul>
          </div>
          <div className="banner-image">
            <Image
              src={'/banners/planner.png'}
              alt="Imagem que contém partes de um lápis e um papel com desenho de uma planta"
              width={551}
              height={214}
            />
            <Link href={'#'}>Acessar ferramenta</Link>
          </div>
        </Banner>
      </Container>
    </Wrapper>
  )
}
export default FullScreenBanner
