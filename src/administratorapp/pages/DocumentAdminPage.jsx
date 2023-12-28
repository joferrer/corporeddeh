import React from "react";
import LayoutAdmin from "./Layout/LayoutAdmin";
import Container from "./../../ui/AloneComponents/Container";
import { Grid } from "@mui/material";

export const DocumentAdminPage = () => {
  return (
    <LayoutAdmin>
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}></Grid>
          <Grid item sm={6} xs={12}></Grid>
        </Grid>
      </Container>
    </LayoutAdmin>
  );
};
