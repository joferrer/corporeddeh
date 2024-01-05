import React, { useEffect, useState } from "react";
import LayoutAdmin from "./Layout/LayoutAdmin";
import Container from "./../../ui/AloneComponents/Container";
import {
  Alert,
  Box,
  Button,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Tittle from "./../../ui/AloneComponents/Tittle";
import ButtonFile from "../../ui/AloneComponents/ButtonFile";
import iconPdf from "../.././../public/PDF_file_icon.svg.png";
import { saveDocs } from "../../backend/firebase/StorageFirebaseProvider";
import CloseIcon from "@mui/icons-material/Close";
import { useDocumentData } from "./../../hooks/useDocumentData";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export const DocumentAdminPage = () => {
  const data = useDocumentData();
  const {
    events,
    error,
    errorMessage,
    setData: setListOfEvents,
    saveEventDocument,
  } = data;
  const [refreshButtonFile, setRefreshButtonFile] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    documento: null,
  });

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
    console.log("1" + refreshButtonFile);
    saveEventDocument(
      formData.documento,
      formData.nombre,
      formData.descripcion
    ).then((status) => {
      if (status.status === "success") {
        setFormData({
          nombre: "",
          descripcion: "",
          documento: null,
        });
        setRefreshButtonFile(true);
      }
    });

    //location.reload();+
    setRefreshButtonFile(false);
  };
  const handleCloseSnackbar = () => {
    setRefreshButtonFile(false);
  };
  return (
    <LayoutAdmin>
      <Container>
        <Snackbar
          open={error}
          autoHideDuration={6000}
          onClose={() => setListOfEvents({ events, error: false })}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <Alert severity="error">{errorMessage}</Alert>
        </Snackbar>
        <Snackbar
          open={refreshButtonFile}
          autoHideDuration={2000}
          onClose={handleCloseSnackbar} // Manejar el cierre del Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <Alert sx={{}} severity="success">
            Documento subido correctamente!
          </Alert>
        </Snackbar>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Tittle tittle={"Documentos"} />
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
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
              <ButtonFile
                onFileSelect={handleFileSelect}
                refreshButtonFile={refreshButtonFile}
              />
              <Button variant="contained" type="submit">
                Confirmar
              </Button>
            </form>
          </Grid>
          <Grid item sm={12} md={6} xs={12}>
            <Grid container spacing={2}>
              {events.length != 0 ? (
                <>
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
                        position: "relative",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Box sx={{ marginRight: 2 }}>
                          <img
                            src={iconPdf}
                            style={{ maxWidth: "70px" }}
                            alt="PDF Icon"
                          />
                        </Box>
                        <Box sx={{ width: "50%" }}>
                          <Typography textAlign={"start"}>
                            {event?.nombre}
                          </Typography>
                          <Typography
                            textAlign={"justify"}
                            fontSize={"10pt"}
                            maxWidth={"318.45px"}
                          >
                            {event?.descripcion}
                          </Typography>
                        </Box>
                        <IconButton
                          sx={{ height: "30px", width: "30px" }}
                          //onClick={() => handleRemoveEvent(index)}
                        >
                          <CloseIcon
                            sx={{ width: "30px", height: "30px", color: "red" }}
                          />
                        </IconButton>
                      </Box>
                    </Grid>
                  ))}
                </>
              ) : (
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12}>
                    <InfoOutlinedIcon
                      sx={{
                        width: "200px",
                        height: "200px",
                        color: "red",
                      }}
                    />
                    <Typography sx={{ fontWeight: "light", fontSize: "15pt" }}>
                      No hay documentos que mostrar
                    </Typography>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </LayoutAdmin>
  );
};
