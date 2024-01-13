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

const sendData = async (data) => {
  return await {
    status: 'success',
    message: 'Evento creado correctamente'
  }
}

export const EditEventComponent = ({ event, setEvent, setOpen, setListOfEvents, listOfEvents }) => {
  const { datejs } = useDate()
  const [addMultimedia, setAddMultimedia] = useState({ edit: false, videos: [], images: [], imagesFiles: [] })
  console.log(addMultimedia)
  console.log(event)
  const onSubmit = async () => {
    console.log('SUBMIT', event)
    // setOpen(false)

    const { status } = await sendData(event)
    if (status !== 'success') {
      return swal('No se pudo crear el evento, intentelo de nuevo.', '', 'error')
    }
    setListOfEvents([...listOfEvents, event])
  }

  const onConfirm = () => {
    onSubmit()
    setOpen(false)
  }
  useEffect(() => {
    const { imagen } = event
    const videosList = imagen.filter((img) => img.includes('youtube'))
    const imagesList = imagen.filter((img) => !img.includes('youtube'))
    setAddMultimedia({ edit: false, videos: videosList, images: imagesList, imagesFiles: [] })
  }, [])

  return (
    <Grid
      sx={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      }}
    >
      <AddMultimediaComponent addMultimedia={addMultimedia} setAddMultimedia={setAddMultimedia} imagesList={addMultimedia?.images} id={event.id} />

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
  )
}
