import { Box, Grid, Paper, Step, StepLabel, Stepper } from "@mui/material"
import RenderHeader from './components/commons/RenderInputField'
import Step1 from "./components/steps/Step1"
import Step2 from "./components/steps/Step2"
import Step3 from "./components/steps/Step3"
import FinalOutput from "./components/steps/FinalOutput"
import { useFormik } from 'formik'
import styled from 'styled-components'
import { formValidation } from "./components/validations/validators"
import { useState } from "react"

export const StyledForm = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 98vh;
    flex-flow: "row wrap";
    .form{
        min-height: 300px;
    }
`

const FormComponent = () => {

    const [currentStep, setCurrentStep] = useState(0);

    const { errors, touched, handleChange,handleSubmit,handleBlur,values,isSubmitting,setSubmitting, } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            gender: "",

            highestDegree: "",
            issuedBy: "",
            yearOfPassing: "",

            skill: "",
            jobApplyFor: "",
            workExperience: "",
            expectedSalary: ""
        },
        validationSchema: formValidation[currentStep],
        onSubmit: (values, action) => {
            if (Object.keys(errors).length === 0) {
                setCurrentStep(currentStep + 1);
            }
            else{
                setSubmitting(false)
            }
            if(currentStep===2){
                console.log(values)
            }
        }
    })

    const tools={ errors, touched, handleChange,handleSubmit,handleBlur,values }
    const steps = [
        'Personal Bio',
        'Educational',
        'Professional'
    ]
    return (
        <StyledForm container>
            <Grid item xs={12} sm={7}>
                <Paper p={2} mb={2} component={Box}>
                    <Box mb={2} pt={1}>
                        <RenderHeader label="MultiStep Signup Form" />
                    </Box>
                    <Stepper activeStep={currentStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Paper>
                <Box>
                    {currentStep !== 3 ? <form className='form' onSubmit={handleSubmit}>
                        {currentStep === 0 ? <Step1 {...tools} /> : null}
                        {currentStep === 1 ? <Step2 {...tools}/> : null}
                        {currentStep === 2 ? <Step3 {...tools}/> : null}
                    </form>
                        : <FinalOutput />}
                </Box>
            </Grid>
        </StyledForm>
    )
}
export default FormComponent
