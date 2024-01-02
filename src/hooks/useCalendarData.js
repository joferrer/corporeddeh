import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingCalendarEvents } from '../backend/Calendar/CalendarThunks'
import { sortEventsByDate } from '../helpers'

export const useCalendarData = () => {
  const [data, setData] = useState({
    events: [],
    status: 'loaded', // loading, loaded, error
    error: false,
    errorMessage: null
  })
  const { events, status, errorMessage } = data
  const selector = useSelector(state => state.calendar)
  const dispatch = useDispatch()
  console.log(selector)
  console.log(events)
  useEffect(() => {
    const getData = async () => {
      const r = await dispatch(startLoadingCalendarEvents())
      return setData({
        ...selector,
        events: r
      })
    }

    getData()
  }, [])

  return {
    events, status, errorMessage, setData
  }
}
