import { useCallback, useState } from 'react'

export const useLogin = () => {
  const [userId, setUserId] = useState(() =>
    parseInt(localStorage.getItem('loggedUserId'))
  )

  const login = useCallback(({ userId, userName }) => {
    setUserId(userId)
    localStorage.setItem('loggedUserId', userId)
    localStorage.setItem('loggedUserName', userName)
  }, [])

  const logout = useCallback(() => {
    setUserId(undefined)
    localStorage.removeItem('loggedUserId')
    localStorage.removeItem('loggedUserName')
  }, [])

  const getLoggedUserName = useCallback(
    () => localStorage.getItem('loggedUserName'),
    []
  )

  const isLoggedUser = useCallback((id) => parseInt(id) === userId, [userId])

  return { userId, logout, login, isLoggedUser, getLoggedUserName }
}
