import { Box, Grid, Paper, Typography } from "@mui/material";
import Layout from "./layout/Layout";
import Tittle from "./../../ui/AloneComponents/Tittle";
import { MediaQuerys } from "./../../theme/Config";
import Container from "../../ui/AloneComponents/Container";

//TODO : ACOMODAR LAS DIRECCIONES Y LOS MAPS

export const OfficesPage = () => {
  const { Mobile } = MediaQuerys;

  return (
    <Layout>
      <Container
      >
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
            <Box sx={{ width: "100%" }}>
              <Typography
                display="flex"
                width={"100%"}
                variant="h4"
                justifyContent={"start"}
                sx={{ marginBottom: 2 }}
              >
                Sede Principal
              </Typography>
              <Paper
                sx={{
                  flexGrow: 1,
                  minWidth: "320px",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.00570176863135!2d-72.50370495430481!3d7.88552384103064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e66459dcf7092b3%3A0x91d22b46e0eefc76!2sContralor%C3%ADa%20del%20Departamento%20de%20Norte%20de%20Santander!5e0!3m2!1ses-419!2sco!4v1700019636621!5m2!1ses-419!2sco"
                  width="100%"
                  height="450"
                  style={{ border: 0, pointerEvents: "none" }}
                  allowFullScreen
                ></iframe>
              </Paper>
              <Typography
                display="flex"
                width={"100%"}
                variant="body"
                justifyContent={"start"}
                sx={{ marginTop: 1, fontWeight: 300 }}
              >
                Direccion ahi too guapa
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
            <Box sx={{ width: "100%" }}>
              <Typography
                display="flex"
                width={"100%"}
                variant="h4"
                justifyContent={"start"}
                sx={{ marginBottom: 2 }}
              >
                Sede Principal
              </Typography>
              <Paper
                sx={{
                  flexGrow: 1,
                  minWidth: "320px",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.00570176863135!2d-72.50370495430481!3d7.88552384103064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e66459dcf7092b3%3A0x91d22b46e0eefc76!2sContralor%C3%ADa%20del%20Departamento%20de%20Norte%20de%20Santander!5e0!3m2!1ses-419!2sco!4v1700019636621!5m2!1ses-419!2sco"
                  width="100%"
                  height="450"
                  style={{ border: 0, pointerEvents: "none" }}
                  allowFullScreen
                ></iframe>
              </Paper>
              <Typography
                display="flex"
                width={"100%"}
                variant="body"
                justifyContent={"start"}
                sx={{ marginTop: 1, fontWeight: 300 }}
              >
                Direccion ahi too guapa
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
