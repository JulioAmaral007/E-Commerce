import { globalStyles } from '@/styles/global'
import Head from 'next/head'
import type { AppProps } from 'next/app'

import { Header } from '@/components/Header'

import { Container } from '@/styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg" href="/icon.svg" />
      </Head>

      <Container>
        <Header />

        <Component {...pageProps} />
      </Container>
    </>
  )
}
