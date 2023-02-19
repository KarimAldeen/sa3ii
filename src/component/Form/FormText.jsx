import React from 'react'

export const FormText = ({formik}) => {
  return (
    <div className='Contact'>
    <h1>  السيد/ة {formik.getFieldProps("customer_name").value}</h1>
    <h5>يرجى ادخال تفاصيل تسليم الطرد البريدي</h5>
  </div>  )
}

