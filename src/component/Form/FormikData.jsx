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
  customer_name:object?.order_info?.customer_name,
  receiver_notes:object?.order_info?.user_feedback,
   customer_cites: object?.cites[0].label_ar,
   delivery_region: object?.order_info?.delivery_region,
   customer_address: "",

  customer_Build:"",
   customer_Build_entrance: "",
   customer_close_mark: "",
   region_term:"",
   customer_floor:"",
   time_range_delivery: object?.order_info?.time_range_delivery,
   date_delivery: object?.order_info?.date_delivery,
   customer_phone: object?.order_info?.customer_phone,
  //  city_id : object?.order_info?.city_id,
  //  region_id: object?.order_info?.region_id,
  //  sub_region_id:object?.order_info?.sub_region_id,
};
}


export const floorOption = [

  { value: 'الأرضي', label: 'الأرضي' },
  { value: 'الأول', label: 'الأول' },
  { value: 'الثالث', label: 'الثالث' },
  { value: 'الرابع', label: 'الرابع' },
  { value: 'الخامس', label: 'الخامس' },
  { value: 'السادس', label: 'السادس' },
  { value: 'السابع', label: 'السابع' },
  { value: 'الثامن', label: 'الثامن' },
  { value: 'التاسع', label: 'التاسع' },
  { value: 'العاشر', label: 'العاشر' },
  { value: 'الحادي عشر', label: 'الحادي عشر' },
  { value: 'الثاني عشر', label: 'الثاني عشر' },
  { value: 'الثالث عشر', label: 'الثالث عشر' },
  { value: 'الرابع عشر', label: 'الرابع عشر' },
  { value: 'الخامس عشر', label: 'الخامس عشر' },
  { value: 'السادس عشر', label: 'السادس عشر' },
  { value: 'السابع عشر', label: 'السابع عشر' },
  { value: 'الثامن عشر', label: 'الثامن عشر' },
  { value: 'التاسع عشر', label: 'التاسع عشر' },
  { value: ' العشرين', label: ' العشرين' },

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