import { ErrorMessage, Field } from 'formik'
import React from 'react'

export const FormGroup = ({placeholder,name,label }) => {
  return (
    <div className='Form_Group'>
    <label className="label"> {label} </label>
    <Field type="text"   placeholder={placeholder} name={name}  />
    <ErrorMessage name={name}className='ErrorMessage' component={"div"} />
  </div> 
   )
}

