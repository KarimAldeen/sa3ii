import Select from 'react-select';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import {  useState } from 'react';
 const Selecter = ({field,form,options,placeholder,setCityId }) => {
 const formik = useFormikContext()


const onChange = (option) => {
form.setFieldValue(field.name, option.label)
if(option.value === "دمشق" ){ 
  formik.setFieldValue('delivery_region', 'f')  

  setCityId("1")
  
}
else if(option.value === "ريف دمشق"){ 
  formik.setFieldValue('delivery_region', 'f')  

  setCityId("2")}

} 
  return (
            <Select
                options={options}
                name={field.name}
                value={options ? options.find(option => option.value === field.value) : ''}
                onChange={onChange}
                onBlur={field.onBlur}
                placeholder={placeholder}
                defaultValue={{ label: formik.getFieldProps(field.name).value, value: formik.getFieldProps(field.name).value }}


            />

        )
        
    
}
const Sel = ({field,form,options=[],placeholder}) => {
  
  const [inputvalue, setInputvalue] = useState("")
  const onChange = (option) => {
    if(option.label ==='غير ذلك' ){
    option.label = inputvalue
    form.setFieldValue('region_term', inputvalue)
    }
  form.setFieldValue(field.name, option.label)
}    
    const formik = useFormikContext()    
      const handleInputChange = (e)=>{
          setInputvalue(e)
      
        }
          return (
              <Select
                  options={[...options , {label:"غير ذلك" , value:inputvalue}]}
                  name={field.name}
                  value={formik.getFieldProps('delivery_region').value ==='f' ?" ":(options ? options.find(option => option.value === field.value) : '')}
                  onChange={(option)=>onChange(option||{label:"ibrahim"})}
                  onBlur={field.onBlur}
                  placeholder={placeholder}
                  defaultValue={{ label: formik.getFieldProps(field.name).value, value: formik.getFieldProps(field.name).value }}
                  onInputChange={handleInputChange}
  
  
              />
  
          )
          
      
  }

export const MultiSelect = ({placeholder,name,label,option, setCityId,id,delivery_region}) => {
    return (
      <div className='Form_Group'>
              <label className="label">{label}</label>
              <Field  name={name} placeholder={placeholder} id={id} component={Selecter}  options={option} setCityId={setCityId} delivery_region={delivery_region}/>
              <ErrorMessage name={name} className='ErrorMessage'  component={"div"} />
  </div>
     )
  }
  export const Selec = ({placeholder,name,label,option,id}) => {
    return (
      <div className='Form_Group'>
              <label className="label">{label}</label>
              <Field  name={name} placeholder={placeholder} id={id} component={Sel}  options={option}  />
              <ErrorMessage name={name} className='ErrorMessage'  component={"div"} />
  </div>
     )
  }