import { Box, Button, Grid, Paper, Step, StepLabel, Stepper, TextField } from "@mui/material"
import { StyledForm } from "./Wrappers/StyledForm"
import RenderHeader, { RenderInputText, RenderSelect } from './commons/RenderInputField'
import { useState } from "react"
import Step1 from "./steps/Step1"
import Step2 from "./steps/Step2"
import Step3 from "./steps/Step3"
import FinalOutput from "./steps/FinalOutput"

const FormComponent = () => {
    let [state, setState] = useState({
        data: {
            firstName: "",
            lastName: "",
            gender: "",
            phone: "",
            email: "",

            highestDegree: "",
            issuedBy: "",
            yearOfPassing: "",
            jobType: "",

            skill: "",
            jobApplyFor: "",
            workExperience: "",
            expectedSalary: "",
        },
        errors: {
            firstName: ""
        },
        currentStep: 0,
    })

    const handleInputChange = (e) => {
        const { data, errors } = state;
        e.target.value.length < 4 ? errors[e.target.name] = `${e.target.name} must be atleast 3 letter` : errors[e.target.name] = ''
        data[e.target.name] = e.target.value;
        setState({ ...state, data, errors })
    }
    
    const handleSelectChange = (e) => {
        const {data,errors}=state;
        data[e.target.name] = e.target.value;
        setState({ ...state, data, errors })
    }
    
    const handleEmailChange=(e)=>{
        const {data,errors}=state;
        data[e.target.name] = e.target.value;
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(regex.test(e.target.value)){
            errors[e.target.name] = null;
        }
        else{
            errors[e.target.name] = 'Please provide a valid email address'
        }
        setState({ ...state, data, errors })
    }
    
    const handleContactChange=(e)=>{
        const {data,errors}=state;
        data[e.target.name] = e.target.value;
        const regex=/^((\+91)|0)?[6789]\d{9}$/
        if(regex.test(e.target.value)){
            errors[e.target.name] = null;
        }
        else{
            errors[e.target.name] = 'Please enter a valid number';
        }
        setState({ ...state, data, errors })
    }
    
    
    const handleNext = () => {
        console.log('next clicked');
        setState({ ...state, currentStep:state.currentStep + 1 })
    }
    const handlePrev = () => {
        console.log('prev clicked');
        setState({ ...state, currentStep:state.currentStep - 1 })
    }
    
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
                <Stepper activeStep={state.currentStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Paper>
                <Box>
                {state.currentStep!==3?<form className='form'>
                    {state.currentStep===0?<Step1 state={state} handleInputChange={handleInputChange} handleNext={handleNext} handleEmailChange={handleEmailChange} handleSelectChange={handleSelectChange} handleContactChange={handleContactChange}/>:null}
                    {state.currentStep===1?    <Step2 state={state} handleInputChange={handleInputChange} handleSelectChange={handleSelectChange} handleNext={handleNext} handlePrev={handlePrev}/>:null}
                    {state.currentStep===2?    <Step3 state={state} handleInputChange={handleInputChange} handleSelectChange={handleSelectChange} handleNext={handleNext} handlePrev={handlePrev}/>:null}
                    </form>
                    :<FinalOutput/>}
                </Box>
            </Grid>
        </StyledForm>
    )
}

export default FormComponent
