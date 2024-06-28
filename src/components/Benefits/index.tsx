'use client'
import Image from 'next/image'
import { BenefitsOptions, Container } from './styles'
import Wrapper from '../_ui/Wrapper'

const Benefits = () => {
  return (
    <Wrapper>
      <Container>
        <BenefitsOptions>
          <Image
            src={'./benefits/cards.svg'}
            alt="Icone de cartões"
            width={24}
            height={24}
          />
          <p>Pagamento com até 2 cartões</p>
        </BenefitsOptions>
        <BenefitsOptions>
          <Image
            src={'./benefits/card.svg'}
            alt="Icone de cartão"
            width={24}
            height={24}
          />
          <p>Em até 10x sem juros</p>
        </BenefitsOptions>
        <BenefitsOptions>
          <Image
            src={'./benefits/security-safe.svg'}
            alt="Icone de segurança"
            width={24}
            height={24}
          />
          <p>Compra 100% segura</p>
        </BenefitsOptions>
        <BenefitsOptions>
          <Image
            src={'./benefits/truck.svg'}
            alt="Icone de caminhão de entrega"
            width={24}
            height={24}
          />
          <p>Envio imediato para todo o Brasil</p>
        </BenefitsOptions>
      </Container>
    </Wrapper>
  )
}
export default Benefits
