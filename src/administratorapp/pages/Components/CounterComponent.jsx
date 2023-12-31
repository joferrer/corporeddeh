/* eslint-disable react/prop-types */
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useDate } from '../../../theme'

export const CounterComponent = ({ counter = 1000 }) => {
  const [value, setValue] = useState({ counter })
  const { month } = useDate()
  const [editable, setEditable] = useState(false)

  return (
    <Grid sx={{ flexGrow: 1, maxWidth: '315px' }}>
      <form>
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
