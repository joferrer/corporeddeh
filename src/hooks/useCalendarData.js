import { useEffect, useState } from 'react'
import { startLoadingCalendarEvents, startSetAImgsToCalendarEvent } from '../backend/Calendar/CalendarThunks'
import { saveImageByMonth } from '../backend/firebase/StorageFirebaseProvider'

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
    events, status, errorMessage, setData, saveEventCalendarImg
  }
}
