import { Button, Grid, Paper,Box } from '@mui/material'
import RenderHeader, { RenderInputText, RenderSelect } from '../commons/RenderInputField'

const Step1 = ({ errors, touched, handleChange,handleBlur,values}) => {
    return (
        <Paper component={Box} p={2}>
            <Box mb={2}>
                <RenderHeader label="Please Fill Personal Data" />
            </Box>
            <Grid container spacing={1} marginBottom='16px' >
                <Grid item xs={12} sm={6}>
                    {RenderInputText({ label: "First Name", name: 'firstName', err:errors.firstName, touch:touched.firstName, handleChange, handleBlur, value:values.firstName})}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {RenderInputText({ label: "Last Name", name: 'lastName', err:errors.lastName, touch:touched.lastName, handleChange, handleBlur, value:values.lastName })}
                </Grid>
            </Grid>
            <Grid container spacing={1} marginBottom='16px'>
                <Grid item xs={12}>
                    {RenderSelect({ label: "Gender", name: 'gender', options: [{ key: 'Male', value: 'Male' }, { key: 'Female', value: 'Female' }, { key: 'Other', value: 'Other' }],err:errors.gender, touch:touched.gender, handleChange, handleBlur, value:values.gender})}
                </Grid>
            </Grid>
            <Grid container spacing={1} marginBottom='16px'>
                <Grid item xs={12} sm={6}>
                    {RenderInputText({ label: "Phone number", type: 'number', name: 'phone',err:errors.phone, touch:touched.phone, handleChange, handleBlur, value:values.phone })}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {RenderInputText({ label: "Email", name: 'email',err:errors.email, touch:touched.email, handleChange, handleBlur, value:values.email})}
                </Grid>
            </Grid>
            <Grid container spacing={1} justifyContent='flex-end' >
                <Grid item >
                    <Button variant="outlined" type='submit'>Next</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Step1
