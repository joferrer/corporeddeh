/* eslint-disable react/prop-types */
import { Delete } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useMemo, useState } from 'react'
import { startSetLinksVideos } from '../../../backend/home/HomeThunks'

export const HomeMultimediaComponent = ({ videosList }) => {
  const [list, setList] = useState(videosList)

  const onDelete = async (index) => {
    const newList = list?.filter((video, i) => i !== index)
    const { status } = await startSetLinksVideos(newList)
    if (status === 'success') return setList(newList)
    alert('No se pudo eliminar el link del vídeo. Intente nuevamente.')
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (list?.length >= 2) return alert('Solo es posible subir dos vídeos a la página principal.')
    const { value } = e.target[0]
    if (value === '') return alert('El campo no puede estar vacío.')

    const newList = [...list, value]
    const { status } = await startSetLinksVideos(newList)
    if (status === 'success') return setList(newList)
    alert('No se pudo guardar el link del vídeo. Intente nuevamente.')
  }

  useMemo(() => {
    setList(videosList)
  }, [videosList])

  return (
    <Grid sx={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexGrow: 1,
      maxWidth: '315px'
    }}
    >
      <form onSubmit={onSubmit}>
        <Typography variant='h4' sx={{ paddingBottom: '10px' }}>Contenido multimedia</Typography>
        <TextField variant='standard' label='Link de vídeo' />
        <Button variant='contained' type='submit'>Subir</Button>
      </form>
      <Grid sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%'
      }}
      >
        <ul style={{
          display: 'flex',
          flexDirection: 'column',
          listStyle: 'none',
          padding: 0,
          width: '100%'
        }}
        >
          {
            list?.map((video, index) =>
              <li
                style={{ width: '100%' }}
                key={index}
              >
                <Grid sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: 1
                }}
                >
                  <a
                    style={{ flexGrow: '1', overflow: 'auto' }}
                    href={video}
                  >
                    {video}
                  </a>
                  <Button
                    variant='contained'
                    color='error'
                    sx={{ flexGrow: 1, width: '30px', height: '30px' }}
                    onClick={() => onDelete(index)}
                  >
                    <Delete fontSize='small' />
                  </Button>

                </Grid>
              </li>)
          }
        </ul>
      </Grid>
    </Grid>
  )
}
