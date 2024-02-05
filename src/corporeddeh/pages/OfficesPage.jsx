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
      <Container>
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
                Capítulo Cúcuta
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
                  loading="lazy"
                />
              </Paper>
              <Typography
                display="flex"
                width={"100%"}
                variant="body"
                justifyContent={"start"}
                sx={{ marginTop: 1, fontWeight: 300 }}
              >
                Av 5 # 11-20 Of. 801 Edificio Contraloria Departamental Barrio
                Centro Cúcuta Norte de Santander
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
                Capítulo Ragonvalia
              </Typography>
              <Paper
                sx={{
                  flexGrow: 1,
                  minWidth: "320px",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3954.9764466634306!2d-72.4768148!3d7.5775424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e662520cc4c6c8f%3A0x6a896d09f0774376!2sAv.%203%20%23357%2C%20Ragonvalia%2C%20Norte%20de%20Santander!5e0!3m2!1ses-419!2sco!4v1707139093290!5m2!1ses-419!2sco"
                  width="100%"
                  height="450"
                  style={{ border: 0, pointerEvents: "none" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </Paper>
              <Typography
                display="flex"
                width={"100%"}
                variant="body"
                justifyContent={"start"}
                sx={{ marginTop: 1, fontWeight: 300 }}
              >
                AV3 N° 3-57, Barrio la Humildad, Ragonvalia, Colombia
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
              marginTop: 2,
            }}
          >
            <Box sx={{ width: "100%", maxWidth:"677.51px" }}>
              <Typography
                display="flex"
                width={"100%"}
                variant="h4"
                justifyContent={"start"}
                sx={{ marginBottom: 2 }}
              >
                Capítulo Ocaña
              </Typography>
              <Paper
                sx={{
                  flexGrow: 1,
                  minWidth: "320px",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d493.5834845887455!2d-73.35309602591882!3d8.236113254573258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e677beb7f02f027%3A0x10b29eab4c9aab7!2sCentro%20Comercial%20City%20Gold!5e0!3m2!1ses-419!2sco!4v1707139265688!5m2!1ses-419!2sco"
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
                Edificio centro Comercial Citygold, oficina 220, piso2. Barrio
                LA LUZ Centro de Ocaña
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
