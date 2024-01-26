import { addDoc, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, limit, query, updateDoc } from 'firebase/firestore/lite'
import { FireBaseDB } from '../firebase/firebaseConfig'
import { deleteAImageOfAnEvent, saveListOfImagesByEvent } from '../firebase/StorageFirebaseProvider'
import dayjs from 'dayjs'
import { array } from 'prop-types'

const db = FireBaseDB

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
    urls: [] // Supongo que se mesclan aca los videos y las imagenes. Es una lista de urls.
 * }
 */

export const startLoadEvents = async () => {
  try {
    const events = []
    const eventsRef = collection(db, 'events')
    const querySnapshot = await getDocs(eventsRef)
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data())
      console.log(dayjs(doc.data().fecha.toDate()))
      events.push({
        id: doc.id,
        ...doc.data(),
        imagen: doc.data().urls || [],
        fecha: dayjs(doc.data().fecha.toDate()).format('DD/MM/YYYY')
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
  console.log(event)
  const newEvent = {
    titulo: event.eventName,
    descripcion: event.description,
    fecha: dayjs(event.eventDate, 'DD/MM/YYYY').toDate(),
    urls: event.videos
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
    console.log('Upload event images complete', urls)
    const eventRef = doc(db, 'events', id)
    await updateDoc(eventRef, {
      urls: arrayUnion(...urls)
    })
    console.log('Upload event images complete')
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
    const resp = await deleteAImageOfAnEvent(id, name)
    if (resp.status === 'error') {
      return {
        status: 'error',
        error: resp.error
      }
    }
    await updateDoc(eventRef, {
      urls
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
      urls: event.imagen
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

export const startGetEventById = async (id) => {
  try {
    const eventRef = doc(db, 'events', id)
    const docSnap = await getDoc(eventRef)
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data())
      return {
        status: 'success',
        event: {
          id: docSnap.id,
          ...docSnap.data(),
          imagen: docSnap.data().urls || [],
          fecha: dayjs(docSnap.data().fecha.toDate()).format('DD/MM/YYYY')
        }
      }
    } else {
      console.log('No such document!')
      return {
        status: 'error',
        error: 'No such document!'
      }
    }
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      error
    }
  }
}

export const startSaveVideosOfEvent = async (id, videos) => {
  try {
    const eventRef = doc(db, 'events', id)
    await updateDoc(eventRef, {
      imagen: videos
    })
    return {
      status: 'success',
      id,
      videos
    }
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      error
    }
  }
}

export const startLoadCountEvents = async () => {
  try {
    const events = []
    const eventsRef = collection(db, 'events')
    const querySnapshot = await getDocs(query(eventsRef, limit(5)))
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data())
      console.log(dayjs(doc.data().fecha.toDate()))
      events.push({
        id: doc.id,
        ...doc.data(),
        imagen: doc.data().urls || [],
        fecha: dayjs(doc.data().fecha.toDate()).format('DD/MM/YYYY')
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
