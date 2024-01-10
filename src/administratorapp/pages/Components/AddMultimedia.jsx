/* eslint-disable react/prop-types */
import { Grid, Typography } from '@mui/material'
import { ImagesAdminComponent } from './ImagesAdminComponent'
import { useEffect, useState } from 'react'
import { HomeMultimediaComponent } from './HomeMultimediaComponent'
import ResponsiveDialog from './DialogMuiComponent'

export const AddMultimediaComponent = ({ videos, imagesList, addMultimedia, setAddMultimedia }) => {
  const [listOfImages, setListOfImages] = useState({ images: imagesList || [], imagesFiles: [], error: false })
  const [videosList, setVideosList] = useState(videos || [])
  const [open, setOpen] = useState(false)
  const { images } = listOfImages
  console.log(addMultimedia)
  console.log(open)
  const onImgDelete = (index, imgIndex) => {
    const newListOfImages = images
    newListOfImages.splice(imgIndex, 1)
    const newListOfImagesFiles = listOfImages.imagesFiles
    newListOfImagesFiles.splice(imgIndex, 1)

    setListOfImages({ images: newListOfImages, imagesFiles: newListOfImagesFiles, error: false })
  }

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

        setListOfImages({ images: newListOfImages, imagesFiles: newListOfImagesFiles, error: false })
        console.log(listOfImages)
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

  useEffect(() => setOpen(addMultimedia.edit), [addMultimedia])

  return (
    <ResponsiveDialog title='Añadir multimedia' state={open} setState={setDialogState} onConfirm={() => { }}>
      <Grid>

        <Grid>
          <HomeMultimediaComponent videosList={videosList} />
        </Grid>
        <Grid>
          <Typography variant='h4'>Imagenes</Typography>
          <ImagesAdminComponent images={listOfImages?.images} index={0} onImgDelete={onImgDelete} onFileInputClick={onFileInputClick} />
        </Grid>
      </Grid>
    </ResponsiveDialog>
  )
}
