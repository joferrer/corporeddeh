/* eslint-disable react/prop-types */
import { useState } from 'react'
import { DatePicker } from '@mui/x-date-pickers'
import ResponsiveDialog from './DialogMuiComponent'
import { Grid } from '@mui/material'
import { useDate } from '../../../theme'

export const CreateNewEventComponent = ({ open, setOpen, setListOfEvents }) => {
  const { datejs, month } = useDate()
  const initNewEvent = {
    mouth: month(),
    year: datejs().format('YYYY'),
    imgs: []
  }
  const [newEvent, setNewEvent] = useState({ ...initNewEvent })

  const onAddMouth = (newMouth) => {
    setListOfEvents(newMouth)
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
    <ResponsiveDialog state={open} setState={setOpen} title='Agregar nuevo més' onConfirm={onConfirm} creating>
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
