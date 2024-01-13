import { Box, Grid } from "@mui/material";
import { MediaQuerys } from "../../theme/Config";
import Layout from "./layout/Layout";
import Tittle from "../../ui/AloneComponents/Tittle";
import CardAction from "./../../ui/AloneComponents/CardAction";


import imagen from "../../../public/vite.svg";
import Container from "../../ui/AloneComponents/Container";
import { startLoadEvents } from "./../../backend/Events/EventsThunks";
import { useEffect, useState } from "react";
export const EventsPage = () => {
  const { Mobile } = MediaQuerys;
  const [events, setListOfEvents] = useState([]);
  const [error, setError] = useState(false);
  const getData = async () => {
    const { status, events } = await startLoadEvents();
    if (status === "error") return setError(true);
    return events;
  };

  useEffect(() => {
    Promise.all([getData()]).then((res) => {
      setListOfEvents(res[0]);
    });
  }, []);

  return (
    <Layout>
      <Container>
        <Tittle tittle="Eventos" />
        <Grid container spacing={2}>
          {error ? (
            <>No hay documentos que cargar</>
          ) : (
            <>
              {events.map((card, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 2,
                  }}
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
            </>
          )}
        </Grid>
      </Container>
    </Layout>
  );
};
