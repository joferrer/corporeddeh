/* eslint-disable react/prop-types */
import { Grid, Typography } from '@mui/material'
import { ImagesAdminComponent } from './ImagesAdminComponent'
import { useEffect, useState } from 'react'
import { HomeMultimediaComponent } from './HomeMultimediaComponent'
import ResponsiveDialog from './DialogMuiComponent'
import { startDeleteAImgOfEvent, startSaveImgOfEvent, startSaveVideosOfEvent } from '../../../backend/Events/EventsThunks'
import swal from 'sweetalert2'
import { set } from 'react-hook-form'

const getFilenameFromURL = (url) => {
  const path = url.split('/')
  const filename = path[path.length - 1].split('?')[0]
  return decodeURIComponent(filename).split('/').pop()
}

export const AddMultimediaComponent = ({ videos, imagesList = [], addMultimedia, setAddMultimedia, id, onConfirm, creating = false }) => {
  const [listOfImages, setListOfImages] = useState({ images: imagesList, imagesFiles: [], error: false })
  const [videosList, setVideosList] = useState(videos || addMultimedia.videos || [])
  const [open, setOpen] = useState(false)
  const [imagenTrack, setImagenTrack] = useState(new Map())
  const { images } = listOfImages
  const onImgDelete = (index, imgIndex) => {
    const img = images[imgIndex]
    const newListOfImages = images
    newListOfImages.splice(imgIndex, 1)

    if (img.includes('firebase')) {
      const filename = getFilenameFromURL(img)
      swal.fire({
        title: '¿Estás seguro?',
        text: 'Una vez eliminado, no podrás recuperar esta imagen!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!'
      })
        .then(async (willDelete) => {
          if (willDelete.isConfirmed) {
            const { status } = await startDeleteAImgOfEvent(id, newListOfImages.concat(addMultimedia.videos), filename)
            if (status === 'success') {
              setListOfImages({ images: newListOfImages, imagesFiles: listOfImages.imagesFiles, error: false })
              return swal.fire({
                title: 'Imagen eliminada correctamente',
                icon: 'success'
              })
            }
            return swal.fire({
              title: 'No se pudo eliminar la imagen, intentelo de nuevo.',
              icon: 'error'
            })
          }
          return swal.fire({
            title: 'La imagen no se elimino.',
            icon: 'info'
          })
        })
        .catch(() =>
          swal.fire.fire({
            title: 'No se pudo eliminar la imagen, intentelo de nuevo.',
            icon: 'error'
          })
        )
      return
    }
    const fileToDelete = imagenTrack.get(img)

    const newImagesFile = addMultimedia.imagesFiles.filter((file) => file !== fileToDelete)
    setListOfImages({ images: newListOfImages, imagesFiles: newImagesFile, error: false })
    console.log(newImagesFile)

    setAddMultimedia({ ...addMultimedia, imagesFiles: newImagesFile })
    const newimagenTrack = imagenTrack
    newimagenTrack.delete(img)
    setImagenTrack(newimagenTrack) // Eliminar archivo blob del trackeo.
  }
  console.log(addMultimedia)
  console.log(imagenTrack)
  const onFileInputClick = (e, index) => {
    const img = e.target.files[0]

    if (img && img.type.substr(0, 5) === 'image') {
      /* eslint-disable-next-line no-undef */
      const reader = new FileReader()
      reader.onload = (e) => {
        const imageBuff = e.target.result
        const urlImg = URL.createObjectURL(new Blob([imageBuff], { type: 'image/*' }))
        const newListOfImages = listOfImages.images
        newListOfImages.push(urlImg)
        const newListOfImagesFiles = listOfImages.imagesFiles
        newListOfImagesFiles.push(imageBuff)
        const newimagenTrack = imagenTrack
        newimagenTrack.set(urlImg, imageBuff)
        setImagenTrack(newimagenTrack) // Trackear la imagen para luego saber que archivo blob eliminar.
        setListOfImages({ ...listOfImages, images: newListOfImages, imagesFiles: newListOfImagesFiles, error: false })
        setAddMultimedia({ ...addMultimedia, imagesFiles: newListOfImagesFiles })
      }

      reader.readAsArrayBuffer(img)
    } else {
      setListOfImages({ images, error: true })
    }
  }

  const setDialogState = (state) => {
    setOpen(state)
    setAddMultimedia({ edit: state, videos: videosList, images: listOfImages.imagesFiles })
  }
  const componentSetVideosList = (newList) => {
    setVideosList(newList)
    setAddMultimedia({ ...addMultimedia, videos: newList })
  }

  const saveData = async () => {
    swal.fire({
      title: 'Creando evento...',
      icon: 'info',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false
    })
    console.log(listOfImages, videosList)
    const { status } = await startSaveImgOfEvent(listOfImages.imagesFiles, id)
    const { status: status2 } = await startSaveVideosOfEvent(id, videosList)
    if (status === 'success' && status2 === 'success') {
      return swal.fire({
        title: 'Evento creado correctamente',
        icon: 'success'
      })
        .finally(() => window.location.reload())
    }
    return swal.fire({
      title: 'No se pudo crear el evento, intentelo de nuevo.',
      icon: 'error'

    })
  }
  useEffect(() => {
    setOpen(addMultimedia.edit)
    setVideosList(addMultimedia.videos)
  }, [addMultimedia])

  return (
    <ResponsiveDialog title='Añadir multimedia' state={open} setState={setDialogState} onConfirm={saveData} creating={creating}>
      <Grid>

        <Grid>
          <HomeMultimediaComponent videosList={videosList} option='envents' setVideosList={componentSetVideosList} />
        </Grid>
        <Grid>
          <Typography variant='h4'>Imagenes</Typography>
          <ImagesAdminComponent images={listOfImages?.images} index={0} onImgDelete={onImgDelete} onFileInputClick={onFileInputClick} />
        </Grid>
      </Grid>
    </ResponsiveDialog>
  )
}
