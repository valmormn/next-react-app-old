import type { NextPage } from 'next'
//import Head from 'next/head'
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
      <h1 className={styles.title}>React Advanced</h1>
      <div className={styles.title}>
        <Image
          src="/v-a.svg"
          width={'300px'}
          height={'300px'}
          alt="Styled letter v as a logo"
        />
      </div>
    </>
  )
}

export default Home
