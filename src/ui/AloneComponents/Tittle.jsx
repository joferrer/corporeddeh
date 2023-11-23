import { Typography } from "@mui/material";
import React from "react";

const Tittle = ({ tittle }) => {
  return (
    <Typography display="flex" justifyContent="start" sx={{ marginLeft: 3, fontSize:"15pt" }}>
      {tittle}
    </Typography>
  );
};

export default Tittle;
