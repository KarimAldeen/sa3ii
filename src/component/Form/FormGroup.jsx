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
// export const FormGroupSelector = ({name,label,option,id}) => {
 
  
//   return (
//     <div className='Form_Group'>
//     <label className="label ">{label}</label>
//         <Field as="select" type="text" id={id} name={name}>
//             {option.map((item, index) => <option key={index}>{item.label}</option>)}
//         </Field>
//         <ErrorMessage name={name} className='ErrorMessage'  component={"div"} />

//       </div>
//    )
// }

