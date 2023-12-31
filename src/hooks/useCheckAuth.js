import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FireBaseAuth } from '../backend/firebase/firebaseConfig'
import { login, logout } from '../backend/auth'

export const useCheckAuth = () => {
  const { status, uid, displayName, email, photoURL, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(FireBaseAuth, async (user) => {
      if (!user) return dispatch(logout())
      const { uid, displayName, email, photoURL } = user

      dispatch(login({ uid, displayName, email, photoURL }))
    })
  }, [])

  return { status, uid, displayName, email, photoURL, errorMessage }
}
