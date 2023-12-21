import { Box } from "@mui/material";
import Layout from "./layout/Layout";
import { MediaQuerys } from "./../../theme/Config";
import GridAboutAs from "./components/GridAboutAs";

export const AboutusPage = () => {
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
        <GridAboutAs />
      </Box>
    </Layout>
  );
};
