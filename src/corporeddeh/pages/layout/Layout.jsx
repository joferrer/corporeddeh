import React, { useState } from "react";
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
import loguito from "../../../../public/vite.svg"


const AppBarTool = ({ handleDrawerOpen }) => {
  return (
    <AppBar
      position="static"
      sx={{
        top: "0",
        left: "0",
        position: "fixed",
        width: "100%",
        background: "white",
      }}
    >
      <Toolbar
        sx={{
          background: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            "@media (min-width: 642px)": { display: "none" },
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
            <img
              src={loguito}
              alt="Logo"
              style={{
                width: "40px",
              }}
            />
          </a>
        </Box>

        <Box sx={{ "@media (max-width: 642px)": { display: "none" } }}>
          <a href="/">
            <img
              src={loguito}
              alt="Logo"
              style={{
                width: "40px",
              }}
            />
          </a>
        </Box>
        <Box
          sx={{
            marginLeft: "auto",
            color: "#308CD7",
            "@media (max-width: 642px)": { display: "none" },
          }}
        >
          <Button
            sx={{
              color: "inherit",
              background:
                location.pathname === routes.CALENDAR ? "#EEEEEE" : "inherit",
            }}
            href={routes.CALENDAR}
          >
            Calendario
          </Button>
          <Button
            sx={{
              color: "inherit",
              background:
                location.pathname === routes.EVENT ? "#EEEEEE" : "inherit",
            }}
            href={routes.EVENT}
          >
            Eventos
          </Button>
          <Button
            sx={{
              color: "inherit",
              background:
                location.pathname === routes.DOCUMENTS ? "#EEEEEE" : "inherit",
            }}
            href={routes.DOCUMENTS}
          >
            Documentos
          </Button>
          <Button
            sx={{
              color: "inherit",
              background:
                location.pathname === routes.ABOUTUS ? "#EEEEEE" : "inherit",
            }}
            href={routes.ABOUTUS}
          >
            Sobre Nosotros
          </Button>
          <Button
            sx={{
              color: "inherit",
              background:
                location.pathname === routes.OFFICE ? "#EEEEEE" : "inherit",
            }}
            href={routes.OFFICE}
          >
            Sedes
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const DrawerBar = ({ drawerOpen, handleDrawerClose }) => {
  return (
    <Drawer
      sx={{
        "@media (min-width: 642px)": { display: "none" },
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
              <img
                src={loguito}
                alt="Logo"
                style={{
                  width: "40px",
                }}
              />
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
        <Button
          sx={{
            color: "white",
            marginTop: 3,
            fontSize: "13pt",
            fontWeight:
              window.location.pathname === routes.CALENDAR ? "bold" : "normal",
          }}
          href={routes.CALENDAR}
        >
          Calendario
        </Button>
        <Button
          sx={{
            color: "white",
            fontSize: "13pt",
            fontWeight:
              window.location.pathname === routes.EVENT ? "bold" : "normal",
          }}
          href={routes.EVENT}
        >
          Eventos
        </Button>
        <Button
          sx={{
            color: "white",
            fontSize: "13pt",
            fontWeight:
              window.location.pathname === routes.DOCUMENTS ? "bold" : "normal",
          }}
          href={routes.DOCUMENTS}
        >
          Documentos
        </Button>
        <Button
          sx={{
            color: "white",
            fontSize: "13pt",
            fontWeight:
              window.location.pathname === routes.ABOUTUS ? "bold" : "normal",
          }}
          href={routes.ABOUTUS}
        >
          Sobre Nosotros
        </Button>
        <Button
          sx={{
            color: "white",
            fontSize: "13pt",
            fontWeight:
              window.location.pathname === routes.OFFICE ? "bold" : "normal",
          }}
          href={routes.OFFICE}
        >
          Sedes
        </Button>
        <Box
          sx={{
            height: "75px",
            marginTop: "auto",
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography fontSize={"14pt"} fontWeight={"bold"}>
            {" "}
            CORPOREDDEH
          </Typography>
          <Typography> 2023 © All Rights Reserved</Typography>
          <Typography fontSize={"9pt"}>
            Desarrollado por: @JeisonFort - @GuillermoGu
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

const Footer = () => {
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
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ height: "2px", background: "white", width: "100%" }}></Box>
        <Box sx={{ display: "flex" }}>
          <YouTubeIcon sx={{ color: "white", width: 40, height: 40 }} />
          <FacebookOutlinedIcon
            sx={{ color: "white", width: 40, height: 40 }}
          />
          <WhatsAppIcon sx={{ color: "white", width: 40, height: 40 }} />
          <MailOutlineIcon sx={{ color: "white", width: 40, height: 40 }} />
          <TwitterIcon sx={{ color: "white", width: 40, height: 40 }} />
        </Box>
        <Box sx={{ height: "2px", background: "white", width: "100%" }}></Box>
      </Box>
      <Box sx={{ textAlign: "center", color: "white" }}>
        <Typography fontSize={"15pt"} sx={{ marginTop: 1 }}>
          CORPOREDDEH
        </Typography>

        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2 }}
          justifyContent={"center"}
          sx={{ marginBottom: 2 }}
        >
          <Grid item>
            <Typography> Contatanos +57 30303030</Typography>
            <Typography> ¿Donde Encontrarnos?</Typography>
          </Grid>
          <Grid item>
            <Typography> Sobre Nosotros</Typography>
            <Typography> ¿Eres Empleado?</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ height: "2px", background: "white", width: "100%" }}></Box>
      <Typography sx={{ marginTop: 1, color: "white" }}>
        2023 © All Rights Reserved
      </Typography>
      <Typography fontSize={"10pt"} color={"white"}>
        Desarrollado por: @jeison fort - @guillermo gu
      </Typography>
    </Box>
  );
};

const Layout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

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
      <Box sx={{ marginBottom: 10 }}>
        <AppBarTool handleDrawerOpen={handleDrawerOpen} />
      </Box>
      <DrawerBar
        drawerOpen={drawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <Box
        sx={{
          flex: 1,
          display:"flex",
          justifyContent: "center",
        }}
      >
        {children}
      </Box>
      {/** FOOTER */}
      <Footer />
    </Box>
  );
};

export default Layout;
