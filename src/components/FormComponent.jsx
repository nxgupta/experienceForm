import { Box, Grid, Paper, Step, StepLabel, Stepper } from "@mui/material"
import { StyledForm } from "./Wrappers/StyledForm"
import RenderHeader from './commons/RenderInputField'
import Step1 from "./steps/Step1"
import Step2 from "./steps/Step2"
import Step3 from "./steps/Step3"
import FinalOutput from "./steps/FinalOutput"
import { useFormContext } from "./Context/AppContext"


const FormComponent = () => {
    const {state}=useFormContext()
    
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
                    {state.currentStep===0?<Step1/>:null}
                    {state.currentStep===1?<Step2/>:null}
                    {state.currentStep===2?<Step3/>:null}
                    </form>
                    :<FinalOutput/>}
                </Box>
            </Grid>
        </StyledForm>
    )
}

export default FormComponent
