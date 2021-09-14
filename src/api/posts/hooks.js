// resource hooks

import { useQuery } from 'react-query'
import { fetchUserPosts } from './requests'
import { handleSelectors } from '../shared'
import { getUserPosts } from './selectors'

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
