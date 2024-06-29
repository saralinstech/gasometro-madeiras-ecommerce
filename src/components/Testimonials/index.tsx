'use client'
import Wrapper from '../_ui/Wrapper'
import { Container, Testimonial } from './styles'

const Testimonials = () => {
  return (
    <Wrapper>
      <Container>
        <h2>Depoimentos</h2>
        <ul>
          <Testimonial>
            <p>É só ter paciência para a entrega que dá tudo certo</p>
            <p>Roberto L.</p>
            <p className="testimonial-date">08/05/2024</p>
          </Testimonial>
          <Testimonial>
            <p>
              Sempre sou muito bem atendido, principalmente quando vou a loja
              física
            </p>
            <p>Manoel M.</p>
            <p className="testimonial-date">06/05/2024</p>
          </Testimonial>
          <Testimonial>
            <p>Recomendo a todos</p>
            <p>Danivis C.</p>
            <p className="testimonial-date">08/05/2024</p>
          </Testimonial>
          <Testimonial>
            <p>É só ter paciência para a entrega que dá tudo certo</p>
            <p>Roberto L.</p>
            <p className="testimonial-date">08/05/2024</p>
          </Testimonial>
        </ul>
      </Container>
    </Wrapper>
  )
}
export default Testimonials
