import React from 'react'
import { Field, Form, Formik } from 'formik'
import { initialValues, validationSchema,floorOption, Delivery_time } from './FormikData'
import { useUpdateForm_Info } from '../../api/ApiHooks/Form_Info'
import { FormText } from './FormText'
import { useGetSub_Region } from '../../api/ApiHooks/SubRegion'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import moment from "moment";
  import MuiSearch1 from '../Forms/MuiSearch1'
import MuiSelect1 from '../Forms/MuiSelect1'
import TextField from '@mui/material/TextField';
import MuiInput from '../Forms/MuiInput'
import MuiSelect2 from '../Forms/MuiSelect2'
import MuiSelect3 from '../Forms/MuiSelect3'
import { LoadingButton } from '../Rate/LoadingButton'
import MuiSelect from '../Forms/MuiSelect'


  

const NewForm = ({ Form_Info_data }) => {
  const [cityId, setCityId] = useState("1")
  const navigate = useNavigate();
  const { data: Sub_Region_data } = useGetSub_Region({ Sub_Region_id: cityId }, cityId)
  const [params, setSearchParams] = useSearchParams();

  const { mutate, isSuccess  , isLoading} = useUpdateForm_Info(params.get('param'))
  const user = Form_Info_data?.data?.data;
  const cites = Form_Info_data?.data?.data?.cites?.map((i) => ({ value: i.label_ar, label: i.label_ar }))
  const Sub_Region = Sub_Region_data?.data?.data?.map((i) => ({ value: i.label_ar + i.tags + i.rgn_tags + i.rgn_label_ar , label: i.label_ar  })).filter(i => { return i.label !== null })
  const Submit = (value) => {
    const Region_Data = Sub_Region_data?.data?.data?.filter(i => i.label_ar === value?.delivery_region);
    const cites_Data = Form_Info_data?.data?.data?.cites?.filter(i => i.label_ar === value?.customer_cites);
  
    const FormValue = {
      ...value,
      customer_address: value.customer_address + "_" + value.customer_Build + "_"
        + value.customer_Build_entrance + "_" + value.customer_close_mark + "_" + value.customer_floor,
      lat: 999,
      lon: 999,
      city_id: cites_Data[0]?.id,
      region_id: Region_Data[0]?.region_id,
      sub_region_id: Region_Data[0]?.id,
      date_delivery: moment(value?.date_delivery).format("YYYY-MM-DD"),
    };
  
    if (FormValue['region_id']) {
      delete FormValue['region_term'];
    }
  
    mutate(FormValue);
    console.log(FormValue);
  };


  if (isSuccess) {
    navigate(`/form/isorder?param=${params.get('param')}`)
  }
  
  return (
    // user &&
    <Formik initialValues={initialValues(user)} validationSchema={validationSchema} onSubmit={(value) => Submit(value)} >
      {
        (formik) => (
          <Form className='NewForm'>
            <FormText formik={formik} />
    
        <div className="TowInput">
        <MuiSelect  name="customer_cites"  label="المدينة" option={cites} setCityId={setCityId}    />
        <MuiSearch1 option={Sub_Region} cityId={cityId}  />
 

        </div>
        <div className="TowInput">
        <MuiInput  name="customer_address" helperText="مثال : بيت الجبة منزل الدكتور محمد"   label="منزل - مكتب السيد/ة" />
        <MuiInput name="customer_Build" label="اسم / رقم البناء"   helperText="مثال : بناء رقم 15 بناء المهندسين"  />
        </div>
        <div className="TowInput">
        
        <MuiInput name="customer_Build_entrance" label="المدخل" helperText=" مثال : المدخل اليمين" />
                <MuiInput name="customer_close_mark" label=" علامة قريبة " helperText="مثال : مقابل جامع النعمان" />
        </div>
        <div className='threeInput'>
        <MuiSelect1 name="customer_floor" label="الطابق" option={floorOption}      />
        <MuiSelect2  name="time_range_delivery" label="التسليم" option={Delivery_time} />
        <MuiSelect3 option={cites} setCityId={setCityId}    />

        </div>

        <div className='OneInput'>
        <MuiInput name="receiver_notes" label="ملاحظة"/>

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

export default NewForm