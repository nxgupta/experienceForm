import { Box, Grid, Paper, TextField } from "@mui/material"
import { StyledForm } from "./Wrappers/StyledForm"
import RenderHeader, { RenderInputText, RenderSelect } from './commons/RenderHeader'
import { useState } from "react"

const FormComponent = () => {
    let [state, setState] = useState({
        data: {
            firstName: "",
            lastName:"",
            gender:"",
            phone:"",
            email:"",

            highestDegree:"",
            issuedBy:"",
            yearOfPassing:"",
            jobType:"",

            skill:"",
            jobApplyFor:"",
            workExperience:"",
            expectedSalary:"",
        },
        errors: {
            firstName: ""
        },
    })
    const handleOnChange = (e) => {
        const { data, errors } = state;

        e.target.value.length < 3 ? errors[e.target.name] = `${e.target.name} must be atleast 3 letter` : errors[e.target.name] = ''

        data[e.target.name] = e.target.value;

        setState({ data, errors })
    }
    return (
        <StyledForm container>
            <Grid item xs={12} sm={7}>
                <Box p={2} mb={2} component={Paper}>
                    <RenderHeader label="Stepper component goes here" />
                </Box>
                <Box component={Paper}>
                    <form className='form'>
                        <Box mb={2}>
                            <RenderHeader label="Form component goes here" />
                        </Box>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    {RenderInputText({ label: "First Name", name: 'firstName', handleOnChange, state })}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {RenderInputText({ label: "Last Name", name: 'lastName', handleOnChange, state })}
                                </Grid>
                                {/* <Grid item xs={12}>
                                    {RenderSelect({ label: "First Name", type:'date', name: 'firstName', handleOnChange, state })}
                                </Grid> */}
                                <Grid item sm={6}>
                                    {RenderInputText({ label: "Phone number", type:'number', name: 'phone', handleOnChange, state })}
                                </Grid>
                                <Grid item sm={6}>
                                    {RenderInputText({ label: "Email", name: 'email', handleOnChange, state })}
                                </Grid>
                            </Grid>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </StyledForm>
    )
}

export default FormComponent
