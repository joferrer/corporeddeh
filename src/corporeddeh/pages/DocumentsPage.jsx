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

  const downloadFile = async (url, fileName) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();

      const fileUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName || "archivo_descargado";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(fileUrl);
    } catch (error) {
      console.error("Error al descargar el archivo:", error);
    }
  };

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
                  <Box
                    sx={{
                      display: "flex",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  ></Box>
                  <a
                    href={card.url}
                    style={{ textDecoration: "none", display: "flex" }}
                    target="_blank"
                  >
                    <Box
                      sx={{
                        marginRight: 2,
                      }}
                    >
                      <img src={iconPdf} style={{ maxWidth: "70px" }} />
                    </Box>

                    <Box>
                      <Typography
                        sx={{ textDecoration: "none", color: "black" }}
                        textAlign={"start"}
                      >
                        {card?.nombre}
                      </Typography>
                      <Typography
                        textAlign={"justify"}
                        fontSize={"10pt"}
                        maxWidth={"318.45px"}
                        sx={{ textDecoration: "none", color: "black" }}
                      >
                        {card?.descripcion}
                      </Typography>
                    </Box>
                  </a>
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
