// resource requests
import axios from '../axios'
import axiosBase from 'axios'

export const fetchUserPosts = ({ queryKey: [, param] }) =>
  axios.get(`/users/${param.userId}/posts`)

export const fetchPost = ({ queryKey: [, param] }) => {
  const CancelToken = axiosBase.CancelToken
  const source = CancelToken.source()

  const promise = axios
    .get(`/posts/${param.postId}`, { cancelToken: source.token })
    .then(({ data }) => data)

  promise.cancel = () => {
    source.cancel('Query was cancelled by React Query')
  }

  return promise
}

export const editPost = (data) => axios.put(`/posts/${data.id}`, data)
