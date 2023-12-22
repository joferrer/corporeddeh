/* eslint-disable react/prop-types */
import { Alert, Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Snackbar, TextField, Typography } from "@mui/material"
import Layout from "../../corporeddeh/pages/layout/Layout"
import { DatePicker } from "@mui/x-date-pickers"
import { Clear, Edit } from "@mui/icons-material"
import { useEffect, useState } from "react"
import TransitionsModal from "./Components/ModalComponent"
import { EditEventComponent } from "./Components/EditEventComponent"
import { useForm } from "react-hook-form"

const initListOfEvents = new Promise((resolve) => {
    return resolve([
        {
            id: "1",
            titulo: "Titulo",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
            fecha: "20/20/2023",
            imagen: "https://pbs.twimg.com/media/FCVslvrXoAAIzS7?format=jpg&name=large",
        },
        {
            id: "2",
            titulo: "Titulo",
            descripcion: "Una descripcion Larga...........",
            fecha: "20/20/2023",
            imagen: "https://pbs.twimg.com/media/FCVslvrXoAAIzS7?format=jpg&name=large",
        }
    ])
})

const sendData = async (data) => {
    return await {
        status: 400,
        message: "Evento creado correctamente"
    }

}

const CardEventComponent = ({ event, onDelete }) => {
    const [open, setOpen] = useState(false)
    return <Card sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        minWidth: "300px",
        marginTop: "10px",
        maxWidth: "500px",
    }}>
        <TransitionsModal title="Editar evento" state={open} setState={setOpen}>
            <EditEventComponent event={event} />
        </TransitionsModal>
        <Grid
            sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
            }}
        >
            <CardMedia
                component={"img"}
                sx={{
                    width: "100px",
                    maxHeight: "200px",
                    objectFit: "cover",

                }}
                image={event?.imagen}
                alt="Image description" />
            <CardActions sx={{
                display: "flex",

            }}>
                <Button variant="contained" sx={{
                    flexGrow: 1,
                }}
                    onClick={() => setOpen(true)}
                >
                    <IconButton color="inherit" sx={{ padding: 0 }}>
                        <Edit />
                    </IconButton>
                </Button>
                <Button variant="contained" color="error" sx={{
                    flexGrow: 1,
                }}
                    onClick={() => onDelete(event?.id)}
                >
                    <IconButton color="inherit" sx={{ padding: 0 }}>
                        <Clear />
                    </IconButton>
                </Button>
            </CardActions>

        </Grid>
        <CardContent sx={{
            textAlign: "left",
        }}>
            <Typography variant="h4">{event?.titulo}</Typography>
            <Typography variant="h6">{event?.fecha}</Typography>
            <Typography variant="body1">{event?.descripcion}</Typography>

        </CardContent>
    </Card>
}

export const EventsAdminPage = () => {

    const [listOfEvents, setListOfEvents] = useState([])
    const [error, setError] = useState(false)
    const { register, handleSubmit } = useForm()

    const getData = async () => {
        return await initListOfEvents

    }

    const onDelete = (index) => {
        setListOfEvents(listOfEvents.filter((event) => event.id !== index))

    }

    const onCreateEvent = async (event) => {
        const response = await sendData(event)
        console.log(response)
        if (response.status === 200)
            return setListOfEvents([...listOfEvents, event])
        setError(true)


    }

    useEffect(() => {
        Promise.all([getData()])
            .then((res) => {
                setListOfEvents(res[0])
            })
    }, [])

    return (
        <Layout>

            <Grid sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                flexWrap: "wrap",
            }}>
                <Typography variant="h4" sx={{ flexGrow: 1, width: "100%", textAlign: "left", paddingLeft: "50px", marginBottom: "10px" }}>Eventos</Typography>
                <Grid
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        padding: "1rem",
                    }}
                >
                    <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
                        <Alert onClose={() => setError(false)} severity="error" sx={{ width: '100%' }}>
                            This is a success message!
                        </Alert>
                    </Snackbar>
                    <form
                        onSubmit={handleSubmit(onCreateEvent)}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}

                    >
                        <TextField
                            label="Nombre del evento"
                            variant="standard" />
                        <DatePicker
                            slotProps={{
                                textField: {
                                    helperText: 'DD/MM/YYYY',
                                },
                            }}
                        />
                        <TextField
                            label="Descripción"
                            variant="standard"
                            multiline={true}
                            rows={5}
                        />
                        <Button variant="contained">Añadir multimedia</Button>
                        <Button variant="contained" type="submit" >Crear evento</Button>
                    </form>
                </Grid>
                <Grid
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "1rem",
                    }}
                >
                    {
                        listOfEvents.map((event) => {
                            return <CardEventComponent
                                key={event?.id}
                                event={event}
                                index={event?.id}
                                onDelete={onDelete}
                            />
                        })
                    }
                </Grid>

            </Grid>
        </Layout>
    )
}