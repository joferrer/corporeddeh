import { configureStore } from '@reduxjs/toolkit'
import { AuthSlice } from './auth'
import { CalendarSlice } from './Calendar/CalendarSlice'
import { DocumentSlice } from  './Document/DocumentSlice'

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    calendar: CalendarSlice.reducer,
    document: DocumentSlice.reducer
  }

})
