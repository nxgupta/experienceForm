import { MenuItem, TextField, Typography } from "@mui/material"
import { useFormContext } from "../Context/AppContext"
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

export const RenderSelect=({
  label,
  name,
  options,
  InputChange
})=>{

  const {state,dispatch}=useFormContext();
  const {data,errors}=state;

  return(
    <TextField
      select
      label={label}
      name={name}
      color='primary'
      onChange={(e)=>dispatch({
        type:InputChange,
        payload:{
          name,value:e.target.value
        }
      })}
      value={data[name]}
      size='small'
      fullWidth={true}
      variant='outlined'
      error={errors[name] ? true: false}
      helperText={errors[name]}
        >
          {options.map((option) => (
            <MenuItem key={option.key} value={option.value}>
              {option.key}
            </MenuItem>
          ))}
        </TextField>
  )
}
export const RenderInputText=({label,name,type,InputChange})=>{

  const {state,dispatch}=useFormContext();
  const {data,errors}=state;
  return (<TextField 
  label={label}
  type={type ? type : "text"}
  name={name}
  color='primary'
  onChange={(e)=>dispatch({
    type:InputChange,
    payload:{
      name,value:e.target.value
    }
  })}
  value={data[name]}
  size='small'
  fullWidth={true}
  variant='outlined'
  error={errors[name] ? true: false}
  helperText={errors[name]}
  />)
} 
export default RenderHeader