'use client'
import React from 'react'
import { Container, Page, Wrapper } from './styles'
import Link from 'next/link'

const PageMenu = () => {
  return (
    <Wrapper>
      <Container>
        <ul>
          <Page>
            <Link href={'#'}>Todos Departamentos</Link>
          </Page>
          <Page>
            <Link href={'#'}>Plano de Corte Online</Link>
          </Page>
          <Page>
            <Link href={'#'}>MDF e Paineis</Link>
          </Page>
          <Page>
            <Link href={'#'}>Fitas de Borda</Link>
          </Page>
          <Page>
            <Link href={'#'}>Puxadores</Link>
          </Page>
          <Page>
            <Link href={'#'}>Ferragens</Link>
          </Page>
          <Page>
            <Link href={'#'}>Máquinas</Link>
          </Page>
          <Page>
            <Link href={'#'}>Ferramentas</Link>
          </Page>
          <Page>
            <Link href={'#'}>Fórmicas</Link>
          </Page>
          <Page>
            <Link href={'#'}>Outlet</Link>
          </Page>
        </ul>
      </Container>
    </Wrapper>
  )
}
export default PageMenu
