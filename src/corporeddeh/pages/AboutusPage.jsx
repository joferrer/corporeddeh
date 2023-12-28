import { Box } from "@mui/material";
import Layout from "./layout/Layout";
import { MediaQuerys } from "./../../theme/Config";
import GridAboutAs from "./components/GridAboutAs";
import Container from "../../ui/AloneComponents/Container";

const m =
  "En el día más brillante, en la noche más oscura, ningún mal podrá escapar de mi vista, que aquellos que veneran el poder del mal, teman a mi poder... ¡La luz de la linterna verde!";

export const AboutusPage = () => {
  const { Mobile } = MediaQuerys;
  return (
    <Layout>
      <Container>
        <Box
          sx={{
            "@media (max-width:900px)": {
              marginBottom: 22,
              marginTop: 0,
            },
          }}
        >
          <GridAboutAs ds1={m} ds2={m} ds3={m} />
        </Box>
      </Container>
    </Layout>
  );
};
