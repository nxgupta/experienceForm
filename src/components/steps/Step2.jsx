import { Button, Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import RenderHeader, { RenderInputText, RenderSelect } from '../commons/RenderInputField'

const Step2 = ({ state, handleInputChange, handleSelectChange, handleNext, handlePrev }) => {
    return (
        <Paper component={Box} p={2}>
            <Box mb={2}>
                <RenderHeader label="Please Fill Educational Data" />
            </Box>
            <Grid container spacing={1} marginBottom='16px' >
                <Grid item xs={12} sm={6}>
                    {RenderSelect({
                        label: 'Highest Qualification', name: 'highestDegree',
                        options: [{ key: 'P.hd', value: 'phd' },{ key: 'M.Tech', value: 'mtech' }, { key: 'B.Tech', value: 'btech' }], handleInputChange:handleSelectChange, state
                    })}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {RenderInputText({ label: "Issued By", name: 'issuedBy', handleInputChange, state })}
                </Grid>
            </Grid>
            <Grid container spacing={1} marginBottom='16px'>
                <Grid item xs={12} sm={6}>
                    {RenderInputText({ label: "Passing Year", type: 'number', name: 'yearOfPassing', handleInputChange, state })}
                </Grid>
                <Grid item xs={12} sm={6}>
                {RenderSelect({
                        label: 'Job Apply For', name: 'jobType',
                        options: [{ key: 'Software Engineer', value: 'softwareengineer' },{ key: 'Technical Support', value: 'technicalsupport' }, { key: 'Customer Success Manager', value: 'customersuccessmanager' }], handleInputChange:handleSelectChange, state
                    })}
                </Grid>
            </Grid>
            <Grid container spacing={1} justifyContent='space-between' >
                <Grid item >
                    <Button variant="outlined" onClick={handlePrev}>Prev</Button>
                </Grid>
                <Grid item >
                    <Button variant="outlined" onClick={handleNext}>Next</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Step2
