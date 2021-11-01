// import React, { ReactNode } from 'react'
// import Link from 'next/link'
// import { useRouter } from 'next/router'

// import Image from 'next/image'
// //import Head from 'next/head'
// import person from '@/icon/person.svg'

// import UserSvgIcon from '@/components/icons/user'
// import HomeSvgIcon from '@/components/icons/home'
// import HelpCircleSvgIcon from '@/components/icons/help-circle'
// import TranslateSvgIcon from '@/components/icons/translate'

// import usFlag from '../../public/locales/en/flag-united-states_1f1fa-1f1f8.png'
// import esFlag from '../../public/locales/es/flag-spain_1f1ea-1f1f8.png'
// import frFlag from '../../public/locales/fr/flag-france_1f1eb-1f1f7.png'
// import ptFlag from '../../public/locales/pt/flag-brazil_1f1e7-1f1f7.png'

// import styles from './header.module.scss'

// type Props = {
//   children?: ReactNode
//   title?: string
// }

const navbarClass = `navbar mb-2 shadow-lg bg-neutral text-neutral-content flex justify-between`

const Header = () => {
  // const router = useRouter()

  return (
    <>
      <header className={navbarClass}>
        <p>header</p>
      </header>
    </>
  )
}

export default Header
