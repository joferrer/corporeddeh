import  { useState } from "react";
import Tittle from "../../ui/AloneComponents/Tittle";
import Layout from "./layout/Layout";
import Container from "./../../ui/AloneComponents/Container";
import {
  Box,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  Button,
  MobileStepper,
  IconButton,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import CloseIcon from "@mui/icons-material/Close";
import { MediaQuerys } from "../../theme/config";

const data = [
  {
    mes: "Octubre",
    images: ["../../../public/vite.svg", "../../../public/vite.svg"],
  },
  {
    mes: "Septiembre",
    images: ["../../../public/vite.svg", "../../../public/vite.svg"],
  },
];

export const CalendarPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);
  const maxSteps = currentImages.length;
  const { Mobile } = MediaQuerys;
  const handleImageClick = (images) => {
    setCurrentImages(images);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setActiveStep(0);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Layout>
      <Tittle tittle="Calendario"></Tittle>
      <Container>
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid
              item
              key={item.mes}
              style={{ marginBottom: "20px", width: "100%" }}
            >
              <Typography
                sx={{
                  fontSize: "14pt",
                  display: "flex",
                  justifyItems: "start",
                }}
              >
                {item.mes}
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                sx={{
                  "@media (max-width: 600px)": {
                    flexDirection: "column",
                  },
                }}
              >
                {item.images.map((image, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "60px",
                      height: "80px",
                      marginRight: "10px",
                      marginBottom: "10px",
                      cursor: "pointer",
                      "&:hover": {
                        transform: Mobile ? "none" : "scale(1.2)",
                        transition: "transform 0.3s ease",
                      },
                    }}
                    onClick={() => handleImageClick(item.images)}
                  >
                    <img
                      src={image}
                      alt={`Imagen ${index}`}
                      width={"100%"}
                      height={"100%"}
                    />
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Modal */}
      <Dialog open={openModal} onClose={handleCloseModal} fullScreen={Mobile}>
        <DialogContent>
          {Mobile ? (
            <Box sx={{ textAlign: "right", paddingTop: "10px" }}>
              <IconButton onClick={handleCloseModal}>
                <CloseIcon />
              </IconButton>
            </Box>
          ) : null}
          <SwipeableViews
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {currentImages.map((image, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  justifyItems: "center",
                  width: "100%",
                  height: "500px",
                }}
              >
                <img
                  src={image}
                  alt={`Imagen ${index}`}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </Box>
            ))}
          </SwipeableViews>
          {!Mobile ? (
            <MobileStepper
              variant="dots"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={() => handleStepChange(activeStep + 1)}
                  disabled={activeStep === maxSteps - 1}
                >
                  Siguiente
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={() => handleStepChange(activeStep - 1)}
                  disabled={activeStep === 0}
                >
                  Anterior
                </Button>
              }
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};
