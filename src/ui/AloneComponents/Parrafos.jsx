import { Typography } from "@mui/material";
import React from "react";

export const Parrafos = ({ children, color, weigth }) => {
  return (
    <Typography
      sx={{
        textAlign: "justify",
        fontSize: "14pt",
        marginTop: 2,
        fontWeight: weigth ? "bold" : "normal",
        color: color,
        marginBottom: 2,
        "@media (max-width:720px)": {
          fontSize: "14pt",
        },
      }}
    >
      {children}
    </Typography>
  );
};
