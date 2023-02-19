import React from 'react'
import { Form, Formik } from 'formik'
import { initialValues, validationSchema, floorOption, Delivery_time } from './FormikData'
import { MultiSelect } from '../../utils/MultiSelect'
import { useUpdateForm_Info } from '../../api/ApiHooks/Form_Info'
import { FormGroup } from './FormGroup'
import { DatePic } from '../../utils/DatePicker'
import { FormText } from './FormText'
import { useGetSub_Region } from '../../api/ApiHooks/Region'
import {  useState } from 'react'

const FormData = ({Form_Info_data}) => {
  const [cityId, setCityId] = useState("1")
   
  const { data: Sub_Region_data } = useGetSub_Region({Sub_Region_id:cityId},cityId)
  const {mutate} = useUpdateForm_Info()
  const user = Form_Info_data?.data?.data;
  const cites = Form_Info_data?.data?.data?.cites?.map((i) => ({ value: i.label_ar, label: i.label_ar }))
  const Sub_Region = Sub_Region_data?.data?.data?.map((i) => ({ value: i.label_ar, label: i.label_ar })).filter(i => { return i.value !== null })
  const Submit = (value)=>{
   const Region_Data =( Sub_Region_data?.data?.data?.filter(i => i.label_ar === value?.delivery_region));
   const cites_Data = Form_Info_data?.data?.data?.cites?.filter(i => i.label_ar === value?.customer_cites)
      const FormValiue ={
      customer_address : value.customer_address+ "_"+ value.customer_Build+ "_"
     + value.customer_Build_entrance+ "_"+ value.customer_close_mark+ "_"+ value.customer_floor,
     lat: 999,
     lon : 999,
     city_id : cites_Data[0]?.id,
     region_id:Region_Data[0]?.region_id ,
     sub_region_id:Region_Data[0]?.id,
     region_term:value?.delivery_region,
    //  delivery_region : value?.delivery_region,
     date_delivery: value?.date_delivery,
     time_range_delivery:value?.time_range_delivery,
     receiver_notes:value?.receiver_notes

      }
           console.log(FormValiue);

           mutate(FormValiue)
  }




  return (
    user&& 
    <Formik initialValues={initialValues(user)} validationSchema={validationSchema} onSubmit={(value) => Submit(value)} >
      { 
        (formik) => (
          <Form className='Form'>
            <FormText formik={formik} />
            <div>
                   <div className='inputs tow'>
              <MultiSelect name="customer_cites" placeholder="أدخل المدينة" label="المدينة" option={cites}  setCityId={setCityId}/>

              <MultiSelect name="delivery_region" placeholder="أدخل منطقتك" label="المنطقة" option={Sub_Region} setCityId={setCityId} />
            </div>
            <div className='inputs tow'>
              <FormGroup name="customer_address" label="منزل - مكتب السيد/ة" placeholder=" مثال : بيت الجبة منزل الدكتور محمد" />
              <FormGroup name="customer_Build" label="اسم / رقم البناء" placeholder=" مثال : بناء رقم 15 بناء المهندسين " />
            </div>
            <div className='inputs tow'>
              <FormGroup name="customer_Build_entrance" label="المدخل" placeholder=" مثال : المدخل اليمين" />
              <FormGroup name="customer_close_mark" label=" علامة قريبة " placeholder="مثال : مقابل جامع النعمان" />
            </div>
            <div className='inputs thre'>
            <MultiSelect name="customer_floor" label="الطابق" option={floorOption} placeholder="الطابق"  setCityId={setCityId}/>

              {/* <FormGroupSelector name="customer_floor" label="الطابق" option={floorOption} isSuccess={isSuccess} /> */}
              {/* <FormGroupSelector name="time_range_delivery" label="التسليم" placeholder=" وقت التسليم" option={Delivery_time} user={user} /> */}
              <MultiSelect name="time_range_delivery" placeholder="وقت التسليم" label="التسليم" option={Delivery_time}  setCityId={setCityId}/>

              <DatePic />
            </div>
            <div className='inputs one'>
              <FormGroup name="receiver_notes" label="ملاحظة" placeholder=" "   />
            </div>
            </div>
       
            <div className='Form_Submit'>
              <button type='submit'> تأكيد </button>  </div>
            <h5>للاستفسار التواصل مع خدمة الزبائن على الرقم 0962264575</h5>
          </Form>
        )
      }
    </Formik>
  )
}

export default FormData