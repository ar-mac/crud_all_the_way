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

  const isLoggedUser = useCallback((userId) => {
    console.log({ userId, storage: localStorage.getItem('loggedUserId') })

    return parseInt(userId) === parseInt(localStorage.getItem('loggedUserId'))
  }, [])

  return { userId, logout, login, isLoggedUser }
}
