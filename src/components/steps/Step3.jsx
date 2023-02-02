import { Button, Grid, Paper, Box } from '@mui/material'
import { Formik } from 'formik'
import { formValidation } from '../validations/validators'
import { RenderSelect, RenderHeader, RenderInput } from '../commons/index'

const Step3 = ({next,prev}) => {
    return (<Formik
        initialValues={{
            skill: "",
            jobApplyFor: "",
            workExperience: "",
            expectedSalary: ""
        }}
        onSubmit={(values) => (console.log(values), next())}
        validationSchema={formValidation[2]}>

        {(formik) => (<form onSubmit={formik.handleSubmit}>
            <Paper component={Box} p={2}>
                <Box mb={2}>
                    <RenderHeader label="Please Fill Professional Data" />
                </Box>
                <Grid container spacing={1} marginBottom='16px' >
                    <Grid item xs={12} sm={6}>
                        <RenderSelect label= "Skills You have" name= 'skill' options={[
                                { key: "Programming", value: "Programming" },
                                { key: "Communication", value: "Communication" },
                                { key: "Designing", value: "Designing" },
                                { key: "not Yet Defined", value: "not Yet Defined" },
                            ]}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <RenderSelect label= "Experience Your have" name= 'workExperience' options={ [
                                { key: "Less than 1 year", value: "Less than 1 year" },
                                { key: "More than 1 year", value: "More than 1 year" },
                                { key: "1 year", value: "1 year" },
                            ]}/>
                    </Grid>
                </Grid>
                <Grid container spacing={1} marginBottom='16px' >
                    <Grid item xs={12} sm={6}>
                        <RenderSelect label= "Choose Work Type" name= 'jobApplyFor' options={[
                                { key: "Marketing", value: "Marketing" },
                                { key: "Official Work", value: "Official Work" },
                                { key: "Work from home", value: "Work from home" },
                            ]}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <RenderInput label= "Expected Salary" name= 'expectedSalary'/>
                    </Grid>
                </Grid>
                <Grid container spacing={1} justifyContent='space-between' >
                    <Grid item >
                        <Button variant="outlined" onClick={()=>prev()}>Prev</Button>
                    </Grid>
                    <Grid item >
                        <Button variant="outlined" type='submit'>Submit</Button>
                    </Grid>
                </Grid>
            </Paper>
        </form>)
        }
    </Formik>
    )

}

export default Step3
