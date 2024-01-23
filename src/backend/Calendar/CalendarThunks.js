import { addDoc, arrayUnion, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore/lite'
import { FireBaseDB } from '../firebase/firebaseConfig'
import { sortEventsByDate } from '../../helpers'
import { deleteAllImagesForMonth } from '../firebase/StorageFirebaseProvider'

const db = FireBaseDB

/**
 * Return all calendar events from the database.
 * @returns {
 * status: string, // loading, loaded, error
 * events?: []
 * error?: string
 * }
 */
export const startLoadingCalendarEvents = async () => {
  try {
    const calendarEvents = await getDocs(collection(db, 'calendario'))
    const calendarEventsList = calendarEvents.docs.map(doc => {
      return { id: doc.id, ...doc.data() }
    })
    console.log('thunks', calendarEventsList)
    const calendarEventsListSorted = sortEventsByDate(calendarEventsList)
    return {
      status: 'loaded',
      events: calendarEventsListSorted
    }
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      error
    }
  }
}

/**
 * Save the calendar event in the database
 * @param {{
 * mouth: string,
 * year: string,
 * imgs:[string]
 * }} calendarEvent
 * @returns {
 * status: string,
 * id?: string ,
 * error?: string} //suscess, error
 */
export const startSaveCalendarEvent = async (calendarEvent) => {
  try {
    const saveCalendarEvents = await addDoc(collection(db, 'calendario'), calendarEvent)
    console.log(saveCalendarEvents)
    return {
      status: 'success',
      id: saveCalendarEvents.id
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
 * Add a url of an image to a calendar event in the database.
 * @param {*} id id of the calendar event
 * @param {*} img url of the image
 * @returns {
 * status: string,
 * error?: string
 * }
 */
export const startSetAImgsToCalendarEvent = async (id, img) => {
  try {
    console.log(id, img)
    const calendarEventRef = doc(db, 'calendario', id)
    await updateDoc(calendarEventRef, {
      imgs: arrayUnion(...[img])
    })
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

export const startDeleteCalendarEvent = async ({ id, mouth, year }) => {
  try {
    await Promise.all([
      deleteDoc(doc(db, 'calendario', id)),
      deleteAllImagesForMonth(mouth, year)])

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

export const startDeleteAImg = async (id, img) => {
  try {
    const calendarEventRef = doc(db, 'calendario', id)
    await updateDoc(calendarEventRef, {
      imgs: img
    })
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
