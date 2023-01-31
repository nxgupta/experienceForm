import { Button, Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import RenderHeader, { RenderInputText, RenderSelect } from '../commons/RenderInputField'
import {handleNext,handlePrev,handleSelectChange,handleInputChange} from '../Context/Actions'
import { useFormContext } from '../Context/AppContext'

const Step2 = () => {
    const {dispatch}=useFormContext();
    return (
        <Paper component={Box} p={2}>
            <Box mb={2}>
                <RenderHeader label="Please Fill Educational Data" />
            </Box>
            <Grid container spacing={1} marginBottom='16px' >
                <Grid item xs={12} sm={6}>
                    {RenderSelect({
                        label: 'Highest Qualification', name: 'highestDegree',
                        options: [{ key: 'P.hd', value: 'phd' },{ key: 'M.Tech', value: 'mtech' }, { key: 'B.Tech', value: 'btech' }],InputChange:handleSelectChange})}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {RenderInputText({ label: "Issued By", name: 'issuedBy',InputChange:handleInputChange  })}
                </Grid>
            </Grid>
            <Grid container spacing={1} marginBottom='16px'>
                <Grid item xs={12} sm={6}>
                    {RenderInputText({ label: "Passing Year", type: 'number', name: 'yearOfPassing',InputChange:handleInputChange})}
                </Grid>
            </Grid>
            <Grid container spacing={1} justifyContent='space-between' >
                <Grid item >
                    <Button variant="outlined" onClick={()=>dispatch({type:handlePrev})}>Prev</Button>
                </Grid>
                <Grid item >
                    <Button variant="outlined" onClick={()=>dispatch({type:handleNext})}>Next</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Step2
