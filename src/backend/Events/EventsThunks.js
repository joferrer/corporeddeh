import { addDoc, arrayUnion, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore/lite'
import { FireBaseDB } from '../firebase/firebaseConfig'
import { deleteAImageOfAnEvent, saveListOfImagesByEvent } from '../firebase/StorageFirebaseProvider'
import { useDate } from '../../theme'
import dayjs from 'dayjs'

const db = FireBaseDB

const { toDate, toFormat } = useDate()
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
      console.log(doc.id, ' => ', doc.data().fecha)

      events.push({
        id: doc.id,
        ...doc.data(),
        fecha: toFormat(doc.data().fecha.toDate())
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
    console.log('Upload event images', files, id)
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

export const startDeleteAImgOfEvent = async (id, urls, name) => {
  try {
    console.log(urls, id, name)
    const eventRef = doc(db, 'events', id)
    await deleteAImageOfAnEvent(id, name)
    await updateDoc(eventRef, {
      imagen: urls
    })
    return {
      status: 'success',
      id,
      name
    }
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      error: error.code
    }
  }
}

export const startUpdateEvent = async (id, event) => {
  try {
    console.log(event, id)
    const newEvent = {
      titulo: event.eventName,
      descripcion: event.description,
      fecha: dayjs(event.eventDate, 'DD/MM/YYYY').toDate(),
      imagen: event.imagen
    }
    console.log(newEvent)
    const eventRef = doc(db, 'events', id)
    await updateDoc(eventRef, newEvent)
    return {
      status: 'success'
    }
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      error
    }
  }
}

export const startDeleteEventById = async (id) => {
  try {
    const eventRef = doc(db, 'events', id)
    await deleteAImageOfAnEvent(id)
    await deleteDoc(eventRef)
    return {
      status: 'success',
      id
    }
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      error
    }
  }
}