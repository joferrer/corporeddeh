import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

const Layout = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <img
            src="../../../../public/vite.svg"
            alt="Logo"
            style={{ width: "40px", marginRight: "10px" }}
          />
        </Typography>
        <Button color="inherit" href="/">
          Calendario
        </Button>
        <Button color="inherit" href="/Eventos">
          Eventos
        </Button>
        <Button color="inherit" href="/Documentos">
          Documentos
        </Button>
        <Button color="inherit" href="/SobreNostros">
          Sobre Nosotros
        </Button>
        <Button color="inherit" href="/Sedes">
          Sedes
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Layout;
