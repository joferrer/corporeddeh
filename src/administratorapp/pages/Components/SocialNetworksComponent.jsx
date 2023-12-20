/* eslint-disable react/prop-types */
import { useMemo, useState } from "react"
import { Button, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form"



export const SocialNetworksComponent = ({ sociallinks }) => {
    const { register, handleSubmit } = useForm()
    const [links, setLinks] = useState(sociallinks)
    const [editable, setEditable] = useState(false)

    useMemo(() => {
        setLinks(sociallinks)
    }, [sociallinks])

    const onSubmit = () => {
        console.log("SUBMIT", links)
        location.reload()
    }
    return <form onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", flexGrow: 1, maxWidth: "315px" }}>
        <Typography variant="h4" sx={{ paddingBottom: "10px" }} >Redes sociales</Typography>
        <TextField variant="standard"
            sx={{ paddingBottom: "10px" }}
            {...register("youtube", { required: true })}
            label="Youtube"
            value={links?.youtube}
            onChange={(e) => setLinks({ ...links, youtube: e.target.value })}
            disabled={!editable}
        />
        <TextField
            variant="standard" sx={{ paddingBottom: "10px" }}
            {...register("facebook", { required: true })}
            label="Facebook"
            value={links?.facebook}
            onChange={(e) => setLinks({ ...links, facebook: e.target.value })}
            disabled={!editable}

        />
        <TextField
            variant="standard"
            sx={{ paddingBottom: "10px" }}
            {...register("instagram", { required: true })}
            label="Instagram"
            value={links?.instagram}
            onChange={(e) => setLinks({ ...links, instagram: e.target.value })}
            disabled={!editable}
        />
        <TextField
            variant="standard"
            sx={{ paddingBottom: "10px" }}
            {...register("twitter", { required: true })}
            label="Twitter"
            value={links?.twitter}
            onChange={(e) => setLinks({ ...links, twitter: e.target.value })}
            disabled={!editable}
        />
        <TextField
            variant="standard"
            sx={{ paddingBottom: "10px" }}
            {...register("email", { required: true })}
            type="email"
            label="Correo"
            value={links?.email}
            onChange={(e) => setLinks({ ...links, email: e.target.value })}
            disabled={!editable}
        />
        <Button variant="contained"
            type="submit"
            sx={{ marginBottom: "10px" }}
            disabled={!editable}
            onClick={onSubmit}
        >
            Guardar
        </Button>
        <Button variant="contained"
            onClick={() => setEditable(!editable)}
            color={editable ? "error" : "primary"}
        >
            {!editable ? "Editar" : "Cancelar"}
        </Button>
    </form>
}