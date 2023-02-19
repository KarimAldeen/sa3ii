import { useMutation, useQueryClient } from 'react-query'
import useAxios from './useAxios'

function useDeleteMutation(url) {
    const axios = useAxios()
    const queryqlent = useQueryClient()
  return (
    useMutation(
        async (dataToSend)=>{
            const data = await axios.delete(url +`/${dataToSend}` )
            return data
        },
        {
            onSuccess:({message})=>{
                queryqlent.invalidateQueries('Cart')
            }
        }
    )
  )
}

export default useDeleteMutation



