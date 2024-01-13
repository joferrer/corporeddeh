/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Grid, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { useDate } from '../../../theme/dateConfig'
import { useEffect, useState } from 'react'
import { set } from 'react-hook-form'
import ResponsiveDialog from './DialogMuiComponent'
import { AddMultimediaComponent } from './AddMultimedia'
import swal from 'sweetalert'
import { startSaveImgOfEvent, startUpdateEvent } from '../../../backend/events/EventsThunks'

const sendData = async (data) => {
  return await {
    status: 'success',
    message: 'Evento creado correctamente'
  }
}

export const EditEventComponent = ({ event, setEvent, setOpen, setListOfEvents, listOfEvents, open }) => {
  const { datejs } = useDate()
  const [addMultimedia, setAddMultimedia] = useState({ edit: false, videos: [], images: [], imagesFiles: [] })
  console.log(addMultimedia)
  console.log(event)
  const onSubmit = async () => {
    console.log('SUBMIT', event)
    // setOpen(false)
    const eventToUpdate = {
      ...event,
      images: addMultimedia.videos.concat(addMultimedia.images)
    }
    // Primero se guarda el doc en firestore.
    const updateEvent = await startUpdateEvent(eventToUpdate)
    if (updateEvent.status !== 'success') return swal('No se pudo crear el evento, intentelo de nuevo.', '', 'error')
    // Luego si hay imagenes cargadas por el usuario se guardan en storage.
    if (addMultimedia.imagesFiles.length !== 0) {
      const { status } = await startSaveImgOfEvent(addMultimedia.imagesFiles, event.id)
      if (status !== 'success') {
        return swal('No se pudo crear el evento, intentelo de nuevo.', '', 'error')
      }
    }
    // Para ahorrar problemas con el cache se recarga la pagina luego de notificar al usuario.
    swal('Evento creado correctamente', '', 'success').finally(() => window.location.reload())
  }

  const onConfirm = () => {
    onSubmit()
    setOpen(false)
  }
  useEffect(() => {
    const { imagen } = event
    const videosList = imagen.filter((img) => img.includes('youtube'))
    const imagesList = imagen.filter((img) => !img.includes('youtube'))
    console.log('effect')
    setAddMultimedia({ edit: addMultimedia.edit, videos: videosList, images: imagesList, imagesFiles: [] })
  }, [addMultimedia.edit])

  return (
    <ResponsiveDialog title='Editar evento' state={open} setState={setOpen} onConfirm={onConfirm}>
      <Grid
        sx={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'space-between',
          flexWrap: 'wrap'
        }}
      >
        <AddMultimediaComponent
          addMultimedia={addMultimedia}
          setAddMultimedia={setAddMultimedia}
          imagesList={addMultimedia?.images}
          id={event.id}
        />

        <Grid sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          minWidth: '300px',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          flexGrow: 1

        }}
        >
          <TextField variant='outlined' label='Titulo' defaultValue={event?.titulo} />
          <TextField
            variant='outlined'
            label='Descripción'
            multiline
            rows={4}
            value={event?.descripcion}
            onChange={(e) => setEvent({ ...event, descripcion: e.target.value })}

          />

        </Grid>
        <Grid sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'

        }}
        >
          <DatePicker
            label='Fecha'
            value={datejs(event.fecha)}
            onChange={(date) => setEvent({ ...event, fecha: datejs(date).format('DD/MM/YYYY') })}

          />
          <Button variant='contained' onClick={() => setAddMultimedia({ ...addMultimedia, edit: true })}>Añadir multimedia</Button>
          <Button variant='contained'>Guardar cambios</Button>
        </Grid>

      </Grid>
    </ResponsiveDialog>
  )
}
