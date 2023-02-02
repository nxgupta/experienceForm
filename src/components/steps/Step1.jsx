import { Button, Grid, Paper, Box } from '@mui/material'
import { formValidation } from "../validations/validators"
import { RenderSelect, RenderHeader, RenderInput } from '../commons'
import { Formik } from 'formik'
//import initialValues from '../commons'

const Step1 = ({ next}) => {
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                gender: ""
            }}
            onSubmit={(values) => (console.log(values), next())}


            validationSchema={formValidation[0]}>
            {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                    <Paper component={Box} p={2}>
                        <Box mb={2}>
                            <RenderHeader label="Please Fill Personal Data" />
                        </Box>
                        <Grid container spacing={1} marginBottom='16px' >
                            <Grid item xs={12} sm={6}>
                                <RenderInput label="First Name" name='firstName' />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <RenderInput label="Last Name" name='lastName' />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} marginBottom='16px'>
                            <Grid item xs={12}>
                                <RenderSelect label="Gender" name='gender' options={[{ key: 'Male', value: 'Male' }, { key: 'Female', value: 'Female' }, { key: 'Other', value: 'Other' }]} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} marginBottom='16px'>
                            <Grid item xs={12} sm={6}>
                                <RenderInput label="Phone number" type='number' name='phone' />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <RenderInput label="Email" name='email' />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} justifyContent='flex-end' >
                            <Grid item >
                                <Button variant="outlined" type='submit'>Next</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </form>)}
        </Formik>
    )
}

export default Step1
