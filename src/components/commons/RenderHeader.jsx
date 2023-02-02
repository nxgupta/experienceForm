import {Typography } from "@mui/material"
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
export default RenderHeader