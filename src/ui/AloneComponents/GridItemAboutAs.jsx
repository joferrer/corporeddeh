import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const GridItemAboutAs = ({ color, ds, titulo }) => {
  return (
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
          width: "70%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: color,
          boxShadow: "0px 6px 6px -6px #888888", // Desplazamiento vertical positivo
          padding: "10px",
          "@media (max-width:1100px)": {
            width: "80%",
          },
          "@media (max-width:800px)": {
            width: "100%",
          },
          height: "100%",
          maxHeight: "35px",
        }}
      >
        <Typography sx={{ width: "100%", color: "white" }} variant="h5">
          {titulo}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "70%",
          marginTop: 3,
          textAlign: "justify",
          "@media (max-width:1100px)": {
            width: "80%",
          },
          "@media (max-width:800px)": {
            width: "100%",
          },
          height: "100%",
        }}
      >
        <Typography sx={{ width: "100%" }} variant="body">
          {ds}
        </Typography>
      </Box>
    </Grid>
  );
};

export default GridItemAboutAs;
