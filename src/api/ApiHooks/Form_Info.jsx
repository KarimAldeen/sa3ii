import useAddMutation from "../helper/useAddMutation"
import useDeleteMutation from "../helper/useDeleteMutation"
import useGetQuery from "../helper/useGetQuery"
import useUpdateMutation from "../helper/useUpdateMutation"


const KEY= 'Form_Info'
const API= {
    GET:"/parcel_order/form_info/",
    ADD:"/parcel_order/form_info/",
    PUT:"/parcel_order/update_by_form/"
}

export const useGetForm_Info = (params)=>useGetQuery(KEY, API.GET+params)
export const useAddForm_Info = ()=>useAddMutation(API.ADD)
export const useDeleteForm_Info = ()=>useDeleteMutation(API.ADD)
export const useUpdateForm_Info = (params)=>useUpdateMutation(KEY, API.PUT+params)
