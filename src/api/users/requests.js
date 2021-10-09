// resource requests

import axios from '../axios'
import qs from 'qs'

export const fetchUsers = () => axios.get('/users')

export const fetchUser = ({ queryKey }) => axios.get(`/users/${queryKey[1]}`)

export const fetchFilteredUsers = ({ queryKey }) => {
  const queryParams = queryKey[1]
  return axios.get(`/users?${qs.stringify(queryParams)}`)
}
