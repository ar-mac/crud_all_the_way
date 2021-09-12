import { useCallback, useState } from 'react'

export const useLogin = () => {
  const [userId, setUserId] = useState(() =>
    parseInt(localStorage.getItem('loggedUserId'))
  )

  const login = useCallback((loggedUserId) => {
    setUserId(loggedUserId)
    localStorage.setItem('loggedUserId', loggedUserId)
  }, [])

  const logout = useCallback(() => {
    setUserId(undefined)
    localStorage.removeItem('loggedUserId')
  }, [])

  const isLoggedUser = useCallback((id) => parseInt(id) === userId, [userId])

  return { userId, logout, login, isLoggedUser }
}
