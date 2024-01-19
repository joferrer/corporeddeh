import { Box, Typography } from "@mui/material";
import React from "react";
import { Titulo } from "./Titulo";
import { Parrafos } from "./Parrafos";

export const Objetivos = () => {
  return (
    <Box marginTop={2}>
      <Titulo>NUESTROS OBJETIVOS</Titulo>
      <ul>
        <li>
          <Parrafos></Parrafos>
        </li>
        <li>
          <Parrafos></Parrafos>
        </li>
        <li>
          <Parrafos></Parrafos>
        </li>
      </ul>
    </Box>
  );
};
