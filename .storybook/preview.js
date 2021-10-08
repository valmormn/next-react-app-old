import GlobalStyled from '../src/styles/global'

// import { ThemeProvider } from 'styled-components'

export const decorators = [
  (Story) => (
    // <ThemeProvider theme="default">
    <>
      <GlobalStyled />
      <Story />
    </>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
