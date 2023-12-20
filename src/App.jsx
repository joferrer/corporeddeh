import dayjs from 'dayjs';
import './App.css'
import { AppRouter } from './router/AppRouter'


function App() {

  dayjs().locale("es")
  return (
    <AppRouter />

  )
}

export default App
