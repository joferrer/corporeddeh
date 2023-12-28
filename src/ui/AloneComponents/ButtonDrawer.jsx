import { Button } from "@mui/material";
import React from "react";

export const ButtonDrawer = ({ icono, ruta, texto, first }) => {
  return (
    <Button
      sx={{
        color: "white",
        marginTop: first ? 3 : 0,
        fontSize: "13pt",
        fontWeight: window.location.pathname === ruta ? "bold" : "normal",
      }}
      href={ruta}
    >
      {icono}
      {texto}
    </Button>
  );
};
