import React, { useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { useField, useFormikContext } from 'formik';

export default function MuiSearch1({ option, cityId, ...props }) {
  const defaultProps = {
    options: Array.isArray(option) ? option.map((opt, index) => ({ ...opt, key: index })) : [],
    getOptionLabel: (option) => option.label,
  };

  const formik = useFormikContext();
  const [inputValue, setInputValue] = React.useState({ value: formik.getFieldProps("delivery_region").value, label: formik.getFieldProps("delivery_region").value });
  const firstRender = useRef(true);  // useRef to track first render

  const handleChange = (event, newValue) => {
    const { value, label } = newValue;
    formik.setFieldValue('delivery_region', value);
    setInputValue({ value: value, label: label });
  };

  useEffect(() => {
    // Skip the first render
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setInputValue(null);
  }, [cityId]);

  const name = "delivery_region";
  const [field, meta] = useField({ name, ...props });
  const isError = meta.touched && meta.error;

  return (
    <Stack spacing={1}>
      <Autocomplete
        {...defaultProps}
        id="include-input-in-list"
        value={inputValue}
        includeInputInList
        onChange={(event, newValue) => {
          handleChange(event, newValue);
        }}
        renderInput={(params) => (
          <TextField error={isError} className="MuiLable MuiSelect2Lable" {...params} label="أدخل منطقتك" variant="standard" />
        )}
      />
    </Stack>
  );
}
