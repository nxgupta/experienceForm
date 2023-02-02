import { MenuItem, TextField } from "@mui/material";
import { useField } from "formik";

const RenderSelect = ({ label,options, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <TextField
            select
            fullWidth
            label={label}
            {...props}
            {...field}
            size='small'
            error= {meta.touched && meta.error && true}
            helperText= {meta.touched && meta.error} 
            >
                {options.map((option) => (
                <MenuItem key={option.key} value={option.value}>
                    {option.key}
                </MenuItem>
            ))}
            </TextField>
    )
}

export default RenderSelect