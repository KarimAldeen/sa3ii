import { ErrorMessage, Field, useFormikContext } from 'formik';
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const DatePicer = () => {
  const formik = useFormikContext()
  const [startDate, setStartDate] = useState(new Date(formik.getFieldProps("date_delivery").value));
  function Change(date){
    setStartDate(date)
    formik.setFieldValue("date_delivery",date);
  
  }
  // useEffect(() => {
  //   formik.setFieldValue("date_delivery",date);
  // }, [])
  
  return (
   

    <ReactDatePicker
      // dateFormat={`yyyy/${month}/dd`}
      // selected={( new Date( formik.getFieldProps("date_delivery").value)) }
      selected={startDate}
      onChange={(date)=>Change(date)}
      minDate={new Date().setDate(new Date().getDate() + 1 )}
      maxDate={new Date().setDate(new Date().getDate() + 10)}
      filterDate={(date) => date.getDay() !== 5 && date.getDate() !== 0}
    />
  )

}
export const DatePic = () => {


  return (
    <div className='Form_Group'>
      <label className="label">تاريخ التسليم</label>
      <Field name="date_delivery" as={DatePicer} className="date_delivery" />

      <ErrorMessage name="date_delivery" className='ErrorMessage' component={"div"} />
    </div>

  )
}
