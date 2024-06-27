'use client'
import Image from 'next/image'
import { CategoryOption, CategoryTag, Container } from './styles'

const Categories = () => {
  return (
    <Container>
      <CategoryOption href="#">
        <CategoryTag>
          <Image
            src={'./Categories/paint-bucket.svg'}
            alt="Icone do botão linha sayerlack"
            width={70}
            height={70}
          />
        </CategoryTag>
        <p>LINHA SAYERLACK</p>
      </CategoryOption>
      <CategoryOption href="#">
        <CategoryTag>
          <Image
            src={'./Categories/drill.svg'}
            alt="Icone do botão ferramentas"
            width={70}
            height={70}
          />
        </CategoryTag>
        <p>FERRAMENTAS</p>
      </CategoryOption>
      <CategoryOption href="#">
        <CategoryTag>
          <Image
            src={'./Categories/tape.svg'}
            alt="Icone do botão fita de borda"
            width={70}
            height={70}
          />
        </CategoryTag>
        <p>FITA DE BORDA</p>
      </CategoryOption>
      <CategoryOption href="#">
        <CategoryTag>
          <Image
            src={'./Categories/plywood.svg'}
            alt="Icone do botão compensados"
            width={70}
            height={70}
          />
        </CategoryTag>
        <p>COMPENSADOS</p>
      </CategoryOption>
      <CategoryOption href="#">
        <CategoryTag>
          <Image
            src={'./Categories/ironmongery.svg'}
            alt="Icone do botão ferragens"
            width={70}
            height={70}
          />
        </CategoryTag>
        <p>FERRAGENS</p>
      </CategoryOption>
      <CategoryOption href="#">
        <CategoryTag>
          <Image
            src={'./Categories/machines.svg'}
            alt="Icone do botão máquinas"
            width={70}
            height={70}
          />
        </CategoryTag>
        <p>MÁQUINAS</p>
      </CategoryOption>
    </Container>
  )
}
export default Categories
