import { useMutation } from 'react-query'
import useAxios from './useAxios'

function useAddMutation(url) {
    const axios = useAxios()
  return (
    useMutation(
        async (dataToSend)=>{
            const data = await axios.post(url , dataToSend)
            return data
        },
        {
            onSuccess:({message})=>{
           
            },
            onError:({response})=>{
            }
        }
    )
  )
}

export default useAddMutation



