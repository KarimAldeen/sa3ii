import React from 'react'
import { Form, Formik } from 'formik'
import { initialValues, validationSchema, floorOption, Delivery_time } from './FormikData'
import { MultiSelect ,Selec} from '../../utils/MultiSelect'
import { useUpdateForm_Info } from '../../api/ApiHooks/Form_Info'
import { FormGroup } from './FormGroup'
import { DatePic } from '../../utils/DatePicker'
import { FormText } from './FormText'
import { useGetSub_Region } from '../../api/ApiHooks/Region'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { LoadingButton } from '../Rate/LoadingButton'

const FormData = ({ Form_Info_data }) => {
  const [cityId, setCityId] = useState("1")
  const [term, setterm] = useState("")
  const navigate = useNavigate();

  const { data: Sub_Region_data } = useGetSub_Region({ Sub_Region_id: cityId }, cityId)
  const [params, setSearchParams] = useSearchParams();

  const { mutate, isSuccess  , isLoading} = useUpdateForm_Info(params.get('param'))
  const user = Form_Info_data?.data?.data;
  const cites = Form_Info_data?.data?.data?.cites?.map((i) => ({ value: i.label_ar, label: i.label_ar }))
  const Sub_Region = Sub_Region_data?.data?.data?.map((i) => ({ value: i.label_ar + i.tags, label: i.label_ar  })).filter(i => { return i.value !== null })
  const Submit = (value) => {
    
    const Region_Data = (Sub_Region_data?.data?.data?.filter(i => i.label_ar === value?.delivery_region));
    const cites_Data = Form_Info_data?.data?.data?.cites?.filter(i => i.label_ar === value?.customer_cites)
    const FormValiue = {
      ...value , 
      customer_address: value.customer_address + "_" + value.customer_Build + "_"
        + value.customer_Build_entrance + "_" + value.customer_close_mark + "_" + value.customer_floor,
      lat: 999,
      lon: 999,
      city_id: cites_Data[0]?.id,
      region_id: Region_Data[0]?.region_id,
      sub_region_id: Region_Data[0]?.id,
   

    }
    if(FormValiue['region_id']){
      delete FormValiue['region_term']
    }
    mutate(FormValiue)
  }



  if (isSuccess) {
    navigate(`/isorder?param=${params.get('param')}`)
  }
  return (
    user &&
    <Formik initialValues={initialValues(user)} validationSchema={validationSchema} onSubmit={(value) => Submit(value)} >
      {
        (formik) => (
          <Form className='Form'>
            <FormText formik={formik} />
            <div>
              <div className='inputs tow'>
                <MultiSelect name="customer_cites" placeholder="أدخل المدينة" label="المدينة" option={cites} setCityId={setCityId} />

                <Selec name="delivery_region" placeholder="أدخل منطقتك" label="المنطقة" option={Sub_Region} setterm={setterm} />
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
                <MultiSelect name="customer_floor" label="الطابق" option={floorOption} placeholder="الطابق" setCityId={setCityId} />
                <MultiSelect name="time_range_delivery" id="time_range_delivery" placeholder="وقت التسليم" label="التسليم" option={Delivery_time} setCityId={setCityId} />

                <DatePic />
              </div>
              <div className='inputs one'>
                <FormGroup name="receiver_notes" label="ملاحظة" placeholder=" " />
              </div>
            </div>

            <div className='Form_Submit'>
            <LoadingButton isLoading={isLoading} type='submit' className='flex items-center justify-center' >تأكيد</LoadingButton>
              </div>
            <h5>للاستفسار التواصل مع خدمة الزبائن على الرقم 0962264575</h5>
          </Form>
        )
      }
    </Formik>
  )
}

export default FormData