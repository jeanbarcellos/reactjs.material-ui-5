import { createTheme } from '@mui/material'
import { orange } from '@mui/material/colors'


const themeConfig = createTheme({
  palette: {
    type: 'light'
  },
  status: {
    danger: orange[500]
  }
})

export default themeConfig
