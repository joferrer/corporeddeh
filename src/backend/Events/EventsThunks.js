import { addDoc, arrayUnion, collection, doc, getDocs, updateDoc } from 'firebase/firestore/lite'
import { FireBaseDB } from '../firebase/firebaseConfig'
import { saveListOfImagesByEvent } from '../firebase/StorageFirebaseProvider'
import { useDate } from '../../theme'

const db = FireBaseDB

const { datejs, toDate } = useDate()
/**
 * eventExample ={
 * eventName: '',
 * eventDate: '',
 * description: '',
 * images: []
 * videos: []
 * }
 *
 * dbEventsExample = {
 *   id: "1",
    titulo: "Titulo",
    descripcion: "Una descripcion Larga...........",
    fecha: "20/20/2023",
    imagen: [] // Supongo que se mesclan aca los videos y las imagenes. Es una lista de urls.
 * }
 */

export const startLoadEvents = async () => {
  try {
    const events = []
    const eventsRef = collection(db, 'events')
    const querySnapshot = await getDocs(eventsRef)
    querySnapshot.forEach((doc) => {
      console.log(datejs(doc.data().fecha).format('DD/MM/YYYY'))
      events.push({
        id: doc.id,
        ...doc.data(),
        fecha: datejs(doc.data().fecha).format('DD/MM/YYYY')
      })
    })
    return {
      status: 'success',
      events
    }
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      error: error.code
    }
  }
}

/**
 * Save an event in the events collection and save the images in the images folder.
 * @param {*} event
 * @returns
 */
export const startSaveEvent = async (event) => {
  const newEvent = {
    titulo: event.eventName,
    descripcion: event.description,
    fecha: toDate(event.eventDate),
    imagen: event.videos
  }
  return Promise.all([
    startSaveEventDoc(newEvent)
  ]).then(async (values) => {
    if (values[0].status === 'error') {
      return {
        status: 'error',
        error: values[0].error
      }
    }
    const { id } = values[0]
    const { status, urls, error } = await startSaveImgOfEvent(event.images, id)
    if (status === 'error') {
      return {
        status: 'error',
        error
      }
    }
    return {
      status: 'success',
      id,
      urls
    }
  }).catch((error) => {
    console.log(error)
    return {
      status: 'error',
      error
    }
  })
}

export const startSaveEventDoc = async (event) => {
  try {
    const docRef = await addDoc(collection(db, 'events'), event)
    console.log('Document written with ID: ', docRef.id)
    return {
      status: 'success',
      id: docRef.id
    }
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      error: error.code
    }
  }
}

export const startSaveImgOfEvent = async (files, id) => {
  try {
    const { status, urls, error } = await saveListOfImagesByEvent(files, id)
    if (status === 'error') {
      return {
        status: 'error',
        error
      }
    }
    console.log('Upload event images complete')
    const eventRef = doc(db, 'events', id)
    await updateDoc(eventRef, {
      imagen: arrayUnion(...urls)
    })
    return {
      status: 'success',
      id,
      urls
    }
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      error: error.code
    }
  }
}
