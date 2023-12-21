import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const GridAboutAs = ({ ds1, ds2, ds3 }) => {
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
          marginTop: 2,
        }}
      >
        <Box
          sx={{
            width: "60%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "yellow",
            boxShadow: "0px 6px 6px -6px #888888", // Desplazamiento vertical positivo
            padding: "10px",
          }}
        >
          <Typography sx={{ width: "100%" }} variant="h5">
            ¿Quienes Somos?
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
          marginTop: 2,
        }}
      >
        <Typography sx={{ backgroundColor: "red", width: "70%" }}>
          Misión
        </Typography>
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
          marginTop: 2,
        }}
      >
        <Typography sx={{ backgroundColor: "red", width: "70%" }}>
          Visión
        </Typography>
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
          marginTop: 2,
        }}
      ></Grid>
    </Grid>
  );
};

export default GridAboutAs;
