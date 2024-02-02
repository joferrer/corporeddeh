import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { routes } from "../../routes/routes";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import loguito from "../../../../public/logo-SinFondo.png";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventIcon from "@mui/icons-material/Event";
import DescriptionIcon from "@mui/icons-material/Description";
import PlaceIcon from "@mui/icons-material/Place";
import InfoIcon from "@mui/icons-material/Info";
import { ButtonNavBar } from "./../../../ui/AloneComponents/ButtonNavBar";
import { ButtonDrawer } from "./../../../ui/AloneComponents/ButtonDrawer";
import { startLoadHomeDocumment } from "../../../backend/home/HomeThunks";
import FloatingButton from "../../../ui/AloneComponents/FloatingButton";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useWindowSize } from "../../../hooks/useWindowSize";
const AppBarTool = ({ handleDrawerOpen }) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      sx={{
        top: "0",
        left: "0",
        position: "fixed",
        width: "100%",
        background: "white",
        alignItems: "center",
      }}
    >
      <Toolbar
        sx={{
          background: "white",
          width: "100%",
          maxWidth: 1440,
          backgroundColor: "white",
          padding: scrolling ? "5px" : "10px",
          transition: "all 0.3s ease",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: 0,
            "@media (min-width:1056px)": { display: "none" },
          }}
        >
          {/* Icono de menú para el Drawer */}
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon sx={{ color: "black", width: 30, height: 30 }} />
          </IconButton>
          <Typography
            sx={{
              color: "black",
              width: "200px",
              marginTop: 1.5,
            }}
          >
            CORPOREDDEH
          </Typography>
          <a href="/">
            <IconButton>
              <HomeIcon
                sx={{ color: "black", width: "30px", height: "30px" }}
              />
            </IconButton>
          </a>
        </Box>

        <Box
          sx={{
            marginLeft: 2,
            ":hover": {
              transform: "scale(1.1)",
            },
            transition: "transform 0.3s ease-in-out",
            "@media (max-width: 1055px)": { display: "none" },
          }}
        >
          <a href="/">
            <img
              src={loguito}
              alt="Logo"
              style={{
                width: scrolling ? "50px" : "90px",
                height: "auto",
                transition: "all 0.3s ease",
              }}
            />
          </a>
        </Box>
        <Box
          sx={{
            marginLeft: "auto",
            color: "#308CD7",
            paddingLeft: "2px",
            "@media (max-width: 1055px)": { display: "none" },
          }}
        >
          <ButtonNavBar
            icono={
              <CalendarMonthIcon
                sx={{
                  color:
                    location.pathname === routes.CALENDAR ? "white" : "purple",
                  marginRight: "5px",
                }}
              />
            }
            ruta={routes.CALENDAR}
            texto="Calendario"
          />

          <ButtonNavBar
            icono={
              <EventIcon
                sx={{
                  color: location.pathname === routes.EVENT ? "white" : "green",
                  marginRight: "5px",
                }}
              />
            }
            ruta={routes.EVENT}
            texto="Eventos"
          />
          <ButtonNavBar
            icono={
              <DescriptionIcon
                sx={{
                  color:
                    location.pathname === routes.DOCUMENTS ? "white" : "orange",
                  marginRight: "5px",
                }}
              />
            }
            ruta={routes.DOCUMENTS}
            texto="Documentos"
          />
          <ButtonNavBar
            icono={
              <InfoIcon
                sx={{
                  color:
                    location.pathname === routes.ABOUTUS ? "white" : "#308CD7",
                  marginRight: "5px",
                }}
              />
            }
            ruta={routes.ABOUTUS}
            texto="Sobre Nosotros"
          />
          <ButtonNavBar
            icono={
              <PlaceIcon
                sx={{
                  color: location.pathname === routes.OFFICE ? "white" : "red",
                  marginRight: "5px",
                }}
              />
            }
            ruta={routes.OFFICE}
            texto="Capitulos"
          />
          <ButtonNavBar
            icono={
              <BusinessCenterIcon
                sx={{
                  color:
                    location.pathname === routes.STRATEGIC_LINES
                      ? "white"
                      : "brown",
                  marginRight: "5px",
                }}
              />
            }
            ruta={routes.STRATEGIC_LINES}
            texto="Servicios"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const DrawerBar = ({ drawerOpen, handleDrawerClose }) => {
  return (
    <Drawer
      sx={{
        "@media (min-width:1056px)": { display: "none" },
      }}
      anchor="left"
      open={drawerOpen}
      onClose={handleDrawerClose}
    >
      <AppBar
        position="static"
        sx={{
          top: "0",
          left: "0",
          position: "fixed",
          width: "100%",
          background: "#308CD7",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <IconButton onClick={handleDrawerClose}>
              <ArrowBackIosNewIcon sx={{ color: "white" }} />
            </IconButton>
            <Typography
              sx={{
                color: "white",
                width: "100%",
                marginTop: 1.5,
                textAlign: "center",
              }}
            >
              CORPOREDDEH
            </Typography>
            <a href="/">
              <IconButton>
                <HomeIcon
                  sx={{ color: "white", width: "30px", height: "30px" }}
                />
              </IconButton>
            </a>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          width: "100vw",
          height: "100%",
          display: "flex",
          backgroundColor: "#308CD7",
          flexDirection: "column",
          marginTop: 7,
        }}
      >
        <ButtonDrawer
          icono={
            <CalendarMonthIcon
              sx={{
                color: "white",
                marginRight: "5px",
              }}
            />
          }
          ruta={routes.CALENDAR}
          first
          texto="Calendario"
        />
        <ButtonDrawer
          icono={
            <EventIcon
              sx={{
                color: "white",
                marginRight: "5px",
              }}
            />
          }
          ruta={routes.EVENT}
          texto="Eventos"
        />
        <ButtonDrawer
          icono={
            <DescriptionIcon
              sx={{
                color: "white",
                marginRight: "5px",
              }}
            />
          }
          ruta={routes.DOCUMENTS}
          texto="Documentos"
        />
        <ButtonDrawer
          icono={
            <InfoIcon
              sx={{
                color: "white",
                marginRight: "5px",
              }}
            />
          }
          ruta={routes.ABOUTUS}
          texto="Sobre Nosotros"
        />
        <ButtonDrawer
          icono={
            <PlaceIcon
              sx={{
                color: "white",
                marginRight: "5px",
              }}
            />
          }
          ruta={routes.OFFICE}
          texto="Capitulos"
        />
        <ButtonDrawer
          icono={
            <BusinessCenterIcon
              sx={{
                color: "white",
                marginRight: "5px",
              }}
            />
          }
          ruta={routes.STRATEGIC_LINES}
          texto="Servicios"
        />
        <Box
          sx={{
            height: "75px",
            marginTop: "auto",
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography fontSize="14pt" fontWeight="bold">
            CORPOREDDEH
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography fontSize="10pt" color="white">
              {"Desarrollado por: @"}
            </Typography>
            <Link
              to={"https://github.com/joferrer"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Typography fontSize="10pt" color="white">
                Jeisonfort
              </Typography>
            </Link>
            <Link
              to={"https://github.com/GuillermoGU24"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Typography fontSize="10pt" color="white">
                -@GuillermoGu
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

const Footer = ({ linkSocial }) => {
  return (
    <Box
      sx={{
        height: "250px",
        background: "#308CD7",
        padding: 0,
        "@media (max-width: 332px)": { height: "300px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60px",
          width: "100%",
          marginTop: 2,
        }}
      >
        <Box sx={{ height: "2px", background: "white", width: "100%" }} />
        <Box sx={{ display: "flex" }}>
          <a href={linkSocial.youtube} target="_blank">
            <YouTubeIcon sx={{ color: "white", width: 40, height: 40 }} />
          </a>
          <a href={linkSocial.facebook} target="_blank">
            <FacebookOutlinedIcon
              sx={{ color: "white", width: 40, height: 40 }}
            />
          </a>
          <a href={"https://wa.me/+57" + linkSocial.whatsapp} target="_blank">
            <WhatsAppIcon sx={{ color: "white", width: 40, height: 40 }} />
          </a>
          <a href={"mailto:" + linkSocial.email} target="_blank">
            <MailOutlineIcon sx={{ color: "white", width: 40, height: 40 }} />
          </a>
          <a href={linkSocial.twitter} target="_blank">
            <TwitterIcon sx={{ color: "white", width: 40, height: 40 }} />
          </a>
        </Box>
        <Box sx={{ height: "2px", background: "white", width: "100%" }} />
      </Box>
      <Box sx={{ textAlign: "center", color: "white" }}>
        <Typography fontSize="15pt" sx={{ marginTop: 1 }}>
          CORPOREDDEH
        </Typography>

        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2 }}
          justifyContent="center"
          sx={{ marginBottom: 2 }}
        >
          <Grid item>
            <Link
              to={"https://wa.me/+57" + linkSocial.whatsapp}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Typography> Contactanos</Typography>
            </Link>

            <Link
              to={routes.OFFICE}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Typography>¿Donde Encontrarnos?</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link
              to={routes.ABOUTUS}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Typography> Sobre Nosotros</Typography>
            </Link>

            <Link
              to={routes.LOGIN}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Typography> ¿Eres Empleado?</Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ height: "2px", background: "white", width: "100%" }} />
      <Typography sx={{ marginTop: 1, color: "white" }}>
        2023 © All Rights Reserved
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography fontSize="10pt" color="white">
          {"Desarrollado por: @"}
        </Typography>
        <Link
          to={"https://github.com/joferrer"}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <Typography fontSize="10pt" color="white">
            Jeisonfort
          </Typography>
        </Link>
        <Link
          to={"https://github.com/GuillermoGU24"}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <Typography fontSize="10pt" color="white">
            -@GuillermoGu
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

const Layout = ({ children }) => {
  const { windowSize } = useWindowSize();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const [linkSocial, setLinks] = useState({
    youtube: "",
    facebook: "",
    instagram: "",
    twitter: "",
    email: "",
    whatsapp: "",
  });

  useEffect(() => {
    Promise.all([startLoadHomeDocumment()]).then((result) => {
      const { socialNetworks } = result[0].data;
      const linksPromise = {
        youtube: socialNetworks.youtube,
        facebook: socialNetworks.facebook,
        instagram: socialNetworks.instagram,
        twitter: socialNetworks.twitter,
        email: socialNetworks.email,
        whatsapp: socialNetworks.whatsapp,
      };
      setLinks(linksPromise);
    });
  }, []);
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          marginTop:
            location.pathname === routes.HOME
              ? windowSize.width >= 1055
                ? 14
                : 9
              : 9,
          zIndex: 3,
        }}
      >
        <AppBarTool handleDrawerOpen={handleDrawerOpen} />
      </Box>
      <DrawerBar
        drawerOpen={drawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <FloatingButton link={"https://wa.me/+57" + linkSocial.whatsapp} />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </Box>
      {/** FOOTER */}
      <Footer linkSocial={linkSocial} />
    </Box>
  );
};

export default Layout;
