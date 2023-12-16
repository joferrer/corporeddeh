/* eslint-disable react/prop-types */
import { Grid, TextField } from "@mui/material"

export const TextInput =({label, value, onInputChange,error, type ="text",multilinea = false})=>{
 
    return <Grid sx={{mt: "10px"}} >
        
        <TextField
            label={ label}
            type={type}
            value={value} 
            onChange={ onInputChange}
            variant="standard"
            error={!!error}
            helperText={!!error ? "El valor ingresado es invalido" : ""}
            multiline={multilinea}
            rows={multilinea ? 4 : 1}
            sx={{width: `${multilinea ? "320px": "100%"}`,
            "@media (max-width:600px)": {
                width: "100%",
            },
            }}
            />
            

    </Grid>
}