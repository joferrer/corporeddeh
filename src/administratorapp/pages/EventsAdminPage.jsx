import { Button, Grid, TextField, Typography } from "@mui/material"
import Layout from "../../corporeddeh/pages/layout/Layout"
import { DatePicker } from "@mui/x-date-pickers"


export const EventsAdminPage = () => {
    return (
        <Layout>

            <Grid sx={{
                display: "flex",
            }}>
                <Grid
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Typography variant="h4">Eventos</Typography>
                    <form
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
                        <Button variant="contained">Añadir multimedia</Button>
                        <Button variant="contained">Crear evento</Button>
                    </form>
                </Grid>


            </Grid>
        </Layout>
    )
}