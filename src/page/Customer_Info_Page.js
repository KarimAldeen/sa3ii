import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetForm_Info } from '../api/ApiHooks/Form_Info';
import FormData from '../component/Form/Form'
import LoadingPage from './LoadingPage';
import Logo from '../images/Logo.png'

const Customer_Info_Page = () => {
  const navigate = useNavigate();
  const [params, setSearchParams] = useSearchParams();
  const { data: Form_Info_data, isLoading ,isError,isFetching } = useGetForm_Info(params.get('param'))

  if (isLoading || isFetching ) { 
  return <LoadingPage/>
}
  if(isError){
    navigate("/error")
  }
  return (
    <div className='App'>
    <div className='Form'>
      <FormData Form_Info_data={Form_Info_data} />
    </div>
    <img src={Logo} alt='' style={{width:"45vw"}} className="Logo" />
    </div>
  )
}

export default Customer_Info_Page