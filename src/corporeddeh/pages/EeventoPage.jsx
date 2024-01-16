import React, { useEffect, useState } from 'react'
import Layout from './layout/Layout'
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Typography
} from '@mui/material'
import { MediaQuerys } from './../../theme/Config'
import Carousel from 'react-material-ui-carousel'
import loguito from '../../../public/vite.svg'
import {
  ArrowBack,
  ArrowForward,
  Close as CloseIcon
} from '@mui/icons-material'
import Container from '../../ui/AloneComponents/Container'
import { startGetEventById } from './../../backend/Events/EventsThunks'

export const EeventoPage = () => {
  const { Mobile } = MediaQuerys
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('id')

  const listImagen = [loguito, '../../../public/Train-PNG-HD-Image.png']
  const listVideo = [
    'https://www.youtube.com/embed/APyyYg-rJyE?si=dWHT3wlaKLckSGfl',
    'https://www.youtube.com/embed/APyyYg-rJyE?si=dWHT3wlaKLckSGfl'
  ]
  const [events, setListOfEvents] = useState([])
  const [error, setError] = useState(false)
  const getData = async () => {
    const { status, events } = await startGetEventById(id)
    if (status === 'error') return setError(true)
    return events
  }
  console.log(events)

  useEffect(() => {
    Promise.all([getData()]).then((res) => {
      setListOfEvents(res[0])
    })
  }, [])
  const [openModal, setOpenModal] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)

  const handleOpenModal = (index) => {
    setSelectedImageIndex(index)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setSelectedImageIndex(null)
  }

  return (
    <Layout>
      <Container>
        <Box sx={{ marginBottom: 4 }}>
          <Typography display='flex' justifyContent='start' variant='h4'>
            Titulo extenso pero asi tooo gua´po
          </Typography>
          <Typography display='flex' justifyContent='start'>
            20/12/2023
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
          >
            <Typography variant='body'>
              Se dice de mí Se dice que soy fea Que camino a lo malevo Que soy
              chueca y que me muevo Con un aire compadrón Que parezco un
              dinosaurio Mi nariz es puntiaguda La figura no me ayuda Y mi boca
              es un buzón Si charlo con Luis, con Pedro o con Juan Hablando de
              mí, los hombres están Critican si ya la línea perdí Se fijan si
              voy, si vengo o si fui Se dicen, ah, muchas cosas Mas si el bulto
              no interesa ¿Por qué pierden la cabeza ocupándose de mí? Yo sé que
              muchos que desprecian con mentiras Y suspiran y se mueren cuando
              piensan en mi amor Y más de uno se derrite si suspiro Y se quedan
              si lo miro, resoplando con temor Si fea soy, pongámosle Que de eso
              ya, yo me enteré Mas la fealdad que Dios me dio Mucha mujer me la
              envidió Y no dirán que me creí Porque modesta siempre fui Yo soy
              así Y ocultan de mí Ocultan que yo tengo unos ojos soñadores Y
              además otros primores que producen sensación Si soy fea, sé que en
              cambio, tengo un cutis de muñeca Los que dicen que soy chueca, no
              me han visto en camisón Los hombres de mí critican la voz El modo
              de hablar La pinta, la tos Critican si ya la línea perdí Se fijan
              si voy, si vengo o si fui Se dicen muchas cosas Mas si el bulto no
              interesa ¿Por qué pierden la cabeza ocupándose de mí? Yo sé que
              muchos que desprecian con mentiras Y suspiran y se mueren cuando
              piensan en mi amor Y más de uno se derrite si suspiro Y se quedan
              si lo miro, resoplando con temor Si fea soy, pongámosle Que de eso
              ya, yo me enteré Mas la fealdad que Dios me dio Mucha mujer me la
              envidió Y no dirán que me creí Porque modesta siempre fui Yo soy
              así
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
          >
            <Carousel
              interval={4000}
              sx={{
                maxWidth: '660px',
                width: '100%',
                maxHeight: '550px',
                height: '100%',
                zIndex: 0
              }}
            >
              {listImagen.map((url, index) => (
                <Box
                  key={index}
                  sx={{
                    width: '100%',
                    marginRight: '10px',
                    marginBottom: '10px',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: Mobile ? 'none' : 'scale(1.02)',
                      transition: 'transform 0.3s ease'
                    }
                  }}
                  onClick={() => handleOpenModal(index)}
                >
                  <img
                    src={url}
                    key={index}
                    alt={`Image ${index}`}
                    style={{
                      maxWidth: '550px',
                      width: '100%',
                      height: '350px'
                    }}
                  />
                </Box>
              ))}
            </Carousel>
          </Grid>
        </Grid>
        {listVideo.length > 0
          ? (
            <>
              <Typography
                variant='h5'
                display='flex'
                justifyContent='start'
                sx={{ marginTop: 3 }}
              >
                Videos
              </Typography>
              <Grid container spacing={2}>
                {listVideo.map((url, index) => (
                  <Grid
                    item
                    key={index}
                    xs={12}
                    sm={4}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: 2
                    }}
                  >
                    <iframe
                      key={index}
                      src={url}
                      width='100%'
                      height='250'
                      style={{ border: 0 }}
                      allowFullScreen
                    />
                  </Grid>
                ))}
              </Grid>
            </>
          )
          : (
            <></>
          )}
      </Container>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby='image-modal'
        aria-describedby='image-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 1300,
            maxWidth: '90vw',
            maxHeight: 900,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              color: 'red'
            }}
            onClick={handleCloseModal}
          >
            <CloseIcon />
          </IconButton>

          {selectedImageIndex !== null && (
            <img
              src={listImagen[selectedImageIndex]}
              alt={`Selected Image ${selectedImageIndex}`}
              style={{ width: '100%', maxHeight: 800 }}
            />
          )}

          <IconButton
            onClick={() =>
              setSelectedImageIndex((prev) =>
                prev > 0 ? prev - 1 : listImagen.length - 1
              )}
            sx={{
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translateY(-50%)',
              color: 'primary.main'
            }}
          >
            <ArrowBack />
          </IconButton>

          <Typography variant='body1' sx={{ textAlign: 'center', mt: 2 }}>
            {`${selectedImageIndex + 1} / ${listImagen.length}`}
          </Typography>
          <IconButton
            onClick={() =>
              setSelectedImageIndex((prev) =>
                prev < listImagen.length - 1 ? prev + 1 : 0
              )}
            sx={{
              position: 'absolute',
              top: '50%',
              right: 0,
              transform: 'translateY(-50%)',
              color: 'primary.main'
            }}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Modal>
    </Layout>
  )
}
