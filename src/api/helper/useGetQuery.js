import { useQuery } from 'react-query'
import useAxios from './useAxios'

function useGetQuery(key , url , params=null) {
    const axios = useAxios()
  return (
    useQuery(
         params? [params,key] : key ,
         async ()=>{
            const data = await axios.get(url ,{params})
            return data
         },
         {
            onSuccess:({message})=>{
           
            },
            refetchOnWindowFocus:false
             
        }
    )
  )
}

export default useGetQuery