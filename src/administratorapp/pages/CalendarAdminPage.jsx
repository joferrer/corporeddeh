import { Button, Grid, Typography } from "@mui/material"
import Layout from "../../corporeddeh/pages/layout/Layout"
import { useEffect, useState } from "react"

const initListOfEvents = new Promise((resolve) => {
    return resolve({
        events: [
            {
                mouth: "Octubre",
                year: "2023",
                imgs: []
            },
            {
                mouth: "Noviembre",
                year: "2023",
                imgs: []
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
        events: []
    })
    const { events } = ListOfEvents
    console.log(events)
    useEffect(() => {
        console.log("useEffect")
        Promise.all([initListOfEvents])
            .then((res) => setListOfEvents({ events: res[0].events }))
    }, [])

    return <Layout>
        <Grid sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
            padding: "10px",
            maxWidth: "100vw",

        }}>
            <Typography variant="h3">Calendario</Typography>

            {
                events.map((event, index) => (
                    <Grid key={index} sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}>
                        <Typography key={index} variant="h4">
                            {`${event.mouth}, ${event.year}`}
                        </Typography>
                        {
                            event.imgs.map((img, index) => (
                                <img key={index} src={img} alt="img" />
                            ))
                        }
                        <Button variant="contained">Agregar</Button>
                    </Grid>

                ))
            }
        </Grid>


    </Layout>
}