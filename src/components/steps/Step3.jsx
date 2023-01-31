import { Button, Grid, Paper,Box } from '@mui/material'
import RenderHeader, { RenderInputText, RenderSelect } from '../commons/RenderInputField'
import {handleNext,handlePrev,handleSelectChange,handleInputChange} from '../Context/Actions'
import { useFormContext } from '../Context/AppContext'

const Step3 = () => {

    const {dispatch,state}=useFormContext();

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
                        ], InputChange:handleSelectChange
                    })}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {RenderSelect({
                        label: "Experience Your have", name: 'workExperience', options: [
                            { key: "Less than 1 year", value: "Less than 1 year" },
                            { key: "More than 1 year", value: "More than 1 year" },
                            { key: "1 year", value: "1 year" },
                        ], InputChange:handleSelectChange
                    })}
                </Grid>
            </Grid>
            <Grid container spacing={1} marginBottom='16px' >
                <Grid item xs={12} sm={6}>
                    {RenderSelect({
                        label: "Choose Work Type", name: 'jobType', options: [
                            { key: "Marketting", value: "Marketting" },
                            { key: "Official Work", value: "Official Work" },
                            { key: "Work from home", value: "Work from home" },
                        ], InputChange:handleSelectChange
                    })}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {RenderInputText({ label: "Expected Salary", name: 'expectedSalary', InputChange:handleInputChange})}
                </Grid>
            </Grid>
            <Grid container spacing={1} justifyContent='space-between' >
            <Grid item >
                    <Button variant="outlined" onClick={()=>dispatch({type:handlePrev})}>Prev</Button>
                </Grid>
                <Grid item >
                    <Button variant="outlined" onClick={()=>{dispatch({type:handleNext}),console.log(state)}}>Finish</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Step3
