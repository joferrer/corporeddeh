import { Box, Grid, Typography } from "@mui/material";
import Layout from "./layout/Layout";
import Tittle from "../../ui/AloneComponents/Tittle";
import { MediaQuerys } from "../../theme/Config";
import iconPdf from "../.././../public/PDF_file_icon.svg.png";
const array = [
  {
    id: "1",
    titulo: "Titulo",
    fecha: "20/11/2023",
    descripcion: "Una descripcion corta, y mas cositas para ver como queda",
    url: "url",
  },
  {
    id: "2",
    titulo: "Titulo",
    fecha: "20/11/2023",
    descripcion: "Una descripcion corta, y mas cositas para ver como queda",
    url: "url",
  },
  {
    id: "3",
    titulo: "Titulo",
    fecha: "20/11/2023",
    descripcion: "Una descripcion corta, y mas cositas para ver como queda",
    url: "url",
  },
];

export const DocumentsPage = () => {
  const { Mobile } = MediaQuerys;
  return (
    <Layout>
      <Box
        sx={{
          maxWidth: 1440,
          padding: 2,
          marginRight: 2,
          marginLeft: Mobile ? 0 : 2,
          width: "100%",
        }}
      >
        <Tittle tittle="Documentos" />
        <Grid container spacing={2}>
          {array.map((card, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
            >
              <Box sx={{ marginRight: 2 }}>
                <img src={iconPdf} style={{ maxWidth: "70px" }} />
              </Box>
              <Box>
                <Typography textAlign={"start"}>
                  {card.titulo} + {card.fecha}
                </Typography>
                <Typography textAlign={"justify"} fontSize={"10pt"} maxWidth={"318.45px"}>
                  {card.descripcion}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};
