import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useField, useFormikContext } from 'formik';

export default function MuiSelect1({ option, label, name, setCityId, ...props }) {
  const formik = useFormikContext();
  const [field, meta] = useField({ name, ...props });
  const isError = meta.touched && meta.error;
  // Provide the default value directly to useState
  const [floor, setfloor] = React.useState(option[0]?.value);

  const handleChange = (event) => {
    const value = event.target.value;
    setfloor(value);
    formik.setFieldValue(name, value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel className="MuiLable MuiSelect2Lable">{label}</InputLabel>
        <Select
          value={floor}
          onChange={handleChange}
          label={label}
          className='MuiSelect'

        >
          {option?.map((item, index) => {
            return (
              <MenuItem error={isError} key={index} value={item?.value}>
                {item?.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
