import { Button } from "@mui/material";
import React from "react";

export const ButtonNavBar = ({ ruta, icono, texto }) => {
  return (
    <Button
      sx={{
        color: location.pathname === ruta ? "white" : "inherit",
        background: location.pathname === ruta ? "#308CD7" : "inherit",
        marginRight: "5px",
        fontSize: "16px",
        ":hover": {
          transform: "scale(1.1)",
          background: location.pathname === ruta ? "#308CD7" : "inherit",
          color: location.pathname === ruta ? "white" : "inherit",
        },
        transition: "transform 0.3s ease-in-out",
      }}
      href={ruta}
    >
      {icono}
      {texto}
    </Button>
  );
};
