import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { FireBaseAuth } from './firebaseConfig'

const googleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FireBaseAuth, googleProvider)
    const { displayName, email, photoURL, uid } = result.user

    return {
      ok: true,
      // userInfo
      displayName,
      email,
      photoURL,
      uid
    }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message

    return {
      ok: false,
      errorCode,
      errorMessage
    }
  }
}

export const logoutFireBase = async () => {
  return await FireBaseAuth.signOut()
}
