import { Button, Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import RenderHeader, { RenderInputText, RenderSelect } from '../commons/RenderInputField'

const Step1 = ({ state, handleInputChange, handleNext, handleSelectChange, handleEmailChange,handleContactChange }) => {
    return (
        <Paper component={Box} p={2}>
            <Box mb={2}>
                <RenderHeader label="Please Fill Personal Data" />
            </Box>
            <Grid container spacing={1} marginBottom='16px' >
                <Grid item xs={12} sm={6}>
                    {RenderInputText({ label: "First Name", name: 'firstName', handleInputChange:handleInputChange, state })}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {RenderInputText({ label: "Last Name", name: 'lastName', handleInputChange:handleInputChange, state })}
                </Grid>
            </Grid>
            <Grid container spacing={1} marginBottom='16px'>
                <Grid item xs={12}>
                    {RenderSelect({ label: "Gender", name: 'gender', options: [{ key: 'Male', value: 'Male' }, { key: 'Female', value: 'Female' }, { key: 'Other', value: 'Other' }], handleInputChange:handleSelectChange, state })}
                </Grid>
            </Grid>
            <Grid container spacing={1} marginBottom='16px'>
                <Grid item xs={12} sm={6}>
                    {RenderInputText({ label: "Phone number", type: 'number', name: 'phone', handleInputChange:handleContactChange, state })}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {RenderInputText({ label: "Email", name: 'email', handleInputChange:handleEmailChange, state })}
                </Grid>
            </Grid>
            <Grid container spacing={1} justifyContent='flex-end' >
                <Grid item >
                    <Button variant="outlined" onClick={()=>handleNext()}>Next</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Step1
