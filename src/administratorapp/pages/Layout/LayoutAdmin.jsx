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
import { routes } from "../../../corporeddeh/routes/routes";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import loguito from "../../../../public/logo-SinFondo.png";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";

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
          <a href={routes.HOME_ADMIN}>
            <IconButton>
              <HomeIcon
                sx={{ color: "black", width: "30px", height: "30px" }}
              />
            </IconButton>
          </a>
        </Box>

        <Box sx={{ "@media (max-width: 642px)": { display: "none" } }}>
          <a href={routes.HOME_ADMIN}>
            <img
              src={loguito}
              alt="Logo"
              style={{
                width: "60px",
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
                location.pathname === routes.CALENDAR_ADMIN
                  ? "#EEEEEE"
                  : "inherit",
            }}
            href={routes.CALENDAR_ADMIN}
          >
            Calendario
          </Button>
          <Button
            sx={{
              color: "inherit",
              background:
                location.pathname === routes.EVENT_ADMIN
                  ? "#EEEEEE"
                  : "inherit",
            }}
            href={routes.EVENT_ADMIN}
          >
            Eventos
          </Button>
          <Button
            sx={{
              color: "inherit",
              background:
                location.pathname === routes.DOCUMENTS_ADMIN
                  ? "#EEEEEE"
                  : "inherit",
            }}
            href={routes.DOCUMENTS_ADMIN}
          >
            Documentos
          </Button>
          <Button
            sx={{
              color: "inherit",
              background:
                location.pathname === routes.ABOUTUS_ADMIN
                  ? "#EEEEEE"
                  : "inherit",
            }}
            href={routes.ABOUTUS_ADMIN}
          >
            Sobre Nosotros
          </Button>
          <a href={routes.HOME_ADMIN}>
            <IconButton>
              <LogoutIcon
                sx={{ color: "#308CD7", width: "30px", height: "30px" }}
              />
            </IconButton>
          </a>
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
            <a href={routes.HOME_ADMIN}>
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
        <Button
          sx={{
            color: "white",
            marginTop: 3,
            fontSize: "13pt",
            fontWeight:
              window.location.pathname === routes.CALENDAR_ADMIN
                ? "bold"
                : "normal",
          }}
          href={routes.CALENDAR_ADMIN}
        >
          Calendario
        </Button>
        <Button
          sx={{
            color: "white",
            fontSize: "13pt",
            fontWeight:
              window.location.pathname === routes.EVENT_ADMIN
                ? "bold"
                : "normal",
          }}
          href={routes.EVENT_ADMIN}
        >
          Eventos
        </Button>
        <Button
          sx={{
            color: "white",
            fontSize: "13pt",
            fontWeight:
              window.location.pathname === routes.DOCUMENTS_ADMIN
                ? "bold"
                : "normal",
          }}
          href={routes.DOCUMENTS_ADMIN}
        >
          Documentos
        </Button>
        <Button
          sx={{
            color: "white",
            fontSize: "13pt",
            fontWeight:
              window.location.pathname === routes.ABOUTUS_ADMIN
                ? "bold"
                : "normal",
          }}
          href={routes.ABOUTUS_ADMIN}
        >
          Sobre Nosotros
        </Button>
        <Button href={routes.HOME}>
          <IconButton>
            <LogoutIcon
              sx={{ color: "white", width: "30px", height: "30px" }}
            />
          </IconButton>
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

const LayoutAdmin = ({ children }) => {
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
      <Box sx={{ marginBottom: 10, zIndex: 1 }}>
        <AppBarTool handleDrawerOpen={handleDrawerOpen} />
      </Box>
      <DrawerBar
        drawerOpen={drawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default LayoutAdmin;
