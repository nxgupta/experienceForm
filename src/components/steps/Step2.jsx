import { Button, Grid, Paper,Box } from '@mui/material'
import { Formik } from 'formik'
import { formValidation } from '../validations/validators'
import { RenderSelect, RenderHeader, RenderInput } from '../commons/index'

const Step2 = ({next,prev}) => {
    return (
        <Formik
        initialValues={{
            highestDegree: "",
            issuedBy: "",
            yearOfPassing: "",
        }}
        onSubmit={(values) => (console.log(values), next())}
            validationSchema={formValidation[1]}
        >{(formik) => (<form onSubmit={formik.handleSubmit}>
            <Paper component={Box} p={2}>
                <Box mb={2}>
                    <RenderHeader label="Please Fill Educational Data" />
                </Box>
                <Grid container spacing={1} marginBottom='16px' >
                    <Grid item xs={12} sm={6}>
                        <RenderSelect label="Highest Qualification" name='highestDegree' options={[{ key: 'P.hd', value: 'phd' }, { key: 'M.Tech', value: 'mtech' }, { key: 'B.Tech', value: 'btech' }]} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <RenderInput label="Issued By" name='issuedBy' />
                    </Grid>
                </Grid>
                <Grid container spacing={1} marginBottom='16px'>
                    <Grid item xs={12} sm={6}>
                        <RenderInput label="Passing Year" name='yearOfPassing' />
                    </Grid>
                </Grid>
                <Grid container spacing={1} justifyContent='space-between' >
                    <Grid item >
                        <Button variant="outlined" onClick={()=>prev()}>Prev</Button>
                    </Grid>
                    <Grid item >
                        <Button variant="outlined" type='submit'>Next</Button>
                    </Grid>
                </Grid>
            </Paper>
        </form>)}
        </Formik>
    )
}

export default Step2
