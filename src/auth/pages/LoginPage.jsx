import { Button, Grid, TextField, Typography } from "@mui/material"
import { useWindowSize } from "../../hooks"
import { Google } from "@mui/icons-material"

const LoginComponent = () => {
    const { windowSize } = useWindowSize()
    const styleC = {
        paddingBottom: "10px",
    }
    return <form style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        flexGrow: 1,
        padding: `${windowSize.width<525? "10":"100"}px`,
    }}> 
        <Typography variant="h4">Iniciar sesión</Typography>
        <TextField variant="standard" type="text" sx={styleC}
            label={ <Typography>Usuario</Typography>} />
        <TextField variant="standard" type="password" sx={styleC}
            label={ <Typography>Contraseña</Typography>}
        />
        <Button variant="contained" type="submit" sx={styleC}>Ingresar</Button>
        <Button
              variant="outlined"
              fullWidth
              sx={{ mt: 2, pl: 2, pr: 2 }}
            >
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
        </Button>
        <a href="">¿Olvido su contraseña?</a>
    </form>
}

export const LoginPage = ()=>{
    return <Grid sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        height: "100vh",
        padding:"10px"
    }}>
        
        <img style={{flexGrow:1,maxWidth:"100vw", maxHeight:"80vh",objectFit:"cover"}} src="https://pbs.twimg.com/media/FCVslvrXoAAIzS7.jpg:large" alt="imagen"/>
        <LoginComponent/>
    </Grid>
}