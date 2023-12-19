/* eslint-disable react/prop-types */
import { Button, Grid, TextField, Typography } from "@mui/material"
import Layout from "../../corporeddeh/pages/layout/Layout"
import { SocialNetworksComponent } from "./Components"
import { useEffect, useState } from "react"

const linksInit = new Promise((resolve) => {
    return resolve({
        counter: 0,
        videosList: ["https://www.youtube.com/embed/APyyYg-rJyE?si=dWHT3wlaKLckSGfl", "https://www.youtube.com/embed/6aswzDXxj7U?si=CVJrwJwCRuKJaGHG"],
        youtube: "https://www.youtube.com/channel/UC5Z3?si=CVJrwJwCRuKJaGHG",
        facebook: "https://www.facebook.com/CorporacionRedDeHermanas-100282255426622",
        instagram: "https://www.instagram.com/corporacionreddhermanas/",
        twitter: "https://twitter.com/RedDeHermanas",
        email: "corpored@gmail.com",
    })
})

export const AdminHomePage = () => {
    const [links, setLinks] = useState({
        videosList: [],
        youtube: "",
        facebook: "",
        instagram: "",
        twitter: "",
        email: "",

    })
    const { videosList } = links

    useEffect(() => {
        Promise.all([linksInit])
            .then((result) => {
                setLinks(result[0])
            })
    }, [])
    console.log(links?.youtube)
    return <Layout>
        <Grid
            sx={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "100vw",
                padding: "10px",
                justifyContent: "space-evenly",
                width: "100%",
            }}
        >
            <Grid sx={{ flexGrow: 1, maxWidth: "315px" }}>
                <Typography variant="h4" sx={{ paddingBottom: "10px" }}>Contador de hechos victimizantes</Typography>
                <TextField sx={{ width: "100%" }} type="number" variant="standard" label="Dígite un número" />

            </Grid>
            <Grid sx={{
                display: "flex", flexDirection: "row", flexWrap: "wrap",
                flexGrow: 1,
                maxWidth: "315px",
            }}>
                <form >
                    <Typography variant="h4" sx={{ paddingBottom: "10px" }} >Contenido multimedia</Typography>
                    <TextField variant="standard" label="Link de vídeo" />
                    <Button variant="contained" type="submit">Subir</Button>
                </form>
                <Grid sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: "100%",
                }}>
                    <ul style={{
                        display: "flex", flexDirection: "column", listStyle: "none",
                        padding: 0,
                        width: "100%",
                    }}>
                        {
                            videosList?.map((video, index) => <li
                                style={{ width: "100%", overflow: "auto" }}
                                key={index}>
                                <Grid>
                                    <Typography variant="body2">{video}</Typography>

                                </Grid>
                            </li>)
                        }
                    </ul>
                </Grid>
            </Grid>
            <SocialNetworksComponent sociallinks={links} />
        </Grid>
    </Layout>
}