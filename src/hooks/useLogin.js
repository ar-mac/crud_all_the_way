import { useCallback, useState } from 'react'

export const useLogin = () => {
  const [userId, setUserId] = useState(() =>
    localStorage.getItem('loggedUserId')
  )

  const login = useCallback((loggedUserId) => {
    setUserId(loggedUserId)
    localStorage.setItem('loggedUserId', loggedUserId)
  }, [])

  const logout = useCallback(() => {
    setUserId(undefined)
    localStorage.removeItem('loggedUserId')
  }, [])

  return { userId, logout, login }
}
