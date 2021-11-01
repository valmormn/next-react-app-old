import React, { ReactNode } from 'react'
//import Link from 'next/link'
//import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'

//import styles from './layout.module.scss'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children }: Props) => (
  <>
    {/* 
		<Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
*/}
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
