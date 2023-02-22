import React from 'react'
import Sa33i from '../component/Done/Sa33i'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetForm_Info } from '../api/ApiHooks/Form_Info';
import LoadingPage from './LoadingPage';
const IsOrder = ({isError, isLoading}) => {
  const navigate = useNavigate();
  const [params, setSearchParams] = useSearchParams();
  const { data: Form_Info_data} = useGetForm_Info(params.get('param'))
  const Order = Form_Info_data?.data?.data?.order_info;

if (isLoading ) { 
  return <LoadingPage/>
}
  if(isError){
    navigate("/error")
  }
  return (
    <div className='IsOrder'>
      <div className='IsOrder_Form'>
 <h1> <span><h2>جاري توصيل طلبك </h2></span> {Order?.customer_name}</h1>
<div className='Order_Infos'>
   <div className='Order_Info'>
 <h6><p>المنطقة :</p> {Order?.delivery_region}</h6>
 <h6>  <p>العنوان :</p> {Order?.customer_address}  </h6>
 </div>
 <div className='Order_Info'>
 <h6> <p>التاريخ :</p> {Order?.date_delivery}</h6>
 <h6>  <p> الوقت :</p> {Order?.time_range_delivery}  </h6>
 </div>
 <div className='Order_Info'>
 <h6> <p> الهاتف :</p> {Order?.customer_phone}</h6>
 </div>
</div>



      </div>

      <Sa33i/>

    </div>
  )
}

export default IsOrder