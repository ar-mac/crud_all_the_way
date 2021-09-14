// resource requests

import axios from '../axios'

export const fetchUsers = () => axios.get('/users')

export const fetchFilteredUsers = ({ queryKey }) =>
  axios.get(
    `/users?isFeatured=${queryKey[1].isFeatured}&_limit=${queryKey[1].limit}`
  )
