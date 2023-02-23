import axios from 'axios'
function useAxios() {
  return (
    axios.create({
        baseURL:"https://parcel.kammun.com/api",
        headers: {"Authorization" : `Bearer super_admin_token`}
    })
  )
}

export default useAxios