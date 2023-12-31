/* eslint-disable react/prop-types */
import { DatePicker } from '@mui/x-date-pickers'
import ResponsiveDialog from './DialogMuiComponent'
import { Grid } from '@mui/material'
import { mouthAlreadyExist, sortEventsByDate } from '../../../helpers'
import { useState } from 'react'
import { useDate } from '../../../theme'

export const CreateNewEventComponent = ({ open, setOpen, events, setListOfEvents }) => {
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
