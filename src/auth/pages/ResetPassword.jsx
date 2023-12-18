import { Alert, Button, Grid, TextField, Typography } from "@mui/material"
import { useWindowSize } from "../../hooks"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { routes } from "../../corporeddeh/routes/routes"

const styleC = {
    paddingBottom: "10px",
}



const LoginComponent = () => {
    const { windowSize } = useWindowSize()
    const [error, setError] = useState({ error: false, message: "Correo o contraseña incorrectos" })
    const [success, setSuccess] = useState(false)

    const { register,handleSubmit,formState:{errors}} = useForm({
        email: "",
        password: ""
    })


    const onSubmit = (data) => {
        //e.preventDefault()
        console.log(data)
        setError({ error: true, message: "Correo o contraseña incorrectos" })
        setSuccess(true)
    }

    if (success) return <Grid
    sx={{display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    flexGrow: 1,
    padding: `${windowSize.width<525? "10":"100"}px`,}}
    >
        <Typography variant="h4">Correo de recuperación enviado</Typography>
        <Typography variant="body1">Se ha enviado un correo para restablecer tu contraseña</Typography>
        <a href={routes.LOGIN}>Regresar al inicio de sección</a>
        
    </Grid>
        
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
        <Typography variant="h4">Restablecer contraseña</Typography>
        <TextField variant="standard"
            type="email" sx={styleC}
            label={<Typography>Correo</Typography>}
            {...register("email", { required: true })}
            error={!!errors.email}
            helperText={errors.email?.type === 'required' && "Correo requerido"}
        />
        
        <Button variant="contained" type="submit" sx={styleC}>Restablecer</Button>
        <a href={routes.LOGIN}>Regresar al inicio de sección</a>
    </form>
}

export const ResetPassword = ()=>{
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