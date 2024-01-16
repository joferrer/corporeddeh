/* eslint-disable react/prop-types */
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import { EditEventComponent } from './EditEventComponent'
import { Clear, Edit } from '@mui/icons-material'

export const CardEventComponent = ({ event, onDelete }) => {
  const [open, setOpen] = useState(false)
  const [eventToEdit, setEventToEdit] = useState(event)
  console.log(eventToEdit)
  console.log(event)

  return (
    <Card sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      minWidth: '300px',
      marginTop: '10px',
      maxWidth: '500px'
    }}
    >

      <EditEventComponent event={eventToEdit} setEvent={setEventToEdit} open={open} setOpen={setOpen} />

      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap'
        }}
      >
        <CardMedia
          component='img'
          sx={{
            width: '100px',
            maxHeight: '200px',
            objectFit: 'cover'

          }}
          image={event?.imagen[0]}
          alt='Image description'
        />
        <CardActions sx={{
          display: 'flex'

        }}
        >
          <Button
            variant='contained' sx={{
              flexGrow: 1
            }}
            onClick={() => setOpen(true)}
          >
            <Edit />
          </Button>
          <Button
            variant='contained' color='error' sx={{
              flexGrow: 1
            }}
            onClick={() => onDelete(eventToEdit?.id)}
          >
            <Clear />
          </Button>
        </CardActions>

      </Grid>
      <CardContent sx={{
        textAlign: 'left'
      }}
      >
        <Typography variant='h4'>{event?.titulo}</Typography>
        <Typography variant='h6'>{event?.fecha}</Typography>
        <Typography variant='body1'>{event?.descripcion}</Typography>

      </CardContent>
    </Card>
  )
}
