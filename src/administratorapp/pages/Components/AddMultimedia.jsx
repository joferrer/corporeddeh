/* eslint-disable react/prop-types */
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImagesAdminComponent } from "./ImagesAdminComponent"
import { useState } from "react"
import { HomeMultimediaComponent } from "./HomeMultimediaComponent"

const images = []

export const AddMultimediaComponent = ({ videos, imagesList }) => {
    const [listOfImages, setListOfImages] = useState({ images: imagesList || [], error: false })
    const [videosList, setVideosList] = useState(videos || [])

    const { images } = listOfImages
    console.log(images)

    const onImgDelete = (index, imgIndex) => {
        const newListOfImages = images
        newListOfImages.splice(imgIndex, 1)

        setListOfImages({ images: newListOfImages, error: false })
    }

    const onFileInputClick = (e, index) => {

        const img = e.target.files[0]

        if (img && img.type.substr(0, 5) === "image") {
            const reader = new FileReader()
            reader.onload = (e) => {
                const imageUrl = e.target.result
                const newListOfImages = listOfImages.images
                newListOfImages.push(imageUrl)

                setListOfImages({ images: newListOfImages, error: false })
            }

            reader.readAsDataURL(img)
        }
        else {
            setListOfImages({ images, error: true })
        }
    }

    return <Grid>

        <Grid>
            <HomeMultimediaComponent videosList={videosList} />
        </Grid>
        <Grid>
            <Typography variant="h4">Imagenes</Typography>
            <ImagesAdminComponent images={listOfImages?.images} index={0} onImgDelete={onImgDelete} onFileInputClick={onFileInputClick} />
        </Grid>
    </Grid>
}