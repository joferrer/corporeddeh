import { Box } from "@mui/material";
import Layout from "./layout/Layout";
import { MediaQuerys } from "./../../theme/Config";
import GridAboutAs from "./components/GridAboutAs";
import Container from "../../ui/AloneComponents/Container";
import { useAboutUsData } from "../../hooks/useAboutUsData";

export const AboutusPage = () => {
  const { Mobile } = MediaQuerys;
  const data = useAboutUsData();
  const { events, error, errorMessage } = data;
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
          <GridAboutAs events={events} />
        </Box>
      </Container>
    </Layout>
  );
};
