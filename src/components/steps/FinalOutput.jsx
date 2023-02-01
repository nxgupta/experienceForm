import { Box,Paper } from '@mui/material'
import React from 'react'

const FinalOutput = () => {
  return (
    <Paper component={Box} p={2} >
        <Box display='flex' justifyContent='center' alignItems='center' minHeight='252.5px'>Your form has been successfully submitted</Box>
    </Paper>
  )
}

export default FinalOutput
