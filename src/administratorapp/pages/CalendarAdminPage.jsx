/* eslint-disable react/prop-types */
import { Alert, Button, Grid, Snackbar, Typography } from '@mui/material'
import { useState } from 'react'
import { ImagesAdminComponent } from './Components/ImagesAdminComponent'
import LayoutAdmin from './Layout/LayoutAdmin'
import { CreateNewEventComponent } from './Components'
import swal from 'sweetalert'
import { saveImageByMonth } from '../../backend/firebase/StorageFirebaseProvider'
import { useCalendarData } from '../../hooks/useCalendarData'

const initListOfEvents = new Promise((resolve) => {
  return resolve({
    events: [
      {
        mouth: 'Octubre',
        year: '2023',
        imgs: ['https://pbs.twimg.com/media/FCVslvrXoAAIzS7?format=jpg&name=large', 'https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/110153332_165142108463312_2924216905550032814_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeEPocbroSaZX5eCxHmfNVv3fPzSV1av9YB8_NJXVq_1gCQLnHhAA6hYuRMAobu2BUnVCWnLeTMPNXldJPU5mmQe&_nc_ohc=h8C10q_cSh4AX9mflHo&_nc_ht=scontent-bog1-1.xx&oh=00_AfCbg3XIxwO1tDoOEhueJLzf5Dc2b7Rxy4l0rz3bDloMjA&oe=65A9EDEA']
      },
      {
        mouth: 'Noviembre',
        year: '2023',
        imgs: ['https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/110153332_165142108463312_2924216905550032814_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeEPocbroSaZX5eCxHmfNVv3fPzSV1av9YB8_NJXVq_1gCQLnHhAA6hYuRMAobu2BUnVCWnLeTMPNXldJPU5mmQe&_nc_ohc=h8C10q_cSh4AX9mflHo&_nc_ht=scontent-bog1-1.xx&oh=00_AfCbg3XIxwO1tDoOEhueJLzf5Dc2b7Rxy4l0rz3bDloMjA&oe=65A9EDEA']
      },
      {
        mouth: 'Diciembre',
        year: '2023',
        imgs: ['https://firebasestorage.googleapis.com/v0/b/coporeddeh.appspot.com/o/Captura%20de%20pantalla%202023-12-20%20173302.png?alt=media&token=78172ca2-46bb-42e6-9ab5-e7c30d1f8e8b'
        ]
      }
    ]
  })
})

export const CalendarAdminPage = () => {
  const data = useCalendarData()
  const [open, setOpen] = useState(false)
  const { events, error, errorMessage, setData: setListOfEvents } = data

  console.log(events)

  const onFileInputClick = (e, index) => {
    const img = e.target.files[0]

    if (img && img.type.substr(0, 5) === 'image') {
      /* eslint-disable-next-line no-undef */
      const reader = new FileReader()
      reader.onload = (e) => {
        const imageUrl = e.target.result

        Promise.all([saveImageByMonth(
          imageUrl,
          events[index].mouth.toUpperCase(),
          events[index].year)])
          .then((res) => {
            const imageUrl = res[0].url
            if (!imageUrl) return setListOfEvents({ events, error: false, errorMessage: 'Error al subir la imagen' })

            const newEventImages = events[index].imgs
            newEventImages.push(imageUrl)
            const newEvent = {
              mouth: events[index].mouth,
              year: events[index].year,
              imgs: newEventImages
            }
            const newListOfEvents = events
            newListOfEvents.splice(index, 1, newEvent)
            setListOfEvents({ events: newListOfEvents, error: false, errorMessage: 'Error al subir la imagen' })
          }).catch((err) => { console.log(err) })
      }

      return reader.readAsArrayBuffer(img)
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
    })
      .then((willDelete) => {
        if (willDelete) {
          const newListOfEvents = events
          newListOfEvents.splice(index, 1)
          setListOfEvents({ events: newListOfEvents, error: false })
          swal('El mes ha sido eliminado del calendario', {
            icon: 'success'
          })
        }
      }
      )
  }

  const onImgDelete = (index, imgIndex) => {
    const newEventImages = events[index].imgs
    newEventImages.splice(imgIndex, 1)
    const newEvent = {
      mouth: events[index].mouth,
      year: events[index].year,
      imgs: newEventImages
    }
    const newListOfEvents = events
    newListOfEvents.splice(index, 1, newEvent)
    setListOfEvents({ events: newListOfEvents, error: false })
  }

  return (
    <LayoutAdmin>
      <Grid sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        padding: '10px',
        maxWidth: '100vw',
        marginTop: '20px'
      }}
      >
        <Snackbar
          open={error}
          autoHideDuration={6000}
          onClose={() => setListOfEvents({ events, error: false, errorMessage: '' })}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <Alert severity='error'>{errorMessage}</Alert>
        </Snackbar>

        <Typography variant='h3'>Calendario</Typography>
        <Button variant='contained' color='primary' onClick={() => setOpen(true)}>Agregar un nuevo mes</Button>
        <CreateNewEventComponent open={open} setOpen={setOpen} events={events} setListOfEvents={setListOfEvents} />
        {
          events.map((event, index) => (
            <Grid
              key={index} sx={{
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
              <ImagesAdminComponent images={event.imgs} onFileInputClick={onFileInputClick} index={index} onImgDelete={onImgDelete} />
              <Button sx={{ width: 'fit-content' }} variant='contained' color='error' onClick={() => onDeleteMonth(index)}>Eliminar mes</Button>
            </Grid>

          ))
        }
      </Grid>

    </LayoutAdmin>
  )
}
