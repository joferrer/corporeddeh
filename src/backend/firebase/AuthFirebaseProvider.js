import { GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { FireBaseAuth } from './firebaseConfig'

const googleProvider = new GoogleAuthProvider()
const auth = getAuth()

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

export const singInWithEmailPassword = async (mail, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, mail, password)
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

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
    return {
      ok: true
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
