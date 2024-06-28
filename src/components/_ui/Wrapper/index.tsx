import { ReactNode } from 'react'
import { Container } from './styles'

interface IWrapper {
  children: ReactNode
}

const Wrapper = ({ children }: IWrapper) => {
  return <Container>{children}</Container>
}
export default Wrapper
