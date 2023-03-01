import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  customer_Build: Yup.string().required("مطلوب"),
  customer_cites: Yup.string().required("مطلوب"),
  delivery_region: Yup.string().required("مطلوب"),
  customer_address: Yup.string().required("مطلوب"),
  customer_floor: Yup.string().required("مطلوب"),


})
export const initialValues = (object)=>{
  if(!object){  
    return {
      customer_name: "المحترم", customer_cites: "دمشق", delivery_region: "", customer_address: "",
      customer_Build: "", customer_Build_entrance: "", customer_close_mark: "",
      receiver_notes: "", customer_floor: "", time_range_delivery: "", date_delivery: "",
      region_term:''
    };
  }
  return {
  customer_name:object?.order_info?.customer_name??"",
  receiver_notes:object?.order_info?.user_feedback??"",
   customer_cites: object?.cites[0].label_ar??"",
   delivery_region: object?.order_info?.delivery_region??"",
   customer_address: "",

  customer_Build:"",
   customer_Build_entrance: "",
   customer_close_mark: "",
   region_term:"",
   customer_floor:"",
   time_range_delivery: object?.order_info?.time_range_delivery??"",
   date_delivery: object?.order_info?.date_delivery??new Date().setDate(new Date().getDate() + 1),
   customer_phone: object?.order_info?.customer_phone??"",
  //  city_id : object?.order_info?.city_id,
  //  region_id: object?.order_info?.region_id,
  //  sub_region_id:object?.order_info?.sub_region_id,
};
}


export const floorOption = [

  { value: ' الطابق الأرضي', label: ' الطابق الأرضي' },
  { value: 'الطابق الأول', label: 'الطابق الأول' },
  { value: 'الطابق الثاني', label: 'الطابق الثاني' },
  { value: 'الطابق الثالث', label: 'الطابق الثالث' },
  { value: 'الطابق الرابع', label: 'الطابق الرابع' },
  { value: 'الطابق الخامس', label: 'الطابق الخامس' },
  { value: 'الطابق السادس', label: 'الطابق السادس' },
  { value: 'الطابق السابع', label: 'الطابق السابع' },
  { value: 'الطابق الثامن', label: 'الطابق الثامن' },
  { value: 'الطابق التاسع', label: 'الطابق التاسع' },
  { value: 'الطابق العاشر', label: 'الطابق العاشر' },
  { value: 'الطابق الحادي عشر', label: 'الطابق الحادي عشر' },
  { value: 'الطابق الثاني عشر', label: 'الطابق الثاني عشر' },
  { value: 'الطابق الثالث عشر', label: 'الطابق الثالث عشر' },
  { value: 'الطابق الرابع عشر', label: 'الطابق الرابع عشر' },
  { value: 'الطابق الخامس عشر', label: 'الطابق الخامس عشر' },
  { value: 'الطابق السادس عشر', label: 'الطابق السادس عشر' },
  { value: 'الطابق السابع عشر', label: 'الطابق السابع عشر' },
  { value: 'الطابق الثامن عشر', label: 'الطابق الثامن عشر' },
  { value: 'الطابق التاسع عشر', label: 'الطابق التاسع عشر' },
  { value: ' الطابق العشرين', label: ' الطابق العشرين' },

]
export const Delivery_time = [
  {
    label:"03:00-07:00 PM",
    value: "03:00-07:00 PM",
  },
  {
    label: "11:00-03:00 PM",
    value: "11:00-03:00 PM",
  }
]