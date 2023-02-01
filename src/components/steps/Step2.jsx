import { Button, Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import RenderHeader, { RenderInputText, RenderSelect } from '../commons/RenderInputField'

const Step2 = ({ errors, touched, handleChange,handleBlur,values,setCurrentStep }) => {
    return (
        <Paper component={Box} p={2}>
            <Box mb={2}>
                <RenderHeader label="Please Fill Educational Data" />
            </Box>
            <Grid container spacing={1} marginBottom='16px' >
                <Grid item xs={12} sm={6}>
                    {RenderSelect({
                        label: 'Highest Qualification', name: 'highestDegree',
                        options: [{ key: 'P.hd', value: 'phd' },{ key: 'M.Tech', value: 'mtech' }, { key: 'B.Tech', value: 'btech' }], err:errors.highestDegree, touch:touched.highestDegree, handleChange, handleBlur, value:values.highestDegree})}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {RenderInputText({ label: "Issued By", name: 'issuedBy',err:errors.issuedBy, touch:touched.issuedBy, handleChange, handleBlur, value:values.issuedBy  })}
                </Grid>
            </Grid>
            <Grid container spacing={1} marginBottom='16px'>
                <Grid item xs={12} sm={6}>
                    {RenderInputText({ label: "Passing Year", name: 'yearOfPassing',err:errors.yearOfPassing, touch:touched.yearOfPassing, handleChange, handleBlur, value:values.yearOfPassing})}
                </Grid>
            </Grid>
            <Grid container spacing={1} justifyContent='space-between' >
                <Grid item >
                    <Button variant="outlined" onClick={()=>setCurrentStep((prevState)=>(prevState-1))}>Prev</Button>
                </Grid>
                <Grid item >
                    <Button variant="outlined" type='submit'>Next</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Step2
