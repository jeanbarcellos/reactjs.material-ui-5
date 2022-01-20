import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MuiAppBar from '@mui/material/AppBar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import MuiDrawer from '@mui/material/Drawer'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import Chart from './Chart'
import { mainListItems, secondaryListItems } from './listItems'
import Deposits from './Deposits'
import Orders from './Orders'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
import Main from './Main'
import { navPrimary, navSecondary, drawerWidth } from './store'

const DashboardContent = () => {
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

const Dashboard = () => {
  return <DashboardContent />
}

export default Dashboard
