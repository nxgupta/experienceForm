import { Box, Grid, Paper, Step, StepLabel, Stepper } from "@mui/material"
import RenderHeader from './components/commons/RenderHeader'
import {Step1, Step2,Step3,FinalOutput} from "./components/steps/"
import styled from 'styled-components'
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
    const steps = [
        'Personal Bio',
        'Educational',
        'Professional'
    ]

    const [state, setState] = useState(
    //     {
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     phone: "",
    //     gender: "",
    //     highestDegree: "",
    //     issuedBy: "",
    //     yearOfPassing: "",
    //     skill: "",
    //     jobApplyFor: "",
    //     workExperience: "",
    //     expectedSalary: ""
    // }
    [{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: ""
    }, {
        highestDegree: "",
        issuedBy: "",
        yearOfPassing: "",
    }, {
        skill: "",
        jobApplyFor: "",
        workExperience: "",
        expectedSalary: ""
    }])

    const next=()=>{
        setCurrentStep(currentStep+1)
    }
    const prev=()=>{
        setCurrentStep(currentStep-1)
    }

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
                    {currentStep===0?<Step1 next={next} state={state} setState={setState}/>:null}
                    {currentStep===1?<Step2 next={next} prev={prev} state={state} setState={setState}/>:null}
                    {currentStep===2?<Step3 next={next} prev={prev} state={state} setState={setState}/>:null}
                    {currentStep===3?<FinalOutput />:null}
                </Box>
            </Grid>
        </StyledForm>
    )
}
export default FormComponent
