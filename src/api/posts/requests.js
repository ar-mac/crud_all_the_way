// resource requests
import axios from '../axios'

export const fetchUserPosts = ({ queryKey: [_, param] }) =>
  axios.get(`/users/${param.userId}/posts`)
