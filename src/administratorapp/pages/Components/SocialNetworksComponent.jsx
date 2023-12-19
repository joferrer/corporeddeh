/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Button, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form"



export const SocialNetworksComponent = ({ sociallinks }) => {
    const { register, handleSubmit } = useForm()
    const [links, setLinks] = useState(sociallinks)

    useEffect(() => {
        console.log("useEffect")
        setLinks(sociallinks)
    }, [sociallinks])

    return <form
        style={{ display: "flex", flexDirection: "column", flexGrow: 1, maxWidth: "315px" }}>
        <Typography variant="h4" sx={{ paddingBottom: "10px" }} >Redes sociales</Typography>
        <TextField variant="standard"
            sx={{ paddingBottom: "10px" }}
            {...register("youtube", { required: true })}
            label="Youtube"
            value={links.youtube}
            onChange={(e) => setLinks({ ...links, youtube: e.target.value })}
        />
        <TextField
            variant="standard" sx={{ paddingBottom: "10px" }}
            {...register("facebook", { required: true })}
            label="Facebook"
            value={links.facebook}
            onChange={(e) => setLinks({ ...links, facebook: e.target.value })}

        />
        <TextField
            variant="standard"
            sx={{ paddingBottom: "10px" }}
            {...register("instagram", { required: true })}
            label="Instagram"
            value={links.instagram}
            onChange={(e) => setLinks({ ...links, instagram: e.target.value })}
        />
        <TextField
            variant="standard"
            sx={{ paddingBottom: "10px" }}
            {...register("twitter", { required: true })}
            label="Twitter"
            value={links.twitter}
            onChange={(e) => setLinks({ ...links, twitter: e.target.value })}
        />
        <TextField
            variant="standard"
            sx={{ paddingBottom: "10px" }}
            {...register("email", { required: true })}
            type="email"
            label="Correo"
            value={links.email}
            onChange={(e) => setLinks({ ...links, email: e.target.value })}
        />
        <Button variant="contained" type="submit">Guardar</Button>
    </form>
}