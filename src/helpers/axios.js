import Axios from 'axios';
import useSWR from 'swr';

const axiosInstance = Axios.create({
  validateStatus: () => true
})

axiosInstance.interceptors.response.use(res => res, function (error) {
  return error
})

export default axiosInstance;

const axiosFetcher = url => axiosInstance.get(url).then(res => res.data)

export function useRequest(url) {
  const { data } = useSWR(url, axiosFetcher)
  return data
}
