'use client'
import Image from 'next/image'
import QuickMessage from './QuickMessage'
import PageMenu from './PageMenu'
import {
  Container,
  HeaderCore,
  SearchForm,
  SearchInput,
  SearchButton,
  HeaderMenu,
  UserButton,
  FavoriteButton,
  CartButton,
} from './styles'

const Header = () => {
  return (
    <Container>
      <QuickMessage />
      <HeaderCore>
        <Image
          src="./header/icons/logo.svg"
          alt="Logo marca Gasômetro Madeiras"
          width={217}
          height={52}
        />
        <SearchForm autoFocus>
          <SearchInput placeholder="Escreva aqui a sua busca" />
          <Image
            src="./header/icons/vertical-divider.svg"
            alt="Icone de divisória"
            width={5}
            height={25}
          />
          <SearchButton>
            <Image
              src="./header/icons/search.svg"
              alt="Icone de busca"
              width={16}
              height={16}
            />
          </SearchButton>
        </SearchForm>
        <HeaderMenu>
          <UserButton>
            <Image
              src="./header/icons/user-profile.svg"
              alt="Icone de usuário"
              width={24}
              height={24}
            />
            <div>
              <p>Acesse sua conta</p>
              <p>Seus pedidos</p>
            </div>
          </UserButton>
          <FavoriteButton>
            <Image
              src="./header/icons/heart.svg"
              alt="Icone de usuário"
              width={24}
              height={24}
            />
          </FavoriteButton>
          <CartButton>
            <Image
              src="./header/icons/shopping-cart.svg"
              alt="Icone de usuário"
              width={24}
              height={24}
            />
            <span>0</span>
          </CartButton>
        </HeaderMenu>
      </HeaderCore>
      <PageMenu />
    </Container>
  )
}
export default Header
