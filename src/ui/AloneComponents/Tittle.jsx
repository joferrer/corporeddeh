import { Typography } from "@mui/material";
import React from "react";

const Tittle = ({ tittle }) => {
  return (
    <Typography display="flex" justifyContent="start" sx={{ fontSize:"15pt", marginBottom:4 }}>
      {tittle}
    </Typography>
  );
};

export default Tittle;
