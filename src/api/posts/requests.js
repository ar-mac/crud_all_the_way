// resource requests
import axios from '../axios'

export const fetchUserPosts = ({ queryKey: [, param] }) =>
  axios.get(`/users/${param.userId}/posts`)

export const fetchPost = ({ queryKey: [, param] }) =>
  axios.get(`/posts/${param.postId}`)

export const editPost = (data) => axios.put(`/posts/${data.id}`, data)
