import { Alert, Grid, Snackbar, Typography } from "@mui/material"
import Layout from "../../corporeddeh/pages/layout/Layout"
import { useEffect, useState } from "react"
import { ImagesAdminComponent } from "./Components/ImagesAdminComponent"

const initListOfEvents = new Promise((resolve) => {
    return resolve({
        events: [
            {
                mouth: "Octubre",
                year: "2023",
                imgs: ["https://pbs.twimg.com/media/FCVslvrXoAAIzS7?format=jpg&name=large", "https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/110153332_165142108463312_2924216905550032814_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeEPocbroSaZX5eCxHmfNVv3fPzSV1av9YB8_NJXVq_1gCQLnHhAA6hYuRMAobu2BUnVCWnLeTMPNXldJPU5mmQe&_nc_ohc=h8C10q_cSh4AX9mflHo&_nc_ht=scontent-bog1-1.xx&oh=00_AfCbg3XIxwO1tDoOEhueJLzf5Dc2b7Rxy4l0rz3bDloMjA&oe=65A9EDEA"]
            },
            {
                mouth: "Noviembre",
                year: "2023",
                imgs: ["https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/110153332_165142108463312_2924216905550032814_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeEPocbroSaZX5eCxHmfNVv3fPzSV1av9YB8_NJXVq_1gCQLnHhAA6hYuRMAobu2BUnVCWnLeTMPNXldJPU5mmQe&_nc_ohc=h8C10q_cSh4AX9mflHo&_nc_ht=scontent-bog1-1.xx&oh=00_AfCbg3XIxwO1tDoOEhueJLzf5Dc2b7Rxy4l0rz3bDloMjA&oe=65A9EDEA"]
            },
            {
                mouth: "Diciembre",
                year: "2023",
                imgs: []
            }
        ]
    })
})

export const CalendarAdminPage = () => {
    const [ListOfEvents, setListOfEvents] = useState({
        events: [],
        error: false,
    })
    const { events, error } = ListOfEvents

    useEffect(() => {
        Promise.all([initListOfEvents])
            .then((res) => setListOfEvents({ events: res[0].events }))
    }, [])

    const onFileInputClick = (e, index) => {

        const img = e.target.files[0]

        if (img && img.type.substr(0, 5) === "image") {
            const reader = new FileReader()
            reader.onload = (e) => {
                const imageUrl = e.target.result
                const newEventImages = events[index].imgs
                newEventImages.push(imageUrl)
                const newEvent = {
                    mouth: events[index].mouth,
                    year: events[index].year,
                    imgs: newEventImages
                }
                let newListOfEvents = events
                newListOfEvents.splice(index, 1, newEvent)
                setListOfEvents({ events: newListOfEvents, error: false })
            }

            reader.readAsDataURL(img)
        }
        else {
            setListOfEvents({ events, error: true })
        }
    }

    const onImgDelete = (index, imgIndex) => {
        const newEventImages = events[index].imgs
        newEventImages.splice(imgIndex, 1)
        const newEvent = {
            mouth: events[index].mouth,
            year: events[index].year,
            imgs: newEventImages
        }
        let newListOfEvents = events
        newListOfEvents.splice(index, 1, newEvent)
        setListOfEvents({ events: newListOfEvents, error: false })
    }

    return <Layout>
        <Grid sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
            padding: "10px",
            maxWidth: "100vw",

        }}>

            <Snackbar
                open={error}
                autoHideDuration={6000}
                onClose={() => setListOfEvents({ events, error: false })}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
            >
                <Alert severity="error">Error al subir la imagen</Alert>
            </Snackbar>

            <Typography variant="h3">Calendario</Typography>

            {
                events.map((event, index) => (
                    <Grid key={index} sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        textAlign: "left",
                        marginBottom: "20px",
                    }}>
                        <Typography key={index} variant="h5">
                            {`${event.mouth}, ${event.year}`}
                        </Typography>
                        <ImagesAdminComponent images={event.imgs} onFileInputClick={onFileInputClick} index={index} onImgDelete={onImgDelete} />

                    </Grid>

                ))
            }
        </Grid>


    </Layout >
}