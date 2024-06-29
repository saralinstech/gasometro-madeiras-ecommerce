'use client'
import Image from 'next/image'
import Wrapper from '../_ui/Wrapper'
import { Container } from './styles'

const Partners = () => {
  return (
    <Wrapper>
      <Container>
        <h2>Parceiros</h2>
        <ul>
          <li>
            <Image
              src={'/partners/arauco_n.jpg.png'}
              alt="Empresa parceira"
              width={100}
              height={100}
            />
          </li>
          <li>
            <Image
              src={'/partners/duratex_n.jpg.png'}
              alt="Empresa parceira"
              width={100}
              height={100}
            />
          </li>
          <li>
            <Image
              src={'/partners/fgvtn_n.jpg.png'}
              alt="Empresa parceira"
              width={100}
              height={100}
            />
          </li>
          <li>
            <Image
              src={'/partners/guararapes.jpg.png'}
              alt="Empresa parceira"
              width={100}
              height={100}
            />
          </li>
          <li>
            <Image
              src={'/partners/inmes_n.jpg.png'}
              alt="Empresa parceira"
              width={100}
              height={100}
            />
          </li>
          <li>
            <Image
              src={'/partners/zen_n.jpg.png'}
              alt="Empresa parceira"
              width={100}
              height={100}
            />
          </li>
        </ul>
      </Container>
    </Wrapper>
  )
}
export default Partners
