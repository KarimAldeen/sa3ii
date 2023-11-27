import { ErrorMessage, Field, useField, useFormikContext } from 'formik'
import React from 'react'
import { FaExclamationCircle } from 'react-icons/fa';

export const FormGroup = ({placeholder,name,label ,...props }) => {
  const [field, meta] = useField({ name, ...props });
  const formik = useFormikContext();
  const isError = meta.touched && meta.error;
  const inputClass = isError? `is-invalid form__field`: "form__field" ;
   

  return (
    <div className='Form_Group'>
    <label className="label"> 
   
    {label}
          <ErrorMessage name={field.name}>
            {(msg) => <span className="field-error text-danger isErrorIcon">{(msg)}  </span>}
          </ErrorMessage>
    </label>
    <Field type="text"   placeholder={placeholder} name={name} className={inputClass} />
    {/* <ErrorMessage name={name}className='ErrorMessage' component={"div"} /> */}
  </div> 
   )
}