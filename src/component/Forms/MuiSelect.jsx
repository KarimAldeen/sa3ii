import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useField, useFormikContext } from 'formik';

export default function MuiSelect({ option, label, name, setCityId, ...props }) {
  const formik = useFormikContext();
  const [field, meta] = useField({ name, ...props });
  const isError = meta.touched && meta.error;
  // Provide the default value directly to useState
  const [floor, setFloor] = React.useState(
    formik?.getFieldProps(name)?.value || (option && option.length > 0 ? option[0]?.value : '')
  );

  console.log(formik?.getFieldProps(name)?.value);

  const handleChange = (event) => {
    const value = event.target.value;
    setFloor(value);
    formik.setFieldValue(name, value);

    if (value === 'دمشق') {
      setCityId('1');
    } else if (value === 'ريف دمشق') {
      setCityId('2');
    }
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel className="MuiLable MuiSelect2Lable">{label}</InputLabel>
        <Select
          value={floor}
          onChange={handleChange}
          label={label}
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
