import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Trash } from 'phosphor-react'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>hello world!</h1>

      <GlobalStyle />
    </ThemeProvider>
  )
}
