import React from 'react'
import { TextField } from "@mui/material";
import { useField } from "formik";


const RenderInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <TextField
                variant='outlined'
                fullWidth
                label={label}
                size='small'
                {...props}
                {...field}
                error={meta.touched && meta.error && true}
                helperText={meta.touched && meta.error} />
        </>

    )
}

export default RenderInput