import Select from 'react-select';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import {  useState } from 'react';
 const Selecter = ({field,form,options,placeholder,setCityId}) => {
const onChange = (option) => {
form.setFieldValue(field.name, option.label)
if(option.value === "دمشق" ){ setCityId("1")}
else if(option.value === "ريف دمشق"){  setCityId("2")}

} 
 const formik = useFormikContext()
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
const Sel = ({field,form,options=[],placeholder,setterm}) => {
  
  const [inputvalue, setInputvalue] = useState("")
  const onChange = (option) => {
    if(option.label ==='غير ذلك' ){
    option.label = inputvalue
    form.setFieldValue('region_term', inputvalue)
    }
  form.setFieldValue(field.name, option.label)
  setterm(inputvalue)
}    
    const formik = useFormikContext()    
      const handleInputChange = (e)=>{
          setInputvalue(e)
        //   options.pop()
        //   const r = "؟؟"
        //   options.push({ value: e, label: r + e }) 
        }
          return (
              <Select
                  options={[...options , {label:"غير ذلك" , value:inputvalue}]}
                  name={field.name}
                  value={options ? options.find(option => option.value === field.value) : ''}
                  onChange={(option)=>onChange(option||{label:"ibrahim"})}
                  onBlur={field.onBlur}
                  placeholder={placeholder}
                  defaultValue={{ label: formik.getFieldProps(field.name).value, value: formik.getFieldProps(field.name).value }}
                  onInputChange={handleInputChange}
  
  
              />
  
          )
          
      
  }

export const MultiSelect = ({placeholder,name,label,option, setCityId,id}) => {
    return (
      <div className='Form_Group'>
              <label className="label">{label}</label>
              <Field  name={name} placeholder={placeholder} id={id} component={Selecter}  options={option} setCityId={setCityId} />
              <ErrorMessage name={name} className='ErrorMessage'  component={"div"} />
  </div>
     )
  }
  export const Selec = ({placeholder,name,label,option,id,setterm}) => {
    return (
      <div className='Form_Group'>
              <label className="label">{label}</label>
              <Field  name={name} placeholder={placeholder} id={id} component={Sel}  options={option} setterm={setterm} />
              <ErrorMessage name={name} className='ErrorMessage'  component={"div"} />
  </div>
     )
  }