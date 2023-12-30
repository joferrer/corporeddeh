import React, { useEffect, useState } from "react";
import LayoutAdmin from "./Layout/LayoutAdmin";
import Container from "./../../ui/AloneComponents/Container";
import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Tittle from "./../../ui/AloneComponents/Tittle";
import ButtonFile from "../../ui/AloneComponents/ButtonFile";
import iconPdf from "../.././../public/PDF_file_icon.svg.png";

const initListOfEvents = new Promise((resolve) => {
  return resolve({
    events: [
      {
        nombre: "Archivos God a nache tu sabe",
        descripcion:
          "Este articulo es God a nashe y su contenido es necesario para la liv",
      },
      {
        nombre: "Archivos 2 God a nache tu sabe",
        descripcion:
          "Este articulo es 2 God a nashe y su contenido es necesario para la liv",
      },
      {
        nombre: "Archivos 3 God a nache tu sabe",
        descripcion:
          "Este articulo es 3 God a nashe y su contenido es necesario para la liv",
      },
    ],
  });
});

export const DocumentAdminPage = () => {
  const [ListOfEvents, setListOfEvents] = useState({
    events: [],
    error: false,
  });
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    documento: null,
  });
  const { events, error } = ListOfEvents;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileSelect = (file) => {
    setFormData({
      ...formData,
      documento: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = new FormData();
    dataToSend.append("nombre", formData.nombre);
    dataToSend.append("descripcion", formData.descripcion);
    dataToSend.append("documento", formData.documento);
    console.log("Datos del formulario:", {
      nombre: formData.nombre,
      descripcion: formData.descripcion,
      documento: formData.documento,
    });
    setFormData({
      nombre: "",
      descripcion: "",
      documento: null,
    });
  };

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

        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Tittle tittle={"Documentos"} />
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data" // Necesario para enviar archivos
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <TextField
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                label="Nombre de Documento"
                variant="standard"
              />
              <TextField
                name="descripcion"
                value={formData.descripcion}
                onChange={handleInputChange}
                label="Descripción"
                variant="standard"
                multiline={true}
                rows={5}
              />
              <ButtonFile onFileSelect={handleFileSelect} />
              <Button variant="contained" type="submit">
                Confirmar
              </Button>
            </form>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Grid container spacing={2}>
              {events.map((event, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={12}
                  md={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 2,
                  }}
                >
                  <Box sx={{ marginRight: 2 }}>
                    <img
                      src={iconPdf}
                      style={{ maxWidth: "70px" }}
                      alt="PDF Icon"
                    />
                  </Box>
                  <Box>
                    <Typography textAlign={"start"}>{event?.nombre}</Typography>
                    <Typography
                      textAlign={"justify"}
                      fontSize={"10pt"}
                      maxWidth={"318.45px"}
                    >
                      {event?.descripcion}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </LayoutAdmin>
  );
};
