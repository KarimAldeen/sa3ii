import { useMutation } from 'react-query'
import useAxios from './useAxios'

function useUpdateMutation(url,params) {

    const axios = useAxios()
  return (
    useMutation(
        async (dataToSend)=>{
            const data = await axios.put(url , dataToSend , params)
            return data
        },
        {
            onSuccess:({message})=>{
            }
        }
    )
  )
}

export default useUpdateMutation



