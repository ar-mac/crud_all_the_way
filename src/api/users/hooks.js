// resource hooks

import { useQuery } from 'react-query'
import { fetchFilteredUsers, fetchUser, fetchUsers } from './requests'
import { handleSelectors } from '../shared'
import { getUser, getUsers } from './selectors'

export const useGetUsers = ({
  selectors = { users: getUsers },
  ...options
} = {}) => {
  return useQuery('users', fetchUsers, {
    select: handleSelectors(selectors),
    ...options,
  })
}

export const useGetFilteredUsers = ({
  params,
  selectors = { users: getUsers },
  ...options
} = {}) => {
  return useQuery(['users', params], fetchFilteredUsers, {
    select: handleSelectors(selectors),
    ...options,
  })
}

export const useGetUserById = ({
  userId,
  selectors = { user: getUser },
  ...options
} = {}) => {
  return useQuery(['users', userId], fetchUser, {
    select: handleSelectors(selectors),
    ...options,
  })
}
