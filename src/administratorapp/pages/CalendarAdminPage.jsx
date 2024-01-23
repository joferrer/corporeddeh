/* eslint-disable react/prop-types */
import { Alert, Button, Grid, Snackbar, Typography } from '@mui/material'
import { useState } from 'react'
import { ImagesAdminComponent } from './Components/ImagesAdminComponent'
import LayoutAdmin from './Layout/LayoutAdmin'
import { CreateNewEventComponent } from './Components'
import swal from 'sweetalert'
import { useCalendarData } from '../../hooks/useCalendarData'
import Container from '../../ui/AloneComponents/Container'
import { startDeleteAImg, startDeleteCalendarEvent } from '../../backend/Calendar/CalendarThunks'

export const CalendarAdminPage = () => {
  const data = useCalendarData()
  const [open, setOpen] = useState(false)
  const {
    events,
    error,
    errorMessage,
    setData: setListOfEvents,
    saveEventCalendarImg,
    addNewMouth
  } = data

  console.log(events)

  const onFileInputClick = (e, index) => {
    const img = e.target.files[0]

    if (img && img.type.substr(0, 5) === 'image') {
      /* eslint-disable-next-line no-undef */
      const reader = new FileReader()
      reader.onload = async (e) => {
        const image = e.target.result
        await saveEventCalendarImg(index, image)
      }

      reader.readAsArrayBuffer(img)
    } else {
      setListOfEvents({ events, error: true })
    }
  }

  const onDeleteMonth = (index) => {
    swal({
      title: '¿Estas seguro de eliminar este mes?',
      text: 'Una vez eliminado no se podra recuperar',
      icon: 'warning',
      buttons: ['Cancelar', 'Eliminar'],
      dangerMode: true
    }).then(async (willDelete) => {
      if (willDelete) {
        const newListOfEvents = events
        const toDelete = newListOfEvents.splice(index, 1)// a list
        const { id, mouth, year } = toDelete[0]
        const { status } = await startDeleteCalendarEvent({ id, mouth, year })
        if (status === 'error') {
          swal('No se pudo eliminar el mes', {
            icon: 'error'
          })
          return
        }
        setListOfEvents({ events: newListOfEvents, error: false })
        swal('El mes ha sido eliminado del calendario', {
          icon: 'success'
        })
      }
    })
  }

  const onImgDelete = async (index, imgIndex) => {
    // TODO: Me lleva el chafle, faltó hacer que se eliminar en la db la img.
    const newEventImages = events[index].imgs
    newEventImages.splice(imgIndex, 1)
    const newEvent = {
      mouth: events[index].mouth,
      year: events[index].year,
      imgs: newEventImages
    }
    const newListOfEvents = events
    newListOfEvents.splice(index, 1, newEvent)
    const resp = await startDeleteAImg()
    setListOfEvents({ events: newListOfEvents, error: false })
  }

  return (
    <LayoutAdmin>
      <Container>
        {' '}
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
            padding: '10px',
            maxWidth: '100vw'
          }}
        >
          <Snackbar
            open={error}
            autoHideDuration={6000}
            onClose={() =>
              setListOfEvents({ events, error: false, errorMessage: '' })}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            <Alert severity='error'>{errorMessage}</Alert>
          </Snackbar>

          <Typography variant='h3'>Calendario</Typography>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setOpen(true)}
            sx={{ marginBottom: '20px' }}
          >
            Agregar un nuevo mes
          </Button>
          <CreateNewEventComponent
            open={open}
            setOpen={setOpen}
            events={events}
            setListOfEvents={addNewMouth}
          />
          {events.map((event, index) => (
            <Grid
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'left',
                marginBottom: '20px'
              }}
            >
              <Typography key={index} variant='h5'>
                {`${event.mouth}, ${event.year}`}
              </Typography>
              <ImagesAdminComponent
                images={event.imgs}
                onFileInputClick={onFileInputClick}
                index={index}
                onImgDelete={onImgDelete}
              />
              <Button
                sx={{ width: 'fit-content' }}
                variant='contained'
                color='error'
                onClick={() => onDeleteMonth(index)}
              >
                Eliminar mes
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </LayoutAdmin>
  )
}
