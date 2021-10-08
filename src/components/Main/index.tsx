//import styles from '../../styles/Home.module.css'

//type Props = {
//  title: string
//  description: string
//}
//
//const props = {
//  title: 'React Advanced',
//  description:
//    'NextJS, ReactJS, TypeScript, Styled Components, TailwindCSS, daisyUI'
//}

const Main = ({
  title = 'React Advanced',
  description = 'NextJS, ReactJS, TypeScript, Styled Components, TailwindCSS, daisyUI'
}) => (
  <main>
    <h1>{title}</h1>
    <p>{description}</p>
  </main>
)

export default Main
