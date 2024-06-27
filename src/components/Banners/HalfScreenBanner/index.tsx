'use client'

import Image from 'next/image'
import { Container } from './styles'
import Link from 'next/link'
import { ReactNode } from 'react'

interface IHalfScreenBanner {
  title: ReactNode
  nameButton: string
  image: string
  altImage: string
}

const HalfScreenBanner = ({
  title,
  nameButton,
  image,
  altImage,
}: IHalfScreenBanner) => {
  return (
    <Container>
      <div className="container-infomations">
        {title}
        <Link href={'#'}>{nameButton}</Link>
      </div>
      <div className="container-image">
        <Image src={image} alt={altImage} width={275} height={200} />
      </div>
    </Container>
  )
}
export default HalfScreenBanner
