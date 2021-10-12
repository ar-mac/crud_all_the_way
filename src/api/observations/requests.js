// resource requests
import axios from '../axios'

export const fetchPostObservations = ({ queryKey: [, param] }) =>
  axios.get(`/posts/${param.postId}/observations`).then(({ data }) => data)
