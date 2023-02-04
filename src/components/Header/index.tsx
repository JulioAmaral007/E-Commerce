import Image from 'next/image'
import Link from 'next/link'

import logoImg from '../../assets/logo.svg'
import { HeaderContainer } from './styles'
import { Cart } from '../Cart'

export function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <Cart />
    </HeaderContainer>
  )
}
