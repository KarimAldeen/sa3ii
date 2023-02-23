
import useGetQuery from "../helper/useGetQuery"


const KEY= 'REGION'
const API= {
    GET:`region/`

}

export const useGetRegion = (params)=>useGetQuery(KEY, API.GET+params.cityId,params)
