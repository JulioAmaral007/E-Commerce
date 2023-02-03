import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import Image from 'next/image'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '@/styles/pages/app'
import Head from 'next/head'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg" href="/icon.svg" />
      </Head>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
        </Header>

        <Component {...pageProps} />
      </Container>
    </>
  )
}
