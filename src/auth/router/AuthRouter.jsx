/* eslint-disable react/prop-types */
import { LoginPage } from '../pages/LoginPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ResetPassword } from '../pages/ResetPassword'
import { CorpoeddehRoute } from '../../corporeddeh/routes/CorporeddehRoute'
import { AppRouterUser } from '../../administratorapp/router/AppRouterUser'

const NO_AUTHENTICATED = 'no-authenticated'

const LOGIN_ROUTE = '/login'
const RESET_PASSWORD = '/reset'

const AuthenticatedRoutes = () => (
  <Routes>
    <Route path={LOGIN_ROUTE} element={<LoginPage />} />
    <Route path={RESET_PASSWORD} element={<ResetPassword />} />
    <Route path={`${LOGIN_ROUTE}/*`} element={<Navigate to='/login' />} />
    <Route path={`${RESET_PASSWORD}/*`} element={<Navigate to='/' />} />
    <Route path='/*' element={<CorpoeddehRoute />} />
  </Routes>
)

export const AuthRouter = ({ status = NO_AUTHENTICATED }) => {
  console.log(status)
  return (
    <Routes>
      {
        status === NO_AUTHENTICATED
          ? (<Route path='/*' element={<AuthenticatedRoutes />} />)
          : <Route path='/*' element={<AppRouterUser />} />
      }
      <Route path='/*' element={<CorpoeddehRoute />} />

    </Routes>
  )
}
