import { createSlice } from '@reduxjs/toolkit'

export const CalendarSlice = createSlice({
  name: 'Calendar',
  initialState: {
    events: [],
    status: 'loaded', // loading, loaded, error
    errorMessage: null
  },
  reducers: {
    setEvents: (state, { payload }) => {
      state.events = payload
      state.status = 'loaded'
      state.errorMessage = null
    },
    setError: (state, { payload }) => {
      state.status = 'error'
      state.errorMessage = payload
    },
    setLoading: (state) => {
      state.status = 'loading'
    }
  }
})

export const { setEvents, setError, setLoading } = CalendarSlice.actions
