import Select from 'react-select';
import { ErrorMessage, Field, useFormikContext } from 'formik';
 const Selecter = ({field,form,options,placeholder,setCityId}) => {

const onChange = (option) => {
form.setFieldValue(field.name, option.value)

if(option.value === "دمشق" ){
   setCityId("1")

}else if(option.value === "ريف دمشق"){
    setCityId("2")

}
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

export const MultiSelect = ({placeholder,name,label,option, setCityId,id}) => {
    return (
      <div className='Form_Group'>
              <label className="label">{label}</label>
              <Field  name={name} placeholder={placeholder} id={id} component={Selecter}  options={option} setCityId={setCityId} />
              <ErrorMessage name={name} className='ErrorMessage'  component={"div"} />
  </div>
     )
  }