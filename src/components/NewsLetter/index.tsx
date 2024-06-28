'use client'
import Image from 'next/image'
import { Container, Form, Wrapper } from './styles'
import { FormEvent } from 'react'

const NewsLetter = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <Wrapper>
      <Container>
        <div>
          <Image src={'/newsLetter/letter.svg'} alt="" width={41} height={32} />
          <span>
            <h5>Mantenha-se atualizado(a)</h5>
            <p>Seja o primeiro a receber ofertas e descontos exclusivos!</p>
          </span>
        </div>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <input type="text" placeholder="Digite seu nome" />
          <input type="text" placeholder="Digite seu email..." />
          <input type="submit" name="Enviar" />
        </Form>
      </Container>
    </Wrapper>
  )
}
export default NewsLetter
