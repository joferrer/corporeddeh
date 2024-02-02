import React, { useEffect, useState } from "react";
import Layout from "./layout/Layout";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { MediaQuerys } from "./../../theme/Config";
import Carousel from "react-material-ui-carousel";
import loguito from "../../../public/vite.svg";
import {
  ArrowBack,
  ArrowForward,
  Close as CloseIcon,
} from "@mui/icons-material";
import Container from "../../ui/AloneComponents/Container";
import { startGetEventById } from "./../../backend/Events/EventsThunks";

export const EeventoPage = () => {
  const { Mobile } = MediaQuerys;
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const listImagen = [loguito, "../../../public/Train-PNG-HD-Image.png"];
  const listVideo = [
    "https://www.youtube.com/embed/APyyYg-rJyE?si=dWHT3wlaKLckSGfl",
    "https://www.youtube.com/embed/APyyYg-rJyE?si=dWHT3wlaKLckSGfl",
  ];
  const [events, setListOfEvents] = useState([]);
  const [error, setError] = useState(false);
  const getData = async () => {
    const { status, event } = await startGetEventById(id);
    if (status === "error") return setError(true);
    return event;
  };

  useEffect(() => {
    Promise.all([getData()]).then((res) => {
      setListOfEvents(res[0]);
    });
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const urls = events?.imagen;
  console.log(events);
  const firebaseUrls = [];
  const otherUrls = [];

  urls?.forEach((url) => {
    if (url.includes("firebasestorage")) {
      firebaseUrls.push(url);
    } else {
      otherUrls.push(url);
    }
  });

  const handleOpenModal = (index) => {
    setSelectedImageIndex(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImageIndex(null);
  };

  return (
    <Layout>
      <Container>
        <Box sx={{ marginBottom: 4 }}>
          <Typography
            display="flex"
            justifyContent="start"
            sx={{ textAlign: "center" }}
            variant="h4"
          >
            {events?.titulo}
          </Typography>
          <Typography
            display="flex"
            justifyContent="start"
            sx={{ textAlign: "center" }}
          >
            {events?.fecha}
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "left", marginTop: 2 }}
          >
            <Typography variant="body" sx={{ textAlign: "left" }}>
              {events?.descripcion}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "left", marginTop: 2 }}
          >
            <Carousel
              interval={4000}
              sx={{
                maxWidth: "660px",
                width: "100%",
                maxHeight: "550px",
                height: "100%",
                zIndex: 0,
              }}
            >
              {firebaseUrls.map((url, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    height: "350px",
                    marginRight: "10px",
                    marginBottom: "10px",
                    cursor: "pointer",
                    "&:hover": {
                      transform: Mobile ? "none" : "scale(1.02)",
                      transition: "transform 0.3s ease",
                    },
                    "@media (max-width:480px)": {
                      height: "250px",
                    },
                  }}
                  onClick={() => handleOpenModal(index)}
                >
                  <img
                    src={url}
                    key={index}
                    alt={`Image ${index}`}
                    style={{
                      maxWidth: "550px",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              ))}
            </Carousel>
          </Grid>
        </Grid>
        {otherUrls.length > 0 ? (
          <>
            <Typography
              variant="h5"
              display="flex"
              justifyContent="start"
              sx={{ marginTop: 3 }}
            >
              Videos
            </Typography>
            <Grid container spacing={2}>
              {otherUrls.map((url, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 2,
                  }}
                >
                  <iframe
                    key={index}
                    src={url}
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <></>
        )}
      </Container>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="image-modal"
        aria-describedby="image-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1300,
            maxWidth: "90vw",
            maxHeight: 900,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              color: "red",
            }}
            onClick={handleCloseModal}
          >
            <CloseIcon />
          </IconButton>

          {selectedImageIndex !== null && (
            <img
              src={firebaseUrls[selectedImageIndex]}
              alt={`Selected Image ${selectedImageIndex}`}
              style={{ width: "100%", maxHeight: 800 }}
            />
          )}

          <IconButton
            onClick={() =>
              setSelectedImageIndex((prev) =>
                prev > 0 ? prev - 1 : firebaseUrls.length - 1
              )
            }
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              color: "primary.main",
            }}
          >
            <ArrowBack />
          </IconButton>

          <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
            {`${selectedImageIndex + 1} / ${firebaseUrls.length}`}
          </Typography>
          <IconButton
            onClick={() =>
              setSelectedImageIndex((prev) =>
                prev < firebaseUrls.length - 1 ? prev + 1 : 0
              )
            }
            sx={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              color: "primary.main",
            }}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Modal>
    </Layout>
  );
};
