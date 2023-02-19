import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Customer_Info_Page from './page/Customer_Info_Page';
import Rate_Page from './page/Rate_Page';
import Done_Page from './page/Done_Page';
import Error from './page/Error';
import IsOrder from './page/IsOrder';
import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetForm_Info } from './api/ApiHooks/Form_Info';
import LoadingPage from './page/LoadingPage';
function App() {  const navigate = useNavigate();
  const [params, setSearchParams] = useSearchParams();
  const { data: Form_Info_data ,isError, isLoading } = useGetForm_Info(params.get('param'))
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
      if(Orderstatus?.user_rating != null){
        console.log("تم التقييم");
        navigate(`/done?param=${params.get('param')}`)

      } 

    } 
    else if(Orderstatus?.parcel_status != 5){
      console.log("!5");
      if(Orderstatus?.receiver_info_at === null){
        console.log("ما عبا الداتا");
          

      }
      else if(Orderstatus?.receiver_info_at != null){
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
