import type { NextPage } from 'next'
//import Head from 'next/head'
import { NextSeo } from 'next-seo'

import Image from 'next/image'
import styles from '../styles/Home.module.css'

//const hi = async () => {
//  const res = await fetch('/api/hello')
//  const data = await res.json()
//  console.log(data)
//  return data
//}
//
//const wtf = hi()
//
//console.log(wtf)

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Page Meta Title"
        description="This will be the page meta description"
        canonical="https://www.canonicalurl.ie/"
        openGraph={{
          url: 'https://www.canonicalurl.ie/',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt'
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second'
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' }
          ]
        }}
      />
      <h1 className={styles.title}>React Advanced</h1>
      <div className={styles.title}>
        <Image
          src="/v-a.svg"
          width={'300px'}
          height={'300px'}
          alt="Styled letter v as a logo"
        />
      </div>
      <button className="btn">neutral</button>
      <button className="btn btn-primary">primary</button>
      <button className="btn btn-secondary">secondary</button>
      <button className="btn btn-accent">accent</button>
      <button className="btn btn-ghost">ghost</button>
      <button className="btn btn-link">link</button>
    </>
  )
}

export default Home
