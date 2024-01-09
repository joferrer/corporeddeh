/* eslint-disable react/prop-types */
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useDate } from '../../../theme'
import { startSetCounterValue } from '../../../backend/home/HomeThunks'

export const CounterComponent = ({ counter = 1000 }) => {
  const [value, setValue] = useState({ counter })
  const { month } = useDate()
  const [editable, setEditable] = useState(false)

  const onSubtmit = async (e) => {
    e.preventDefault()
    const valueToSubmit = Number(value.counter)
    const resp = await startSetCounterValue(valueToSubmit)
    const { status } = resp
    if (status === 'success') {
      return setEditable(!editable)
    }
    alert('No se pudo guardar el valor del contador. Intente nuevamente.')
  }

  return (
    <Grid sx={{ flexGrow: 1, maxWidth: '315px' }}>
      <form onSubmit={onSubtmit}>
        <Typography variant='h4' sx={{ paddingBottom: '10px' }}>Contador de hechos  para el mes de {month()}</Typography>
        <TextField
          sx={{ width: '100%', marginBottom: '10px' }}
          type='number'
          variant='standard'
          label='Dígite un número'
          value={value.counter}
          onChange={(e) => setValue({ ...value, counter: e.target.value })}
          disabled={!editable}
        />
        <Button variant='contained' type='submit' disabled={!editable}>Guardar</Button>
        <Button
          variant='contained'
          onClick={() => setEditable(!editable)}
          color={editable ? 'error' : 'primary'}
          sx={{ marginLeft: '10px' }}
        >
          {!editable ? 'Editar' : 'Cancelar'}
        </Button>
      </form>

    </Grid>
  )
}
