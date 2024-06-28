'use client'

import Image from 'next/image'
import { Container, SocialMediaLink, Wrapper } from './styles'
import Link from 'next/link'
import {
  InstagramIcon,
  PinterestIcon,
  FacebookIcon,
  YoutubeIcon,
} from '@/assets/icons/SocialMedias'
import {
  EloIcon,
  VisaIcon,
  AmexIcon,
  BoletoIcon,
  DinersClubIcon,
  HiperCardIcon,
  MasterCardIcon,
  MercadoPagoIcon,
  PixIcon,
} from '@/assets/icons/PaymentMethods'
import { LocationIcon, SmsIcon } from '@/assets/icons/Contact'
import { VtexIcon, WicommIcon } from '@/assets/icons/Logos'

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <div className="container-links">
            <span className="container-logo-social-medias">
              <Image
                src="./header/icons/logo.svg"
                alt="Logo marca Gasômetro Madeiras"
                width={217}
                height={52}
              />
              <div className="container-social-medias">
                <SocialMediaLink href={'https://SocialMediaLinkedin.com'}>
                  <InstagramIcon />
                </SocialMediaLink>
                <SocialMediaLink href={'https://pinterest.com'}>
                  <PinterestIcon />
                </SocialMediaLink>
                <SocialMediaLink href={'https://facebook.com'}>
                  <FacebookIcon />
                </SocialMediaLink>
                <SocialMediaLink href={'https://youtube.com'}>
                  <YoutubeIcon />
                </SocialMediaLink>
              </div>
            </span>
            <span className="container-pages-link">
              <p>Institucional</p>
              <Link href={'#'}>Sobre o Gasômetro Madeiras</Link>
              <Link href={'#'}>Mais perto de você</Link>
            </span>
            <span className="container-pages-link">
              <p>Atendimento</p>
              <Link href={'#'}>Minha conta</Link>
              <Link href={'#'}>Meus pedidos</Link>
              <Link href={'#'}>Cadastre-se</Link>
            </span>
          </div>
          <div className="container-payment-methods-footer-informations">
            <span className="container-payment-methods">
              <p>Formas de pagamento</p>
              <div>
                <MercadoPagoIcon />
                <VisaIcon />
                <MasterCardIcon />
                <HiperCardIcon />
                <PixIcon />
                <AmexIcon />
                <DinersClubIcon />
                <EloIcon />
                <BoletoIcon />
              </div>
            </span>
            <span className="container-footer-informations">
              <p>Gasômetro Madeiras 2024. Todos os direitos reservados.</p>
              <p>
                <strong>Endereço:</strong> Av. Dinamarca, 69 - V. Santa
                Terezinha Terezinha - São José dos Campos - SP CEP:12.231-200
                CNPJ: 50.763.606/0001-57
              </p>
              <p>
                <strong>Gasômetro Madeiras | Ramuth & Ramuth LTDA</strong> -
                Loja especializada em máquinas para marcenaria, acessórios e
                ferragens para móveis. Equipamentos e ferramentas para
                marcenaria com ótimos preços e condições.
              </p>
            </span>
          </div>
        </div>
        <div>
          <div className="container-contacts">
            <span>
              <LocationIcon />
              <p>
                Av. Dinamarca, 69 - V. Santa Terezinha São José dos Campos - SP
              </p>
            </span>
            <span>
              <SmsIcon />
              <p>sac@madeirasgasometro.com.br</p>
            </span>
            <select>
              <option value="">Loja Virtual (12) 3932-0424</option>
            </select>
          </div>
          <div className="container-security-seals">
            <p>Selos de Segurança</p>
            <Image
              src={'/securitySeals/vtex-certified.png'}
              alt="Imagens de selos de segurança"
              width={80}
              height={48}
            />
          </div>
          <div className="container-logos">
            <WicommIcon />
            <VtexIcon />
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
export default Footer
