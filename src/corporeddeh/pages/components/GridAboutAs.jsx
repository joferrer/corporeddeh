import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import logo from "../../../../public/logo-SinFondo.png";
import GridItemAboutAs from "../../../ui/AloneComponents/GridItemAboutAs";

const GridAboutAs = ({ events }) => {
  return (
    <Grid container spacing={5}>
      <GridItemAboutAs
        color={"#F1D800"}
        ds={events[0]?.descripcion}
        titulo={"¿Quienes Somos?"}
      />
      <GridItemAboutAs
        color={"#8491DF"}
        ds={events[2]?.descripcion}
        titulo={"Misión"}
      />
      <GridItemAboutAs
        color={"#E1432F"}
        ds={events[1]?.descripcion}
        titulo={"Visión"}
      />
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
          <img
            width={"100%"}
            style={{ maxWidth: "330px" }}
            src={logo}
            alt="Logo"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default GridAboutAs;
