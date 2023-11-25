import React from 'react'
import { Form, Formik } from 'formik'
import { initialValues, validationSchema } from './FormikData'
import { useUpdateForm_Info } from '../../api/ApiHooks/Form_Info'
import { FormText } from './FormText'
import { useGetSub_Region } from '../../api/ApiHooks/SubRegion'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import moment from "moment";
import KarimField from '../Karimalden/KarimField'
import { FakeSelectData } from '../Karimalden/Const'
import { Col, Row } from 'reactstrap';


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

            <Row xs={1} sm={1} md={1} lg={2} xl={2}>
    <Col>
    <KarimField name="delivery_region" type="select"label='المنطقة'  option={FakeSelectData} isMulti={true} placeholder='أدخل منطقتك'  />
    <KarimField name="name" type="text"label='name'  placeholder='placeholder' />


    </Col>
   
  </Row>

            {/* <h5>للاستفسار التواصل مع خدمة الزبائن على الرقم 0962264575</h5> */}
          </Form>
        )
      }
    </Formik>
  )
}

export default NewForm