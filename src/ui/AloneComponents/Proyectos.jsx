import { Box, Typography } from "@mui/material";
import React from "react";
import { Titulo } from "./Titulo";
import { Parrafos } from "./Parrafos";

export const Proyectos = () => {
  return (
    <Box>
      <Titulo>PROYECTOS EJECUTADOS</Titulo>
      <Parrafos>
        El compromiso reflejado en el trabajo de CORPOREDDEH le ha permitido
        liderar procesos como:
      </Parrafos>
      <ul>
        <li>
          <Parrafos>
            Proyecto de "fortalecimiento de capacidades para la participación y
            organización a personas víctimas de despojo y abandono forzado de
            tierras en los municipios de San José de Cúcuta, Tibú y Sardinata,
            en el Departamento Norte de Santander. Convenio con Cooperación
            Alemana GIZ N´83275958.
          </Parrafos>
        </li>
        <li>
          <Parrafos>
            Proyecto de "Fortalecimiento integral de CORPOREDDEH". Convenio con
            Cooperación Alemania GIZ N´83309735.
          </Parrafos>
        </li>
      </ul>
      <Box sx={{ marginLeft: 3, marginTop: 2 }}>
        <Typography
          sx={{
            textAlign: "left",
            fontSize: "20pt",
            fontWeight: "bold",
            color: "#308CD7",
            "@media (max-width:720px)": {
              fontSize: "26pt",
            },
            "@media (max-width:400px)": {
              fontSize: "15pt",
            },
          }}
        >
          Projectos en ejecución como:
        </Typography>
        <Parrafos>
          Proyecto para el desarrollo del diploma en pedagogía para la
          construcción de paz territorial, ciudadana y resolución de conflictos.
          Convenio celebrado entre las Universidades de Pamplona, CENPAZ, la
          Gobernación del Norte de Santander y CORPOREDDEH.
        </Parrafos>
      </Box>
      <Titulo>PARTICIPACION E INCIDENCIA CORPORATIVA</Titulo>
      <ul>
        <li>
          <Parrafos>Comisión Departamental de Paz</Parrafos>
        </li>
        <li>
          <Parrafos>Central Unitaria de Trabajadores - CUT</Parrafos>
        </li>
        <li>
          <Parrafos>Gobernación del departamento Norte de Santander</Parrafos>
        </li>
        <li>
          <Parrafos>Centro de Memoria Histórica</Parrafos>
        </li>
        <li>
          <Parrafos>Cooperación Alemana GIZ</Parrafos>
        </li>
        <li>
          <Parrafos>Organización de Naciones unidas</Parrafos>
        </li>
      </ul>
    </Box>
  );
};
