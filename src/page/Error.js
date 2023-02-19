import React from 'react'
import Sa33i from '../component/Done/Sa33i'

const Error = () => {
  return (
<div className=" Error d-flex  align-items-center justify-content-center vh-100">
<Sa33i/>

  <div className="text-center">
    <h1 className="display-1 fw-bold">404</h1>
    <p className="">
      {" "}
      <span className="text-danger">عذرا!</span> لم نجد ما تريد .
    </p>
    <p className="lead">  الرجاء التحقق من اي خطأ أو الاتصال على رقم خدمة الزبائن </p>
    0962264575
  </div>
</div>  )
}

export default Error