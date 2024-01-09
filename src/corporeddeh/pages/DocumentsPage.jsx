import { Box, Grid, Typography } from "@mui/material";
import Layout from "./layout/Layout";
import Tittle from "../../ui/AloneComponents/Tittle";
import { MediaQuerys } from "../../theme/Config";
import iconPdf from "../.././../public/PDF_file_icon.svg.png";
import Container from "../../ui/AloneComponents/Container";
import { useDocumentData } from "./../../hooks/useDocumentData";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export const DocumentsPage = () => {
  const { Mobile } = MediaQuerys;
  const data = useDocumentData();
  const { events, error, errorMessage } = data;
  return (
    <Layout>
      <Container>
        <Tittle tittle="Documentos" />
        <Grid container spacing={2}>
          {events.length != 0 ? (
            <>
              {events.map((card, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 2,
                  }}
                >
                  <Box sx={{ marginRight: 2 }}>
                    <img src={iconPdf} style={{ maxWidth: "70px" }} />
                  </Box>
                  <Box>
                    <Typography textAlign={"start"}>{card?.nombre}</Typography>
                    <Typography
                      textAlign={"justify"}
                      fontSize={"10pt"}
                      maxWidth={"318.45px"}
                    >
                      {card?.descripcion}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </>
          ) : (
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
          )}
        </Grid>
      </Container>
    </Layout>
  );
};
