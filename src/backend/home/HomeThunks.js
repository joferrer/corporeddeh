import { doc, getDoc, updateDoc } from 'firebase/firestore/lite'
import { FireBaseDB } from '../firebase/firebaseConfig'

const db = FireBaseDB
const idHome = 'xGQdWbpWuAKfp39ALrC2'

/*
const example = {
  counter: 0,
  linksVideos: [],
  socialNetworks: {
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: '',
    mail: ''
  }
}
*/
export const startSetCounterValue = async (counterValue) => {
  try {
    const docRef = doc(db, 'home', idHome)
    await updateDoc(docRef, { counter: counterValue })
    console.log('Document successfully updated!')
    return {
      status: 'success'
    }
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      error: error.code
    }
  }
}

export const startSetSocialNetworks = async (socialNetworks) => {
  try {
    const docRef = doc(db, 'home', idHome)
    await updateDoc(docRef, { socialNetworks })
    console.log('Document successfully updated!')
    return {
      status: 'success'
    }
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      error: error.code
    }
  }
}

export const startSetLinksVideos = async (linksVideos) => {
  try {
    const docRef = doc(db, 'home', idHome)
    await updateDoc(docRef, { linksVideos })
    console.log('Document successfully updated!')
    return {
      status: 'success'
    }
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      error: error.code
    }
  }
}

export const startLoadHomeDocumment = async () => {
  try {
    const homeDoc = await getDoc(doc(db, 'home', idHome))
    console.log(homeDoc.data())
    return {
      status: 'success',
      data: homeDoc.data()
    }
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      error: error.code
    }
  }
}
