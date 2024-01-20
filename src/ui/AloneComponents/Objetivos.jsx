import { Box, Typography } from "@mui/material";
import React from "react";
import { Titulo } from "./Titulo";
import { Parrafos } from "./Parrafos";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const Objetivos = () => {
  return (
    <Box marginTop={2}>
      <Titulo>NUESTROS OBJETIVOS</Titulo>
      <ul style={{ textAlign: "left" }}>
        <li>
          <Parrafos color={"black"}>
            CORPOREDDEH tiene como objetivo garantizar el respeto, promoción,
            protección y defensa de los derechos humanos.
          </Parrafos>
        </li>
        <li>
          <Parrafos color={"black"}>
            Participar en representación de las víctimas en todos aquellos
            eventos y espacios, tanto institucionales como sociales y
            comunitarios, en los cuales se trata el tema de la violencia y la
            situación de las víctimas.
          </Parrafos>
        </li>
        <li>
          <Parrafos color={"black"}>
            Prestar los servicios de consultorías, interventorías, asesorías y
            revisorías a personas y/o entidades de derecho público y privado en
            todo lo que concierne al tema de derechos humanos, la construcción
            de paz y la promoción de desarrollo.
          </Parrafos>
        </li>
      </ul>
      <Titulo>NUESTROS VALORES</Titulo>
      <ul style={{ textAlign: "left" }}>
        <li>
          <Parrafos color={"#29AFFE"} weigth={true}>
            Trabajo en equipo
          </Parrafos>
        </li>
        <li>
          <Parrafos color={"#6116C5"} weigth={true}>
            Transparencia
          </Parrafos>
        </li>
        <li>
          <Parrafos color={"#B529FE"} weigth={true}>
            Responsabilidad
          </Parrafos>
        </li>
        <li>
          <Parrafos color={"#C51616"} weigth={true}>
            Solidaridad
          </Parrafos>
        </li>
        <li>
          <Parrafos color={"#FEA429"} weigth={true}>
            Honestidad
          </Parrafos>
        </li>
        <li>
          <Parrafos color={"#28C700"} weigth={true}>
            Orden
          </Parrafos>
        </li>
      </ul>
    </Box>
  );
};
