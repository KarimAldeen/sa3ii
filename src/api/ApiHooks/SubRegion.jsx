
import useGetQuery from "../helper/useGetQuery"


const KEY= 'Sub_Region'
const API= {
    GET:"sub_region/get_by_city?city=",

}

export const useGetSub_Region = (params)=>useGetQuery(KEY, API.GET+params.Sub_Region_id,params)
