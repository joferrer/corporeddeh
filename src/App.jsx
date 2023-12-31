import './App.css'
import { AppRouter } from './router/AppRouter'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/es'

/* eslint-disable space-before-function-paren */
function App() {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale='es'
    >
      <AppRouter />
    </LocalizationProvider>

  )
}

export default App
