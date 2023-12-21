import { Box, Grid } from "@mui/material";
import { MediaQuerys } from "../../theme/Config";
import Layout from "./layout/Layout";
import Tittle from "../../ui/AloneComponents/Tittle";
import CardAction from "./../../ui/AloneComponents/CardAction";

const array = [
  {
    id: "1",
    titulo: "Titulo",
    descripcion: "Una descripcion Larga...........",
    fecha: "20/20/2023",
    imagen: [imagen, imagen, imagen, imagen, imagen],
  },
  {
    id: "2",
    titulo: "Titulo",
    descripcion: "Una descripcion Larga...........",
    fecha: "20/20/2023",
    imagen: [imagen, imagen, imagen, imagen, imagen],
  },
  {
    id: "3",
    titulo: "Titulo",
    descripcion: "Una descripcion Larga...........",
    fecha: "20/20/2023",
    imagen: [imagen, imagen, imagen, imagen, imagen],
  },
  {
    id: "3",
    titulo: "Titulo",
    descripcion: "Una descripcion Larga...........",
    fecha: "20/20/2023",
    imagen: [imagen, imagen, imagen, imagen, imagen],
  },
  {
    id: "4",
    titulo: "Titulo",
    descripcion: "Una descripcion Larga...........",
    fecha: "20/20/2023",
    imagen: [imagen, imagen, imagen, imagen, imagen],
  },
  {
    id: "5",
    titulo: "Titulo",
    descripcion: "Una descripcion Larga...........",
    fecha: "20/20/2023",
    imagen: [imagen, imagen, imagen, imagen, imagen],
  },
];

import imagen from "../../../public/vite.svg";
export const EventsPage = () => {
  const { Mobile } = MediaQuerys;
  return (
    <Layout>
      <Box
        sx={{
          maxWidth: 1440,
          padding: 2,
          marginRight: 2,
          marginLeft: Mobile ? 0 : 2,
          width: "100%",
        }}
      >
        <Tittle tittle="Eventos" />
        <Grid container spacing={2}>
          {array.map((card, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
            >
              <CardAction
                key={index}
                titulo={card.titulo}
                descripcion={card.descripcion}
                fecha={card.fecha}
                imagen={card.imagen[0]}
                id={card.id}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};
