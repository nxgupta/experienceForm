import { MenuItem, TextField, Typography } from "@mui/material"

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
  state,
  options,
  handleInputChange
})=>{

  const {data,errors}=state;
  return(
    <TextField
      select
      label={label}
      name={name}
      color='primary'
      onChange={handleInputChange}
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
export const RenderInputText=({label,name,state,handleInputChange,type})=>{

  const {data,errors}=state;

  return (<TextField 
  label={label}
  type={type ? type : "text"}
  name={name}
  color='primary'
  onChange={handleInputChange}
  value={data[name]}
  size='small'
  fullWidth={true}
  variant='outlined'
  error={errors[name] ? true: false}
  helperText={errors[name]}
  />)
} 
export default RenderHeader