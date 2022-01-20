import styled from '@emotion/styled'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import React from 'react'

const Line = styled('div')(({ theme, config }) => ({
  '*': {
    margin: theme.spacing(1)
  }
}))

const ThemeDemo = () => {
  return (
    <div>
      <Line>
        <Checkbox
          defaultChecked
          sx={{
            color: theme => theme.status.danger,
            '&$checked': {
              color: theme => theme.status.danger
            }
          }}
        />
      </Line>
      <Line>
        <Button variant='contained'>Default</Button>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <Button variant='contained' color='secondary'>
          Secondary
        </Button>
        <Button variant='contained' disabled>
          Disabled
        </Button>
        <Button variant='contained' color='primary' href='#contained-buttons'>
          Link
        </Button>
      </Line>
      <Line>
        <Button variant='outlined'>Default</Button>
        <Button variant='outlined' color='primary'>
          Primary
        </Button>
        <Button variant='outlined' color='secondary'>
          Secondary
        </Button>
        <Button variant='outlined' disabled>
          Disabled
        </Button>
        <Button variant='outlined' color='primary' href='#outlined-buttons'>
          Link
        </Button>
      </Line>
    </div>
  )
}

export default ThemeDemo
