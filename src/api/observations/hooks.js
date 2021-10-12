// resource hooks

import { useQuery } from 'react-query'
import { fetchPostObservations } from './requests'
import { handleSelectors } from '../shared'
import { getObservations } from './selectors'

export const useGetObservationsForPost = ({
  postId,
  selectors = { posts: getObservations },
  ...options
} = {}) => {
  return useQuery(['observations', { postId }], fetchPostObservations, {
    select: handleSelectors(selectors),
    ...options,
  })
}
