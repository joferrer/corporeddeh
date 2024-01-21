import { logoutFireBase, resetPassword, singInWithEmailPassword, singInWithGoogle } from '../firebase/AuthFirebaseProvider'
import { checkingCredentials, login, logout } from './AuthSlice'

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const result = await singInWithGoogle()

    if (!result.ok) return dispatch(logout(result.errorMessage))
    const usuariosPermitidos = import.meta.env.VITE_REACT_APP_listaUsuarionPermitidos
    if (!usuariosPermitidos.includes(result.email)) {
      const errorMessage = 'Ese correo no está autorizado'
      await dispatch(startLogout())
      return dispatch(logout({ errorMessage }))
    }
    const datos = {
      ...result
    }
    return dispatch(login(datos))
  }
}

export const startLoginWithEmailPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const result = await singInWithEmailPassword(email, password)
    if (!result.ok) return dispatch(logout(result.errorMessage))
    const usuariosPermitidos = import.meta.env.VITE_REACT_APP_listaUsuarionPermitidos
    if (!usuariosPermitidos.includes(result.email)) {
      const errorMessage = 'Ese correo no está autorizado'
      await dispatch(startLogout())
      return dispatch(logout({ errorMessage }))
    }
    const datos = {
      ...result
    }
    return dispatch(login(datos))
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFireBase()
    dispatch(logout())
  }
}

export const startResetPassword = async (email) => {
  try {
    const { ok } = await resetPassword(email)
    if (!ok) {
      return {
        status: 'error',
        message: 'No se pudo enviar el correo'
      }
    }
    return {
      status: 'success',
      message: 'Correo enviado correctamente'
    }
  } catch (error) {
    return {
      status: 'error',
      message: 'No se pudo enviar el correo'
    }
  }
}
