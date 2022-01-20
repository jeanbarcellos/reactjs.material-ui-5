import { ThemeProvider } from '@mui/material'
import themeConfig from './config/themeConfig'
import Layout from './layouts/Layout'

const App = () => {
  return (
    <ThemeProvider theme={themeConfig}>
      <Layout />
    </ThemeProvider>
  )
}

export default App
