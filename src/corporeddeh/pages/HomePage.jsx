import { Card, Grid, Typography } from "@mui/material";
import Layout from "./layout/Layout";
import { CalendarMonth, DescriptionOutlined, EventAvailable, Place } from "@mui/icons-material";
import { routes } from "../routes/routes";

const NavegationCard = ({ children, color, link = "/" }) => {
  return <Grid item xs={6}
    sx={{
    }}>
    <a href={link} style={{ textDecoration: "none", color: "inherit" }}>
      <Card sx={{ backgroundColor: color, borderRadius: "13", padding: 1 }}>
        {children}
      </Card>

    </a>
  </Grid>

}
/**
 * 
 * @returns Navegation component
 */
const NavegationComponent = () => {
  return <Grid sx={{ padding: 1 }}>
    <Typography>Corporación Red Departamental de Defensores de DDHHH</Typography>
    <Grid container spacing={1} sx={{ marginTop: 0 }}>
      <NavegationCard link={routes.CALENDAR} color={'rgba(251, 231, 58, 0.5)'}>
        <CalendarMonth />
        <Typography>Calendario</Typography>
      </NavegationCard>
      <NavegationCard link={routes.OFFICE} color={'rgba(48, 140, 215, 0.4)'}>
        <Place />
        <Typography>Sedes</Typography>
      </NavegationCard>
      <NavegationCard link={routes.DOCUMENTS} color={'rgba(225, 67, 47, 0.5)'}>
        <DescriptionOutlined />
        <Typography>Documentos</Typography>
      </NavegationCard>
      <NavegationCard link={routes.EVENT} color={'rgba(132, 145, 223, 0.5)'}>
        <EventAvailable />
        <Typography>Eventos</Typography>
      </NavegationCard>


    </Grid>
  </Grid>
}

export const HomePage = () => {
  return <Layout>
    <Grid>
      //Img
      <Grid>

      </Grid>

      <NavegationComponent />

      //Counter
      <Grid>

      </Grid>
      //Map
      <Grid>

      </Grid>

      //from
      <Grid>

      </Grid>
      //Video
      <Grid>

      </Grid>
    </Grid>
  </Layout>;
};
