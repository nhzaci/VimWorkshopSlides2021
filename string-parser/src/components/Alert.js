import React from 'react'
import { Alert } from '@mui/material'

const AlertComponent = ({ word }) => {
  return (
    <Alert variant='filled' severity='success'>
      This is how your word looks like {word}
    </Alert>
  )
}

export default AlertComponent
