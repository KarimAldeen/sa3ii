import React, { useEffect,lazy } from 'react'
import {Route, Routes} from 'react-router-dom'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetForm_Info } from './api/ApiHooks/Form_Info';

const Customer_Info_Page = lazy(()=> import("./page/Customer_Info_Page"))
const Rate_Page = lazy(()=> import("./page/Rate_Page"))
const Done_Page = lazy(()=> import("./page/Done_Page"))
const Error = lazy(()=> import("./page/Error"))
const IsOrder = lazy(()=> import("./page/IsOrder"))
const LoadingPage = lazy(()=> import("./page/IsOrder"))

function App() {  const navigate = useNavigate();
  const [params, setSearchParams] = useSearchParams();
  const { data: Form_Info_data ,isError, isLoading} = useGetForm_Info(params.get('param'))
  const Orderstatus = Form_Info_data?.data?.data?.order_info
  useEffect(() => {
 
    if(isError){
      navigate("/error")

    }
    if(Orderstatus?.parcel_status === 5){
      console.log("تم التوصيل");
      if(Orderstatus?.user_rating === null){
        console.log("لم يتم التقييم");
        navigate(`/rate?param=${params.get('param')}`)
      } 
      if(Orderstatus?.user_rating !== null){
        console.log("تم التقييم");
        navigate(`/done?param=${params.get('param')}`)

      } 

    } 
    else if(Orderstatus?.parcel_status !== 5){
      console.log("!5");
      if(Orderstatus?.receiver_info_at === null){
        console.log("ما عبا الداتا");
        navigate(`/?param=${params.get('param')}`)


      }
      else if(Orderstatus?.receiver_info_at !== null){
        console.log(" عبا الداتا");
        navigate(`/isorder?param=${params.get('param')}`)


      }

    }
  }, [Orderstatus])
  return (
      <Routes>
      <Route  path='/' element={<Customer_Info_Page />}/>
      <Route  path='/rate' element={<Rate_Page isError={isError} isLoading={isLoading}/>}/>
      <Route  path='/isorder' element={<IsOrder isError={isError} isLoading={isLoading}/>}/>
      <Route  path='/done' element={<Done_Page isError={isError} isLoading={isLoading}/>}/>
      <Route  path='*' element={<Error/>}/>
      <Route  path='/loading' element={<LoadingPage/>}/>


      </Routes>
  );
}

export default App;
