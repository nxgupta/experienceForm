import { MenuItem, TextField, Typography } from "@mui/material"
import { fontSize } from "@mui/system"
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
  err,touch, handleChange,value,handleBlur
})=>{
  return(
    <>
    <TextField
      select
      label={label}
      name={name}
      onBlur={handleBlur}
      onChange={handleChange}
      value={value}
      size='small'
      fullWidth
      error={touch && err && true}
        >
          {options.map((option) => (
            <MenuItem key={option.key} value={option.value}>
              {option.key}
            </MenuItem>
          ))}
        </TextField>
        {err && touch &&<Typography sx={{color:'red', fontSize:'12px'}}>{err}</Typography>}
      </>
  )
}
export const RenderInputText=({label,name,type,err,touch,handleChange,value,handleBlur})=>{
  return (<><TextField 
  onBlur={handleBlur}
  label={label}
  type={type ? type : "text"}
  name={name}
  onChange={handleChange}
  value={value}
  size='small'
  fullWidth
  error={touch && err && true}
  />
  {err && touch &&<Typography sx={{color:'red', fontSize:'12px'}}>{err}</Typography>}
  </>)
} 
export default RenderHeader