import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Main from 'layouts/Main'
import * as React from 'react'
import Header from './Header'
import Navigation from './Navigation'

const Layout = () => {
  const [open, setOpen] = React.useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header open={open} toggleDrawer={toggleDrawer} />
      <Navigation open={open} toggleDrawer={toggleDrawer} />
      <Main />
    </Box>
  )
}

export default Layout
