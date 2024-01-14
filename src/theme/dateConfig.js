import dayjs from 'dayjs'
// eslint-disable-next-line no-unused-vars
import { es } from 'dayjs/locale/es' // Esto es para que el dayjs se configure en español para toda la app.

export const useDate = () => {
  const datejs = () => {
    return dayjs().locale('es')
  }
  const month = () => {
    return datejs().format('MMMM')
  }

  const toDate = (date) => {
    return datejs(date, 'DD/MM/YYYY').toDate()
  }

  const toFormat = (date) => {
    return dayjs(date).format('DD/MM/YYYY')
  }
  const dayjsDate = (date) => {
    return dayjs(date)
  }
  return { datejs, month, toDate, toFormat, dayjsDate }
}
