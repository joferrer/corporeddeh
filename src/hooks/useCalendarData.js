import { useEffect, useState } from 'react'
import { startLoadingCalendarEvents, startSaveCalendarEvent, startSetAImgsToCalendarEvent } from '../backend/Calendar/CalendarThunks'
import { saveImageByMonth } from '../backend/firebase/StorageFirebaseProvider'
import { mouthAlreadyExist, sortEventsByDate } from '../helpers'

export const useCalendarData = () => {
  const [data, setData] = useState({
    events: [],
    status: 'loaded', // loading, loaded, error
    error: false,
    errorMessage: null
  })
  const { events, status, errorMessage } = data

  const saveEventCalendarImg = async (index, file) => {
    const { mouth, year, id } = events[index]

    const { url, error } = await saveImageByMonth(file, mouth, year)
    if (error) {
      return {
        error: true,
        errorMessage: error
      }
    }
    const { status } = await startSetAImgsToCalendarEvent(id, url)
    console.log(status, url)
    const newEventImages = events[index].imgs
    newEventImages.push(url)
    const newEvent = {
      ...events[index],
      imgs: newEventImages
    }
    const newListOfEvents = events
    newListOfEvents.splice(index, 1, newEvent)
    setData({
      ...data,
      events: newListOfEvents
    })
    return {
      id,
      status
    }
  }

  const addNewMouth = async (newMouth) => {
    const newAddEvent = {
      mouth: newMouth.mouth,
      year: newMouth.year,
      imgs: []
    }
    if (mouthAlreadyExist(newMouth.mouth, newMouth.year, events)) {
      return setData({ events, error: true, errorMessage: 'El mes ya existe' })
    }
    const { status, error } = await startSaveCalendarEvent(newAddEvent)
    if (status === 'error') {
      return setData({ events, error: true, errorMessage: error, status })
    }
    const newListOfEvents = events
    newListOfEvents.push(newAddEvent)

    const newListOfEventsSorted = sortEventsByDate(newListOfEvents)
    setData({ events: newListOfEventsSorted, error: false })
  }

  useEffect(() => {
    const getData = async () => {
      const { status, events: eventsList, error } = await startLoadingCalendarEvents()
      if (status === 'error') {
        return setData({
          error: true,
          errorMessage: error,
          events: [],
          status: 'error'
        })
      }
      return setData({
        error: false,
        status,
        errorMessage: null,
        events: eventsList
      })
    }

    getData()
  }, [])

  return {
    events, status, errorMessage, setData, saveEventCalendarImg, addNewMouth
  }
}
