import { Box, Button, Card, Grid, Link, Paper, Typography } from "@mui/material";
import Layout from "./layout/Layout";
import { CalendarMonth, DescriptionOutlined, EventAvailable, Place } from "@mui/icons-material";
import { routes } from "../routes/routes";
import Carousel from "react-material-ui-carousel";


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
  //TODO Falta el fondo de la img
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


const post = {
  image: "https://pbs.twimg.com/media/FCVslvrXoAAIzS7.jpg:large",
  imageText:"Friendly noodels",
  title: "Noodels",
  description: "A cute cat",
  linkText:"/noodels"
}
const PrincipalImgComponent = ()=>{
  return <Grid>
    <Example />
  </Grid>
}

function Example(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Gira territorial de paz, escenarios de diálogo con organizaciones sociales, liderazgos comunales, campesinos, rurales y procesos de ciudad.",
            img: "https://pbs.twimg.com/media/FCVslvrXoAAIzS7.jpg:large"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img:"https://pbs.twimg.com/media/FCVslvrXoAAIzS7.jpg:large"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${props.item.img})`,
          
        }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none',  }} src={props.item.img} alt={post.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container >
        <Grid item md={6}
        style={{textAlign:"left", minHeight:"180px", justifyContent:"flex-end"}}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3,},
              pr: { md: 0 },
            }}
          >
   
            <Typography variant="body1" color="inherit" >
              {props.item.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
    )
}

const CounterComponent = ({counter = 1000, mes = "Enero"})=>{
  return <Grid sx={{backgroundColor:"#E73E2E"}}>
    <Typography variant="h6">Hechos victimizantes</Typography>
        <Typography variant="h3">{counter}</Typography>
        <Typography variant="h5">{mes}</Typography>
  </Grid>
}

export const HomePage = () => {
  return <Layout>
    <Grid>
      
      <PrincipalImgComponent />

      <NavegationComponent />

      <CounterComponent />
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
