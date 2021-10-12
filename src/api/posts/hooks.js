// resource hooks

import { useMutation, useQuery } from 'react-query'
import { editPost, fetchPost, fetchUserPosts } from './requests'
import { handleSelectors } from '../shared'
import { getUserPosts, getPost } from './selectors'

export const useGetUserPosts = ({
  userId,
  selectors = { posts: getUserPosts },
  ...options
} = {}) => {
  return useQuery(['userPosts', { userId }], fetchUserPosts, {
    select: handleSelectors(selectors),
    ...options,
  })
}

export const getPostByIdQueryKey = (postId) => ['posts', { postId }]

export const useGetPostById = ({
  postId,
  selectors = { post: getPost },
  ...options
} = {}) => {
  return useQuery(getPostByIdQueryKey(postId), fetchPost, {
    select: handleSelectors(selectors),
    ...options,
  })
}

export const useEditPost = (options = {}) => {
  return useMutation(editPost, {
    mutationKey: 'editPost',
    ...options,
  })
}
