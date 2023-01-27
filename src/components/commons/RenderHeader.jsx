import { TextField, Typography } from "@mui/material"

const RenderHeader = ({align,color,variant,label}) => {
  return (
    <Typography
    align={align? align : "center"}
    color={color?color:"primary"}
    variant={variant? variant :"h6"}
    >
      {label}
    </Typography>
  )
}

export const RenderSelect=()=>{
  return(
    <TextField
          select
          label="Select"
          helperText="Please select your Gender"
          variant="standard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
  )
}
export const RenderInputText=({label,name,state,handleOnChange,type})=>{

  const {data,errors}=state;

  return (<TextField 
  label={label}
  type={type ? type : "text"}
  name={name}
  color='primary'
  onChange={handleOnChange}
  value={data[name]}
  size='small'
  fullWidth={true}
  variant='outlined'
  error={errors[name] ? true: false}
  helperText={errors[name]}
  />)
} 
export default RenderHeader