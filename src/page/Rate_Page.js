import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import * as Yup from "yup";
import { LoadingButton } from '../component/Rate/LoadingButton'
import { useUpdateRate } from '../api/ApiHooks/Rate'
import { useGetForm_Info } from '../api/ApiHooks/Form_Info'
import LoadingPage from './LoadingPage';
import Logo from '../images/Logo.png'
import star from '../images/star.svg'
import { RatingComponent } from 'react-rating-emoji'
import 'react-rating-emoji/dist/index.css'

function Rate_Page() {
      const navigate = useNavigate();

    const loaction= useLocation()
    const [Rate , setRate]= React.useState(0)
    const params = new URLSearchParams(loaction.search)
    
    const {mutate, isLoading , isSuccess} = useUpdateRate(params.get('param'))
   
    const {data,Loading,isFetching,isError} = useGetForm_Info(params.get('param'))
   const handelSubmit = (values)=>{
    mutate({
        user_rating:Rate,
        user_feedback:values.sugg
    })
   }
   const handleRating = (rate) => {
   

    setRate(rate)
  

  }
//    if ( Loading || isFetching ) {
//     return <LoadingPage/>
//     }
//   if(isError){
//     navigate("/form/error")
//   }
//   if(isSuccess){
//     navigate("/form/done?param=MzaxMLY0sjA2AgA=  ")
//   }

    

        return (
            <div className='form-home'>
                <div className='w-full flex justify-center'>
                    <img src={Logo} className='logo' alt='logo'/>
                </div> 
                <div className='form-input w-[70vw] md:w-[50vw]'>
                    <p className='text-white  font-semibold '>تم توصيل طلبك بنجاح</p>
                    <p className='primary font-semibold flex justify-center items-center'>تقييم الطلب <img src={star} alt='star' className='h-5  m-1 svg'  /> </p>
                    <strong>كيف كانت تجربة طلبك في ساعي؟</strong>
                    <strong className='block'>(تقييمك وملاحظاتك تساعدنا في تطوير خدمة ساعي)</strong>
                    <div className='my-7 text-center w-full Rating '>
              
                           <RatingComponent
                            rating={Rate} 
                            onClick={handleRating} />
                           </div>
                    <Formik  onSubmit={handelSubmit} validationSchema={getValidationSchema()} initialValues={{sugg:""}}>
                        {
                            (formik)=>(
                                  <Form className="formik">
                            <label className='font-bold text-[10px]  md:text-[15px] w-[80%]'>شاركنا بأفكارك ومقترحانك</label>
                        <div className='w-full'> 
                        <Field
                            name="sugg"
                            as="textarea"
                            
                            />
                         
                           <span className='text-red-500  w-full text-center font-semibold p-1  block ' >{formik.errors.sugg}</span>
                        </div>
                            <LoadingButton isLoading={isLoading} type='submit'  >تأكيد</LoadingButton>
                        </Form>
                            )
                        }
                      
                    </Formik>
                </div>
            </div>
        )
        
    }
    

export default Rate_Page

export const getValidationSchema = (editMode = false) => {
    return Yup.object().shape({
        sugg:Yup.string().required("مطلوب"),
    });
  };