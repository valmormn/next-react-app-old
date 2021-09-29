import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyled from 'styles/global'
//import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Advanced - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyled />
      <Component {...pageProps} />
    </>
  )
}

export default App
