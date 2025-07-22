import { ThemeProvider } from 'styled-components'

import Projetos from './containers/projetos'
import Sidebar from './containers/sidebar'
import Sobre from './containers/sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [usandoDarkTheme, setUsandoDarkTheme] = useState(true)

  const themeSwitch = () => setUsandoDarkTheme(!usandoDarkTheme)

  return (
    <ThemeProvider theme={usandoDarkTheme ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar themeSwitch={themeSwitch} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
