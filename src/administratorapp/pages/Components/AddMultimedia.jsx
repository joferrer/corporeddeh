import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImagesAdminComponent } from "./ImagesAdminComponent"
import { useState } from "react"

const images = []

export const AddMultimediaComponent = () => {
    const [listOfImages, setListOfImages] = useState({ images: [], error: false })

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
            <TextField variant="outlined" label="Titulo" defaultValue={event?.titulo} />
            <Button variant="contained">Subir</Button>
        </Grid>
        <Grid>

        </Grid>
        <Grid>
            <Typography variant="h4">Imagenes</Typography>
            <ImagesAdminComponent images={listOfImages?.images} index={0} onImgDelete={onImgDelete} onFileInputClick={onFileInputClick} />
        </Grid>
    </Grid>
}