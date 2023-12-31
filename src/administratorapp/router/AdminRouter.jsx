import { Navigate, Route, Routes } from 'react-router-dom'
import {
  AdminHomePage,
  CalendarAdminPage,
  EventsAdminPage,
  DocumentAdminPage,
  AboutUsAdmin
} from '../pages/'
import { routes } from '../../corporeddeh/routes/routes'
import { CorpoeddehRoute } from '../../corporeddeh/routes/CorporeddehRoute'
import { } from '../pages/CalendarAdminPage'

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path={routes.HOME_ADMIN} element={<AdminHomePage />} />
      <Route path={routes.CALENDAR_ADMIN} element={<CalendarAdminPage />} />
      <Route path={routes.EVENT_ADMIN} element={<EventsAdminPage />} />
      <Route path={routes.DOCUMENTS_ADMIN} element={<DocumentAdminPage />} />
      <Route path={routes.ABOUTUS_ADMIN} element={<AboutUsAdmin />} />
      <Route path='/*' element={<Navigate to={routes.HOME_ADMIN} />} />
      <Route path='/*' element={<CorpoeddehRoute />} />

    </Routes>
  )
}
