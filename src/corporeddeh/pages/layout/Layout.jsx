import React from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { routes } from "../../routes/routes";

const Layout = ({ children }) => {
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
          <Toolbar sx={{ background: "white" }}>
            <a href="/">
              <img
                src="../../../../public/vite.svg"
                alt="Logo"
                style={{ width: "40px" }}
              />
            </a>

            <Box sx={{ marginLeft: "auto", color: "#308CD7" }}>
              <Button
                sx={{
                  color: "inherit",
                  background:
                    location.pathname === routes.CALENDAR
                      ? "#EEEEEE"
                      : "inherit",
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
                    location.pathname === routes.DOCUMENTS
                      ? "#EEEEEE"
                      : "inherit",
                }}
                href={routes.DOCUMENTS}
              >
                Documentos
              </Button>
              <Button
                sx={{
                  color: "inherit",
                  background:
                    location.pathname === routes.ABOUTUS
                      ? "#EEEEEE"
                      : "inherit",
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
      </Box>
      <Box
        sx={{
          flex: 1,
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          height: "150px",
          background: "#308CD7",
          padding: "10px",
        }}
      ></Box>
    </Box>
  );
};

export default Layout;
