/* eslint-disable react/prop-types */
import { Grid, Paper, Typography } from '@mui/material'
import Layout from './layout/Layout'
import {
  PrincipalImgComponent,
  NavegationComponent,
  SendMessageForm
} from './components'
import { useWindowSize } from '../../hooks'
import { useDate } from '../../theme'
import { startLoadHomeDocumment } from '../../backend/home/HomeThunks'
import { useEffect, useState } from 'react'
import { startLoadCountEvents } from '../../backend/Events/EventsThunks'

const CounterComponent = ({ counter = 1000, mes = 'Enero' }) => {
  return (
    <Grid
      sx={{
        backgroundColor: '#E73E2E',
        width: '100%',
        maxWidth: '1440px',
        color: 'white',
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '10px'
      }}
    >
      <Typography variant='h6'>Hechos victimizantes</Typography>
      <Typography variant='h3'>{counter}</Typography>
      <Typography variant='h5'>{mes}</Typography>
    </Grid>
  )
}

const VideosComponent = ({ list }) => {
  // const list = [
  //   "https://www.youtube.com/embed/APyyYg-rJyE?si=dWHT3wlaKLckSGfl",
  //   "https://www.youtube.com/embed/6aswzDXxj7U?si=CVJrwJwCRuKJaGHG",
  // ];
  const videoStyle = {
    borderWidth: 0,
    flexGrow: 1,
    padding: '10px',
    height: '300px'
  }

  return (
    <Grid
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%'
      }}
    >
      {list?.map((video, index) => (
        <iframe key={index} src={video} style={videoStyle} loading='lazy' allowFullScreen />
      ))}
    </Grid>
  )
}

export const HomePage = () => {
  const { windowSize } = useWindowSize()
  const { month } = useDate()

  const [data, setListdata] = useState([])
  const [events, setListOfEvents] = useState([])
  const [error, setError] = useState(false)
  const getData = async () => {
    const { status, data } = await startLoadHomeDocumment()
    if (status === 'error') return setError(true)
    return data
  }

  const getEvent = async () => {
    const { status, events } = await startLoadCountEvents()
    if (status === 'error') return setError(true)
    return events
  }

  useEffect(() => {
    Promise.all([getData(), getEvent()]).then((res) => {
      setListdata(res[0])
      setListOfEvents(res[1])
    })
  }, [])

  return (
    <Layout>
      <Grid
        sx={{
          maxWidth: 1440,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >

        <PrincipalImgComponent events={events} />

        <Typography variant='h1' sx={{ textAlign: 'center', marginTop: '10px', fontSize: '2rem' }}>
          Corporación Red Departamental de Defensores de DDHH CORPOREDDEH
        </Typography>
        <NavegationComponent windowSize={windowSize} />
        <CounterComponent mes={month()} counter={data?.counter} />
        <Grid
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <Paper
            sx={{
              flexGrow: 1,
              minWidth: '320px',
              '@media (min-width: 425px)': {
                margin: 2
              }
            }}
          >
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.00570176863135!2d-72.50370495430481!3d7.88552384103064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e66459dcf7092b3%3A0x91d22b46e0eefc76!2sContralor%C3%ADa%20del%20Departamento%20de%20Norte%20de%20Santander!5e0!3m2!1ses-419!2sco!4v1700019636621!5m2!1ses-419!2sco'
              width='100%'
              height='450'
              style={{ border: 0, pointerEvents: 'none' }}
              allowFullScreen
              loading='lazy'
            />
          </Paper>
          <SendMessageForm />
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            alignContent: 'space-around',
            justifyContent: 'space-around',
            marginBottom: '10px'
          }}
        >
          <VideosComponent list={data?.linksVideos} />
        </Grid>
      </Grid>
    </Layout>
  )
}
