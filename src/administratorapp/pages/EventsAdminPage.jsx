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
import { startLoadEvents, startSaveEvent } from '../../backend/events/EventsThunks'
import swal from 'sweetalert'

export const EventsAdminPage = () => {
  const [listOfEvents, setListOfEvents] = useState([])
  const [error, setError] = useState(false)
  const [addMultimedia, setAddMultimedia] = useState({ edit: false, videos: [], images: [] })
  const { datejs } = useDate()
  const { register, handleSubmit } = useForm()
  const getData = async () => {
    const { status, events } = await startLoadEvents()
    if (status === 'error') return setError(true)
    return events
  }

  const onDelete = (index) => {
    setListOfEvents(listOfEvents.filter((event) => event.id !== index))
  }

  const onCreateEvent = async (event) => {
    console.log('a', event)
    const dataToSend = {
      ...event,
      videos: addMultimedia.videos,
      images: addMultimedia.images
    }
    const response = await startSaveEvent(dataToSend)
    console.log(response)
    if (response.status === 'success') {
      swal('Evento creado correctamente', '', 'success')
      return setListOfEvents([...listOfEvents, event])
    }
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
              padding: '1rem'
            }}
          >
            {/** //TODO: Add a correct success message */}
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
                minDate={datejs()}
                name='eventDate'
                {...register('eventDate', { required: true })}
                label='Fecha del evento'
                defaultValue={datejs()}
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
