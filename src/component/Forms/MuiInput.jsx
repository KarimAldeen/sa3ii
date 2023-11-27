import { TextField } from '@mui/material'
import { Field, useField, useFormikContext } from 'formik'
import React from 'react'

const MuiInput = ({name,label,helperText,...props}) => {
    const formik = useFormikContext()
    const [field, meta] = useField({ name, ...props });
    const isError = meta.touched && meta.error;

  return (
    <Field as={TextField}
    className="Text"
    error={isError}
     name={name} 
     label={label} 
     id="standard-basic" 
     helperText={helperText}
      variant="standard" 
      autoComplete="off"
      
      />

  )
}

export default MuiInput