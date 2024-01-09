/* eslint-disable react/prop-types */
import { Grid } from '@mui/material'
import {
  CounterComponent,
  HomeMultimediaComponent,
  SocialNetworksComponent
} from './Components'
import { useEffect, useState } from 'react'
import LayoutAdmin from './Layout/LayoutAdmin'
import Container from './../../ui/AloneComponents/Container'
import { startLoadHomeDocumment } from '../../backend/home/HomeThunks'

const linksInit = new Promise((resolve) => {
  return resolve({
    counter: 0,
    videosList: [
      'https://www.youtube.com/embed/APyyYg-rJyE?si=dWHT3wlaKLckSGfl',
      'https://www.youtube.com/embed/6aswzDXxj7U?si=CVJrwJwCRuKJaGHG'
    ],
    youtube: 'https://www.youtube.com/channel/UC5Z3?si=CVJrwJwCRuKJaGHG',
    facebook:
      'https://www.facebook.com/CorporacionRedDeHermanas-100282255426622',
    instagram: 'https://www.instagram.com/corporacionreddhermanas/',
    twitter: 'https://twitter.com/RedDeHermanas',
    email: 'corpored@gmail.com'
  })
})

export const AdminHomePage = () => {
  const [links, setLinks] = useState({
    counter: 0,
    videosList: [],
    youtube: '',
    facebook: '',
    instagram: '',
    twitter: '',
    email: ''
  })
  const { videosList } = links
  useEffect(() => {
    Promise.all([startLoadHomeDocumment()]).then((result) => {
      const { counter, linksVideos, socialNetworks } = result[0].data
      console.log(result[0].data)
      const linksPromise = {
        counter,
        videosList: linksVideos,
        youtube: socialNetworks.youtube,
        facebook: socialNetworks.facebook,
        instagram: socialNetworks.instagram,
        twitter: socialNetworks.twitter,
        email: socialNetworks.email
      }
      setLinks(linksPromise)
    })
  }, [])

  return (
    <LayoutAdmin>
      <Container>
        {' '}
        <Grid
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            maxWidth: '100vw',
            padding: '10px',
            justifyContent: 'space-evenly',
            width: '100%'
          }}
        >
          <CounterComponent counter={links?.counter} />
          <HomeMultimediaComponent videosList={videosList} />
          <SocialNetworksComponent
            sociallinks={{
              youtube: links?.youtube,
              facebook: links?.facebook,
              instagram: links?.instagram,
              twitter: links?.twitter,
              email: links?.email
            }}
          />
        </Grid>
      </Container>
    </LayoutAdmin>
  )
}
