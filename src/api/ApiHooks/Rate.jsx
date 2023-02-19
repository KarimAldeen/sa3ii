import useAddMutation from "../helper/useAddMutation"
import useDeleteMutation from "../helper/useDeleteMutation"
import useGetQuery from "../helper/useGetQuery"
import useUpdateMutation from "../helper/useUpdateMutation"


const KEY= 'Rate'
const API= {
    GET:"/form_info/",
    ADD:"/form_info/",
    PUT:"parcel_order/rate_order_by_form/"
}

export const useGetRate = (params)=>useGetQuery(KEY, API.GET+params)
export const useAddRate = ()=>useAddMutation(API.ADD)
export const useDeleteRate = ()=>useDeleteMutation(API.ADD)
export const useUpdateRate = (params)=>useUpdateMutation(API.PUT+params)
