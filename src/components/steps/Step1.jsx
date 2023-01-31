import { Button, Grid, Paper,Box } from '@mui/material'
import RenderHeader, { RenderInputText, RenderSelect } from '../commons/RenderInputField'
import { useFormContext } from '../Context/AppContext'
import { handleInputChange,handleEmailChange,handleSelectChange,handleContactChange, handleNext,handlePrev } from "../Context/Actions"

const Step1 = () => {
    const {state,dispatch}=useFormContext();
    return (
        <Paper component={Box} p={2}>
            <Box mb={2}>
                <RenderHeader label="Please Fill Personal Data" />
            </Box>
            <Grid container spacing={1} marginBottom='16px' >
                <Grid item xs={12} sm={6}>
                    {RenderInputText({ label: "First Name", name: 'firstName', InputChange:handleInputChange})}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {RenderInputText({ label: "Last Name", name: 'lastName', InputChange:handleInputChange})}
                </Grid>
            </Grid>
            <Grid container spacing={1} marginBottom='16px'>
                <Grid item xs={12}>
                    {RenderSelect({ label: "Gender", name: 'gender', options: [{ key: 'Male', value: 'Male' }, { key: 'Female', value: 'Female' }, { key: 'Other', value: 'Other' }], InputChange:handleSelectChange})}
                </Grid>
            </Grid>
            <Grid container spacing={1} marginBottom='16px'>
                <Grid item xs={12} sm={6}>
                    {RenderInputText({ label: "Phone number", type: 'number', name: 'phone', InputChange:handleContactChange})}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {RenderInputText({ label: "Email", name: 'email', InputChange:handleEmailChange})}
                </Grid>
            </Grid>
            <Grid container spacing={1} justifyContent='flex-end' >
                <Grid item >
                    <Button variant="outlined" onClick={()=>dispatch({type:handleNext})}>Next</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Step1
