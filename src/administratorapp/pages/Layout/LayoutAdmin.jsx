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
import { ButtonNavBar } from "../../../ui/AloneComponents/ButtonNavBar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventIcon from "@mui/icons-material/Event";
import DescriptionIcon from "@mui/icons-material/Description";
import InfoIcon from "@mui/icons-material/Info";
import { ButtonDrawer } from "../../../ui/AloneComponents/ButtonDrawer";
import { useDispatch } from "react-redux";
import { startLogout } from "../../../backend/auth";

const AppBarTool = ({ handleDrawerOpen, dispatch }) => {
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
          padding: "10px",
          transition: "all 0.3s ease",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            "@media (min-width: 901px)": { display: "none" },
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

        <Box
          sx={{
            marginLeft: 2,
            ":hover": {
              transform: "scale(1.1)",
            },
            transition: "transform 0.3s ease-in-out",
            "@media (max-width: 900px)": { display: "none" },
          }}
        >
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
            "@media (max-width: 900px)": { display: "none" },
          }}
        >
          <ButtonNavBar
            icono={
              <CalendarMonthIcon
                sx={{
                  color:
                    location.pathname === routes.CALENDAR_ADMIN
                      ? "white"
                      : "purple",
                  marginRight: "5px",
                }}
              />
            }
            ruta={routes.CALENDAR_ADMIN}
            texto="Calendario"
          />
          <ButtonNavBar
            icono={
              <EventIcon
                sx={{
                  color:
                    location.pathname === routes.EVENT_ADMIN
                      ? "white"
                      : "green",
                  marginRight: "5px",
                }}
              />
            }
            ruta={routes.EVENT_ADMIN}
            texto="Eventos"
          />
          <ButtonNavBar
            icono={
              <DescriptionIcon
                sx={{
                  color:
                    location.pathname === routes.DOCUMENTS_ADMIN
                      ? "white"
                      : "orange",
                  marginRight: "5px",
                }}
              />
            }
            ruta={routes.DOCUMENTS_ADMIN}
            texto="Documentos"
          />
          <ButtonNavBar
            icono={
              <InfoIcon
                sx={{
                  color:
                    location.pathname === routes.ABOUTUS_ADMIN
                      ? "white"
                      : "#308CD7",
                  marginRight: "5px",
                }}
              />
            }
            ruta={routes.ABOUTUS_ADMIN}
            texto="Sobre Nosotros"
          />

          <IconButton onClick={() => dispatch(startLogout())}>
            <LogoutIcon
              sx={{ color: "#308CD7", width: "30px", height: "30px" }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const DrawerBar = ({ drawerOpen, handleDrawerClose, dispatch }) => {
  return (
    <Drawer
      sx={{
        "@media (min-width: 901px)": { display: "none" },
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
        <ButtonDrawer
          icono={
            <CalendarMonthIcon
              sx={{
                color: "white",
                marginRight: "5px",
              }}
            />
          }
          ruta={routes.CALENDAR_ADMIN}
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
          ruta={routes.EVENT_ADMIN}
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
          ruta={routes.DOCUMENTS_ADMIN}
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
          ruta={routes.ABOUTUS_ADMIN}
          texto="Sobre Nosotros"
        />
        <Button onClick={() => dispatch(startLogout())}>
          <LogoutIcon sx={{ color: "white", width: "30px", height: "30px" }} />
        </Button>
        <Box
          sx={{
            height: "75px",
            marginTop: "auto",
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography fontSize="14pt" fontWeight="bold">
            {" "}
            CORPOREDDEH
          </Typography>
          <Typography> 2023 © All Rights Reserved</Typography>
          <Typography fontSize="9pt">
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

  const dispatch = useDispatch();

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
      <Box sx={{ marginBottom: 9, zIndex: 3 }}>
        <AppBarTool handleDrawerOpen={handleDrawerOpen} dispatch={dispatch} />
      </Box>
      <DrawerBar
        dispatch={dispatch}
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
