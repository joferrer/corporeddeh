/* eslint-disable react/prop-types */
import {
  Alert,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AddMultimediaComponent } from './Components/AddMultimedia'
import LayoutAdmin from './Layout/LayoutAdmin'
import { CardEventComponent } from './Components'
import Container from '../../ui/AloneComponents/Container'
import { useDate } from '../../theme'
import { startDeleteEventById, startLoadEvents, startSaveEvent } from '../../backend/Events/EventsThunks'
import swal from 'sweetalert2'
import dayjs from 'dayjs'

export const EventsAdminPage = () => {
  const [listOfEvents, setListOfEvents] = useState([])
  const [error, setError] = useState(false)
  const [addMultimedia, setAddMultimedia] = useState({ edit: false, videos: [], images: [] })
  const [date, setDate] = useState(dayjs().format('DD/MM/YYYY'))
  const { datejs } = useDate()
  const { register, handleSubmit } = useForm()
  const getData = async () => {
    const { status, events } = await startLoadEvents()
    if (status === 'error') return setError(true)
    return events
  }
  console.log(listOfEvents)
  console.log(addMultimedia)
  const onDelete = async (index) => {
    const { id } = listOfEvents.find((event) => event.id === index)
    console.log(id)
    swal.fire({
      title: '¿Estás seguro?',
      text: 'Una vez eliminado, no podrás recuperar este evento!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    })
      .then(async (willDelete) => {
        if (willDelete.isConfirmed) {
          const response = await startDeleteEventById(id)
          if (response.status === 'success') {
            swal.fire({
              title: 'Evento eliminado correctamente',
              icon: 'success'
            })
            return setListOfEvents(listOfEvents.filter((event) => event.id !== index))
          }
          swal.fire({
            title: 'No se pudo eliminar el evento, intentelo de nuevo.',
            icon: 'error'
          })
        } else {
          swal.fire({
            title: 'No se pudo eliminar el evento, intentelo de nuevo.',
            icon: 'error'
          })
        }
      })
  }

  const onCreateEvent = async (event) => {
    console.log('a', event)
    swal.fire({
      title: 'Creando evento...',
      icon: 'info',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false

    })
    const dataToSend = {
      ...event,
      eventDate: date,
      videos: addMultimedia.videos,
      images: addMultimedia.images
    }
    const response = await startSaveEvent(dataToSend)
    console.log(response)
    if (response.status === 'success') {
      swal.fire({
        title: 'Evento creado correctamente',
        icon: 'success'
      })
      const newEvent = {
        id: response.id,
        imagen: response.urls,
        titulo: dataToSend.eventName,
        descripcion: dataToSend.description,
        fecha: dataToSend.eventDate
      }
      setListOfEvents([...listOfEvents, newEvent])
      return window.location.reload() // Para ahorrar problemas con el cache se recarga la pagina luego de notificar al usuario.
    }
    swal.fire({
      title: 'No se pudo crear el evento, intentelo de nuevo.',
      icon: 'error'
    })
    setError(true)
  }

  useEffect(() => {
    Promise.all([getData()]).then((res) => {
      setListOfEvents(res[0])
    })
  }, [])

  return (
    <LayoutAdmin>
      <Container>
        {' '}
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            flexWrap: 'wrap'
          }}
        >
          <AddMultimediaComponent
            addMultimedia={addMultimedia}
            setAddMultimedia={setAddMultimedia}
          />
          <Typography
            variant='h4'
            sx={{
              flexGrow: 1,
              width: '100%',
              textAlign: 'left',
              paddingLeft: '50px',
              marginBottom: '10px'
            }}
          >
            Eventos
          </Typography>
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              padding: '1rem',
              maxHeight: 'fit-content'
            }}
          >

            <Snackbar
              open={error}
              autoHideDuration={6000}
              onClose={() => setError(false)}
            >
              <Alert
                onClose={() => setError(false)}
                severity='error'
                sx={{ width: '100%' }}
              >
                This is a success message!
              </Alert>
            </Snackbar>
            <form
              onSubmit={handleSubmit(onCreateEvent)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              <TextField
                label='Nombre del evento' variant='standard'
                {...register('eventName', { required: true })}
              />
              <DatePicker
                label='Fecha del evento'
                defaultValue={datejs()}
                onChange={(date) => {
                  setDate(date.format('DD/MM/YYYY'))
                }}
                slotProps={{
                  textField: {
                    helperText: 'DD/MM/YYYY'
                  }
                }}

              />
              <TextField
                label='Descripción'
                variant='standard'
                multiline
                rows={5}
                {...register('description')}

              />
              <Button
                variant='contained'
                onClick={() => setAddMultimedia({ ...addMultimedia, edit: true })}
              >
                Añadir multimedia
              </Button>
              <Button variant='contained' type='submit'>
                Crear evento
              </Button>
            </form>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1rem'
            }}
          >
            {listOfEvents.map((event) => {
              return (
                <CardEventComponent
                  key={event?.id}
                  event={event}
                  index={event?.id}
                  onDelete={onDelete}
                />
              )
            })}
          </Grid>
        </Grid>
      </Container>
    </LayoutAdmin>
  )
}
