/* eslint-disable react/prop-types */
import { Box, Button, Card, Grid, Paper, Typography } from "@mui/material";
import Layout from "./layout/Layout";
import { CalendarMonth, DescriptionOutlined, EventAvailable, Place } from "@mui/icons-material";
import { routes } from "../routes/routes";
import Carousel from "react-material-ui-carousel";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "../../ui/FormComponents/TextInput";
import { useEffect, useState } from "react";

const NavegationCard = ({ children, color, link = "/" , windowSize}) => {

  return <Grid item xs={windowSize.width>425? 3:6}>
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
const NavegationComponent = ({windowSize}) => {
  //TODO Falta el fondo de la img
  return <Grid sx={{
    padding: 1,
  }}>
    <Typography>Corporación Red Departamental de Defensores de DDHHH</Typography>
    <Grid container spacing={1} sx={{ marginTop: 0 ,}}>
      <NavegationCard windowSize={windowSize} link={routes.CALENDAR} color={'rgba(251, 231, 58, 0.5)'}>
        <CalendarMonth />
        <Typography>Calendario</Typography>
      </NavegationCard>
      <NavegationCard windowSize={windowSize} link={routes.OFFICE} color={'rgba(48, 140, 215, 0.4)'}>
        <Place />
        <Typography>Sedes</Typography>
      </NavegationCard>
      <NavegationCard windowSize={windowSize} link={routes.DOCUMENTS} color={'rgba(225, 67, 47, 0.5)'}>
        <DescriptionOutlined />
        <Typography>Documentos</Typography>
      </NavegationCard>
      <NavegationCard windowSize={windowSize} link={routes.EVENT} color={'rgba(132, 145, 223, 0.5)'}>
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

function Example()
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
        <Carousel sx={{width:"100%",}}>
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
          height:"80vh"
          
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
        style={{textAlign:"left", minHeight:"180px", justifyContent:"flex-end",}}>
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

const CounterComponent = ({counter = 1000, mes = "Enero",windowSize})=>{
  return <Grid sx={{
    backgroundColor: "#E73E2E",
    width: `${windowSize.width}px`,
    maxWidth: "1200px",

  }}>
    <Typography variant="h6">Hechos victimizantes</Typography>
        <Typography variant="h3">{counter}</Typography>
        <Typography variant="h5">{mes}</Typography>
  </Grid>
}

const SendMessageForm = ()=>{

  const {control, handleSubmit} = useForm()
  const onSubmit = ()=>{
    console.log("Enviando...")
  }

  return <form onSubmit={handleSubmit(onSubmit)} style={{flexGrow:1,minWidth:"320px"}}> 
    <Grid container sx={{justifyContent:"center",flexDirection:"column", padding:"10px"}}> 
      
        <Typography variant="h5" sx={{justifySelf:"center"}}>Escribenos</Typography>
      <Controller 
        name="username"
        control={control}
        rules={{required: true}}
        defaultValue={""}
        render={({field, formState})=> <TextInput
          value={field.value}
          label={"Nombre"}
          onInputChange={field.onChange}
          error={formState.errors.username}
        />

      }
      />
      <Controller 
        name="useremail"
        control={control}
        rules={{required:true}}
        defaultValue={""}
        render={({field,formState})=><TextInput 
          type="email"
          value={field.value}
          label={"Correo"}
          onInputChange={field.onChange}
          error={formState.errors.useremail}
        />}
      />

<Controller 
        name="emailsubject"
        control={control}
        rules={{required: true}}
        defaultValue={""}
        render={({field, formState})=> <TextInput
          value={field.value}
          label={"Asunto"}
          onInputChange={field.onChange}
          error={formState.errors.emailsubject}
        />

      }
      />

<Controller 
        name="userrequire"
        control={control}
        rules={{required: true}}
        defaultValue={""}
        render={({field, formState})=> <TextInput
          value={field.value}
          label={"Consulta"}
          onInputChange={field.onChange}
          error={formState.errors.userrequire}
          multilinea={true}
        />

      }
      />
      <Button  variant="contained" sx={{mt:"50px" ,float:"right"}} color="secondary" type="submit">Enviar</Button>
      
  </Grid>
  </form>
  
  
}

export const HomePage = () => {

  const [windowSize,setwindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => { 
      const { innerWidth,innerHeight } = window
      setwindowSize({
        width: innerWidth,
        height: innerHeight
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return ()=>window.removeEventListener('resize',handleResize)
  },[])

  return <Layout>
    <Grid sx={{
      maxWidth: 1240,
      display: "flex",
      flexDirection: "column",
      justifyContent:"center"
    }}>
      
      <PrincipalImgComponent />

      <NavegationComponent windowSize={ windowSize} />

      <CounterComponent windowSize={windowSize } />
      
      <Grid sx={{display:"flex",flexWrap:"wrap",justifyContent:"center", width:"100%"}}>
        <Paper sx={{flexGrow:1,minWidth:"320px"}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.00570176863135!2d-72.50370495430481!3d7.88552384103064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e66459dcf7092b3%3A0x91d22b46e0eefc76!2sContralor%C3%ADa%20del%20Departamento%20de%20Norte%20de%20Santander!5e0!3m2!1ses-419!2sco!4v1700019636621!5m2!1ses-419!2sco" width="100%" height="450" style={{border:0,pointerEvents:"none"}} allowFullScreen ></iframe>
        </Paper>
        <SendMessageForm />
      </Grid>

      

      <Grid>

      </Grid>
    </Grid>
  </Layout>;
};
