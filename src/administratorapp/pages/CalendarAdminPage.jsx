/* eslint-disable react/prop-types */
import { Alert, Button, Grid, Snackbar, Typography } from '@mui/material'

import { useEffect, useState } from 'react'
import { ImagesAdminComponent } from './Components/ImagesAdminComponent'
import LayoutAdmin from './Layout/LayoutAdmin'
import ResponsiveDialog from './Components/DialogMuiComponent'
import { DatePicker } from '@mui/x-date-pickers'
import { useDate } from '../../theme'

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
        imgs: []
      }
    ]
  })
})
const mouths = {
  ENERO: 0,
  FEBRERO: 1,
  MARZO: 2,
  ABRIL: 3,
  MAYO: 4,
  JUNIO: 5,
  JULIO: 6,
  AGOSTO: 7,
  SEPTIEMBRE: 8,
  OCTUBRE: 9,
  NOVIEMBRE: 10,
  DICIEMBRE: 11
}
const sortEventsByDate = (events) => {
  events.sort((a, b) => {
    const dateA = new Date(Number(a.year), mouths[a.mouth.toUpperCase()])
    const dateB = new Date(Number(b.year), mouths[b.mouth.toUpperCase()])
    return dateB - dateA
  })
  return events
}

const mouthAlreadyExist = (mouth, year, events) => {
  const event = events.find((e) => e.mouth.toUpperCase() === mouth.toUpperCase() && e.year === year)
  return event
}

const CreateNewEventComponent = ({ open, setOpen, events, setListOfEvents }) => {
  const { datejs, month } = useDate()
  const initNewEvent = {
    mouth: month(),
    year: datejs().format('YYYY'),
    imgs: []
  }
  const [newEvent, setNewEvent] = useState({ ...initNewEvent })

  const onAddMouth = (newMouth) => {
    const newAddEvent = {
      mouth: newMouth.mouth,
      year: newMouth.year,
      imgs: []
    }
    if (mouthAlreadyExist(newMouth.mouth, newMouth.year, events)) {
      return setListOfEvents({ events, error: true, errorMessage: 'El mes ya existe' })
    }
    const newListOfEvents = events
    newListOfEvents.push(newAddEvent)

    const newListOfEventsSorted = sortEventsByDate(newListOfEvents)
    setListOfEvents({ events: newListOfEventsSorted, error: false })
    setNewEvent({ ...initNewEvent })

    // TODO: manege error
  }
  const onChangeMouth = (e) => {
    setNewEvent({ ...newEvent, mouth: e })
  }

  const onChangeYear = (e) => {
    setNewEvent({ ...newEvent, year: e })
  }
  const onConfirm = () => {
    onAddMouth(newEvent)
    setOpen(false)
  }

  return (
    <ResponsiveDialog state={open} setState={setOpen} title='Agregar nuevo més' onConfirm={onConfirm}>
      <Grid
        sx={{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >

        <DatePicker
          label='Año' openTo='year'
          views={['year']}
          defaultValue={datejs()}
          onChange={(e) => onChangeYear(e.format('YYYY'))}
        />
        <DatePicker
          defaultValue={datejs()}
          label='Mes'
          openTo='month'
          views={['month']}
          onChange={(e) => onChangeMouth(e.format('MMMM'))}
        />
      </Grid>
    </ResponsiveDialog>
  )
}

export const CalendarAdminPage = () => {
  const [ListOfEvents, setListOfEvents] = useState({
    events: [],
    error: false,
    errorMessage: ''
  })

  const [open, setOpen] = useState(false)
  const { events, error, errorMessage } = ListOfEvents

  useEffect(() => {
    Promise.all([initListOfEvents])
      .then((res) => {
        const eventsList = sortEventsByDate(res[0].events)
        setListOfEvents({ events: eventsList, error: false })
      })
  }, [])

  const onFileInputClick = (e, index) => {
    const img = e.target.files[0]

    if (img && img.type.substr(0, 5) === 'image') {
      const reader = new FileReader()
      reader.onload = (e) => {
        const imageUrl = e.target.result
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
      }

      reader.readAsDataURL(img)
    } else {
      setListOfEvents({ events, error: true })
    }
  }

  const onDeleteMonth = (index) => {
    const newListOfEvents = events
    newListOfEvents.splice(index, 1)
    setListOfEvents({ events: newListOfEvents, error: false })
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
