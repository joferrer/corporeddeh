/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Grid, TextField, } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { useDate } from "../../../theme/dateConfig"

export const EditEventComponent = ({ event, setOpen, setListOfEvents, listOfEvents }) => {
    const { datejs } = useDate()
    return <Grid
        sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
            flexWrap: "wrap",
        }}
    >
        <Grid sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            minWidth: "300px",
            flexWrap: "wrap",
            justifyContent: "space-between",
            flexGrow: 1,

        }}>
            <TextField variant="outlined" label="Titulo" defaultValue={event?.titulo} />
            <TextField variant="outlined"
                label="Descripción"
                multiline
                rows={4}
                defaultValue={event?.descripcion} />

        </Grid>
        <Grid sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",


        }}>
            <DatePicker defaultValue={datejs(event.fecha)} />
            <Button variant="contained">Añadir multimedia</Button>
            <Button variant="contained">Guardar cambios</Button>
        </Grid>


    </Grid>

} 