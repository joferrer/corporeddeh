import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import logo from "../../../../public/logo-SinFondo.png";

const GridAboutAs = ({ events }) => {
  return (
    <Grid container spacing={5}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "60%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#F1D800",
            boxShadow: "0px 6px 6px -6px #888888", // Desplazamiento vertical positivo
            padding: "10px",
            maxHeight: "52px",
            "@media (max-width:1100px)": {
              width: "80%",
            },
            "@media (max-width:800px)": {
              width: "100%",
            },
          }}
        >
          <Typography sx={{ width: "100%", color: "white" }} variant="h5">
            ¿Quienes Somos?
          </Typography>
        </Box>
        <Box
          sx={{
            width: "60%",
            marginTop: 3,
            minHeight: "100px",
            textAlign: "justify",
            "@media (max-width:1100px)": {
              width: "80%",
            },
            "@media (max-width:800px)": {
              width: "100%",
            },
          }}
        >
          <Typography sx={{ width: "100%" }} variant="body">
            {events[0]?.descripcion}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "60%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#8491DF",
            boxShadow: "0px 6px 6px -6px #888888", // Desplazamiento vertical positivo
            padding: "10px",
            maxHeight: "52px",
            "@media (max-width:1100px)": {
              width: "80%",
            },
            "@media (max-width:800px)": {
              width: "100%",
            },
          }}
        >
          <Typography sx={{ width: "100%", color: "white" }} variant="h5">
            Misión
          </Typography>
        </Box>
        <Box
          sx={{
            width: "60%",
            marginTop: 3,
            minHeight: "100px",
            textAlign: "justify",
            "@media (max-width:1100px)": {
              width: "80%",
            },
            "@media (max-width:800px)": {
              width: "100%",
            },
          }}
        >
          <Typography sx={{ width: "100%" }} variant="body">
            {events[2]?.descripcion}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          maxHeight: "52px",
        }}
      >
        <Box
          sx={{
            width: "60%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#E1432F",
            boxShadow: "0px 6px 6px -6px #888888", // Desplazamiento vertical positivo
            padding: "10px",
            "@media (max-width:1100px)": {
              width: "80%",
            },
            "@media (max-width:800px)": {
              width: "100%",
            },
          }}
        >
          <Typography sx={{ width: "100%", color: "white" }} variant="h5">
            Visión
          </Typography>
        </Box>
        <Box
          sx={{
            width: "60%",
            marginTop: 3,
            minHeight: "100px",
            textAlign: "justify",
            "@media (max-width:1100px)": {
              width: "80%",
            },
            "@media (max-width:800px)": {
              width: "100%",
            },
          }}
        >
          <Typography sx={{ width: "100%" }} variant="body">
            {events[1]?.descripcion}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            width: "100%",
          }}
        >
          <img width={"100%"} style={{ maxWidth: "330px" }} src={logo} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default GridAboutAs;
