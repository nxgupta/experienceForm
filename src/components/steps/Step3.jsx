import { Button, Grid, Paper,Box } from '@mui/material'
import RenderHeader, { RenderInputText, RenderSelect } from '../commons/RenderInputField'

const Step3 = ({ errors, touched, handleChange,handleBlur,values }) => {
    return (
        <Paper component={Box} p={2}>
            <Box mb={2}>
                <RenderHeader label="Please Fill Professional Data" />
            </Box>
            <Grid container spacing={1} marginBottom='16px' >
                <Grid item xs={12} sm={6}>
                    {RenderSelect({
                        label: "Skills Your have", name: 'skill', options: [
                            { key: "Programming", value: "Programming" },
                            { key: "Communication", value: "Communication" },
                            { key: "Designing", value: "Designing" },
                            { key: "not Yet Defined", value: "not Yet Defined" },
                        ], err:errors.skill, touch:touched.skill, handleChange, handleBlur, value:values.skill
                    })}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {RenderSelect({
                        label: "Experience Your have", name: 'workExperience', options: [
                            { key: "Less than 1 year", value: "Less than 1 year" },
                            { key: "More than 1 year", value: "More than 1 year" },
                            { key: "1 year", value: "1 year" },
                        ], err:errors.workExperience, touch:touched.workExperience, handleChange, handleBlur, value:values.workExperience
                    })}
                </Grid>
            </Grid>
            <Grid container spacing={1} marginBottom='16px' >
                <Grid item xs={12} sm={6}>
                    {RenderSelect({
                        label: "Choose Work Type", name: 'jobApplyFor', options: [
                            { key: "Marketting", value: "Marketting" },
                            { key: "Official Work", value: "Official Work" },
                            { key: "Work from home", value: "Work from home" },
                        ], err:errors.jobApplyFor, touch:touched.jobApplyFor, handleChange, handleBlur, value:values.jobApplyFor
                    })}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {RenderInputText({ label: "Expected Salary", name: 'expectedSalary', err:errors.expectedSalary, touch:touched.expectedSalary, handleChange, handleBlur, value:values.expectedSalary})}
                </Grid>
            </Grid>
            <Grid container spacing={1} justifyContent='space-between' >
            <Grid item >
                    <Button variant="outlined" onClick={()=>setCurrentStep((prevState)=>(prevState-1))}>Prev</Button>
                </Grid>
                <Grid item >
                    <Button variant="outlined" type='submit'>Finish</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Step3
