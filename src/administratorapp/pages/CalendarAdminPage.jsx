import { Button, Grid, Typography } from "@mui/material"
import Layout from "../../corporeddeh/pages/layout/Layout"
import { useEffect, useState } from "react"

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
        events: []
    })
    const { events } = ListOfEvents

    useEffect(() => {
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
                        <Typography key={index} variant="h5">
                            {`${event.mouth}, ${event.year}`}
                        </Typography>
                        <Grid
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",

                            }}
                        >
                            {
                                event.imgs.map((img, index) => (
                                    <img style={{
                                        width: "100px",
                                        maxHeight: "200px",
                                        objectFit: "cover"
                                    }} key={index} src={img} alt="img" />
                                ))
                            }
                            <Button variant="contained">Agregar</Button>

                        </Grid>

                    </Grid>

                ))
            }
        </Grid>


    </Layout>
}