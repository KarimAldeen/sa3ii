import axios from 'axios'
function useAxios() {
  return (
    axios.create({
        baseURL:"https://parcel.kammun.com/api"
    })
  )
}

export default useAxios