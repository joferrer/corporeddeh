/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import {
  CounterComponent,
  HomeMultimediaComponent,
  SocialNetworksComponent,
} from "./Components";
import { useEffect, useState } from "react";
import LayoutAdmin from "./Layout/LayoutAdmin";
import Container from "./../../ui/AloneComponents/Container";

const linksInit = new Promise((resolve) => {
  return resolve({
    counter: 0,
    videosList: [
      "https://www.youtube.com/embed/APyyYg-rJyE?si=dWHT3wlaKLckSGfl",
      "https://www.youtube.com/embed/6aswzDXxj7U?si=CVJrwJwCRuKJaGHG",
    ],
    youtube: "https://www.youtube.com/channel/UC5Z3?si=CVJrwJwCRuKJaGHG",
    facebook:
      "https://www.facebook.com/CorporacionRedDeHermanas-100282255426622",
    instagram: "https://www.instagram.com/corporacionreddhermanas/",
    twitter: "https://twitter.com/RedDeHermanas",
    email: "corpored@gmail.com",
  });
});

export const AdminHomePage = () => {
  const [links, setLinks] = useState({
    counter: 0,
    videosList: [],
    youtube: "",
    facebook: "",
    instagram: "",
    twitter: "",
    email: "",
  });
  const { videosList } = links;

  useEffect(() => {
    Promise.all([linksInit]).then((result) => {
      setLinks(result[0]);
    });
  }, []);

  return (
    <LayoutAdmin>
      <Container>
        {" "}
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
          <CounterComponent counter={links?.counter} />
          <HomeMultimediaComponent videosList={videosList} />
          <SocialNetworksComponent
            sociallinks={{
              youtube: links?.youtube,
              facebook: links?.facebook,
              instagram: links?.instagram,
              twitter: links?.twitter,
              email: links?.email,
            }}
          />
        </Grid>
      </Container>
    </LayoutAdmin>
  );
};
