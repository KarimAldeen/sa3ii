import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useField, useFormikContext } from 'formik';

export default function MuiSelect2({option,label,name,...props}) {
  const [floor, setfloor] = React.useState(option[0]?.value);
  const formik = useFormikContext()
  const [field, meta] = useField({ name, ...props });
  const isError = meta.touched && meta.error;
  
  
  const handleChange = (event) => {
    const Values = event.target.value;
    setfloor(Values);
    formik.setFieldValue(name, Values);

  }

 

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} >
      <InputLabel error={isError} className="MuiLable"  id="demo-simple-select-error-label">{label}</InputLabel>
        <Select
          labelId=" demo-simple-select-error-label"
          id=" demo-simple-select"
          className='MuiSelect'
          value={floor}
          onChange={handleChange}
          label={label}
          
        >
          {option?.map((item,index)=>{
            return(
              <MenuItem error={isError} key="index" value={item?.value}>{item?.label}</MenuItem>
            )
          })}
        
        </Select>
      </FormControl>
     
    </div>
  );
}
