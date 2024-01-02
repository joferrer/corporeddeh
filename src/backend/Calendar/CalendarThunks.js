import { addDoc, collection, getDocs } from 'firebase/firestore/lite'
import { setError, setEvents, setLoading } from './CalendarSlice'
import { FireBaseDB } from '../firebase/firebaseConfig'
import { sortEventsByDate } from '../../helpers'

const db = FireBaseDB

export const startLoadingCalendarEvents = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading())
      const calendarEvents = await getDocs(collection(db, 'calendario'))
      const calendarEventsList = calendarEvents.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      })
      console.log('thunks', calendarEventsList)
      const calendarEventsListSorted = sortEventsByDate(calendarEventsList)
      dispatch(setEvents(calendarEventsListSorted))
      return calendarEventsListSorted
    } catch (error) {
      console.log(error)
      dispatch(setError(`Ha ocurrido un error: ${error}`))
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
 * @returns
 */
export const startSaveCalendarEvent = (calendarEvent) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading())
      const saveCalendarEvents = await addDoc(collection(db, 'calendar'), calendarEvent)
      console.log(saveCalendarEvents)
      dispatch(setEvents(calendarEvent))
    } catch (error) {
      console.log(error)
      dispatch(setError(error))
    }
  }
}
