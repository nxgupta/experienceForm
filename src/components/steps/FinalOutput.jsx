import { Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const FinalOutput = ({state}) => {
  return (
    <Paper component={Box} p={2} >
        <Box display='flex' justifyContent='center' alignItems='center' minHeight='252.5px'>Your form has been successfully submitted</Box>
    </Paper>
  )
}

export default FinalOutput
