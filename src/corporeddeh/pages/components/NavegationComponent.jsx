/* eslint-disable react/prop-types */
import { CalendarMonth, DescriptionOutlined, EventAvailable, Place } from "@mui/icons-material"
import { Card, Grid, Typography } from "@mui/material"

import { routes } from "../../routes/routes";


const NavegationCard = ({ children, color, link = "/" , windowSize}) => {

    return <Grid item sx={{maxWidth:"278px"}} xs={windowSize.width>425? 3:6}>
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
  export const NavegationComponent = ({windowSize}) => {
    //TODO Falta el fondo de la img
    const iconsStyles = {width:"30%",height:"30%"}
    return <Grid sx={{
      padding: 1,
      
    }}>
      <Grid container spacing={3} sx={{ marginTop: 0 ,justifyContent:"center",padding:"10px"}}>
        <NavegationCard windowSize={windowSize} link={routes.CALENDAR} color={'rgba(251, 231, 58, 0.5)'}>
          <CalendarMonth sx={iconsStyles}/>
          <Typography>Calendario</Typography>
        </NavegationCard>
        <NavegationCard windowSize={windowSize} link={routes.OFFICE} color={'rgba(48, 140, 215, 0.4)'}>
          <Place sx={iconsStyles}/>
          <Typography>Sedes</Typography>
        </NavegationCard>
        <NavegationCard windowSize={windowSize} link={routes.DOCUMENTS} color={'rgba(225, 67, 47, 0.5)'}>
          <DescriptionOutlined  sx={iconsStyles}/>
          <Typography>Documentos</Typography>
        </NavegationCard>
        <NavegationCard windowSize={windowSize} link={routes.EVENT} color={'rgba(132, 145, 223, 0.5)'}>
          <EventAvailable  sx={iconsStyles}/>
          <Typography>Eventos</Typography>
        </NavegationCard>
  
  
      </Grid>
    </Grid>
  }