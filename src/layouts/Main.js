import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import routesConfig from 'config/routesConfig'
import * as React from 'react'

const Copyright = props => {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const Main = () => {
  return (
    <Box
      component='main'
      sx={{
        backgroundColor: theme => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto'
      }}
    >
      <Toolbar />

      <Box
        component='main'
        sx={{
          padding: '20px'
        }}
      >
        {routesConfig()}
      </Box>

      <Copyright sx={{ pt: 4 }} />
    </Box>
  )
}

export default Main
