import { Alert, Button, Grid, TextField, Typography } from "@mui/material"
import { useWindowSize } from "../../hooks"
import { Google } from "@mui/icons-material"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { routes } from "../../corporeddeh/routes/routes"

const styleC = {
    paddingBottom: "10px",
}

const LoginComponent = () => {
    const { windowSize } = useWindowSize()
    const [error, setError] = useState({error:false,message:"Correo o contraseña incorrectos"})    
    const { register,handleSubmit,formState:{errors}} = useForm({
        email: "",
        password: ""
    })


    const onSubmit = (data) => {
        //e.preventDefault()
        console.log(data)
        //setError({error:true,message:"Correo o contraseña incorrectos"})
        Window.location = routes.HOME_ADMIN
    }
    console.log(errors.email)
    return <form style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        flexGrow: 1,
        padding: `${windowSize.width<525? "10":"100"}px`,
    }}
        onSubmit={handleSubmit(onSubmit)}
    >   
        {error.error && <Alert severity="error">{error.message}</Alert>}        
        <Typography variant="h4">Iniciar sesión</Typography>
        <TextField variant="standard"
            type="email" sx={styleC}
            label={<Typography>Correo</Typography>}
            {...register("email", { required: true })}
            error={!!errors.email}
            helperText={errors.email?.type === 'required' && "Correo requerido"}
        />
        <TextField variant="standard"
            type="password"
            sx={styleC}
            label={<Typography>Contraseña</Typography>}
            {...register("password", { required: true })}
            error={!!errors.password}
            helperText={errors.password?.type === 'required' && "Contraseña requerida"}
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
        <a href={routes.RESET_PASWWORD}>¿Olvido su contraseña?</a>
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
        
        <img style={{flexGrow:1,maxWidth:"80vw", maxHeight:"80vh",objectFit:"cover"}} src="https://pbs.twimg.com/media/FCVslvrXoAAIzS7.jpg:large" alt="imagen"/>
        <LoginComponent/>
    </Grid>
}