import React, { useEffect, useState } from "react";
import LayoutAdmin from "./Layout/LayoutAdmin";
import Container from "./../../ui/AloneComponents/Container";
import { Alert, Box, Snackbar } from "@mui/material";
import GridAboutAsEdit from "./../../corporeddeh/pages/components/GridAboutAsEdit";

const initListOfEvents = new Promise((resolve) => {
  return resolve({
    events: [
      {
        id: "1",
        titulo: "Quienes Somos",
        descripcion: "hola1",
      },
      {
        id: "2",
        titulo: "Mision",
        descripcion: "hola2",
      },
      {
        id: "3",
        titulo: "Vision",
        descripcion: "hola3",
      },
    ],
  });
});

export const AboutUsAdmin = () => {
  const [ListOfEvents, setListOfEvents] = useState({
    events: [],
    error: false,
  });
  const { events, error } = ListOfEvents;

  useEffect(() => {
    Promise.all([initListOfEvents]).then((res) =>
      setListOfEvents({ events: res[0].events })
    );
  }, []);

  return (
    <LayoutAdmin>
      <Container>
        <Snackbar
          open={error}
          autoHideDuration={6000}
          onClose={() => setListOfEvents({ events, error: false })}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <Alert severity="error">Error al subir archivo</Alert>
        </Snackbar>
        <Box
          sx={{
            "@media (max-width:900px)": {
              marginBottom: 22,
              marginTop: 0,
            },
          }}
        >
          <GridAboutAsEdit events={events} />
        </Box>
      </Container>
    </LayoutAdmin>
  );
};
