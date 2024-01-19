import React from "react";
import Layout from "./layout/Layout";
import Container from "../../ui/AloneComponents/Container";
import { LineaMiento } from "../../ui/AloneComponents/LineaMiento";
import { Objetivos } from "./../../ui/AloneComponents/Objetivos";
import { Proyectos } from "./../../ui/AloneComponents/Proyectos";
import { Clientes } from "./../../ui/AloneComponents/Clientes";
export const StrategicGuidelines = () => {
  const pro = [
    "Conferencias (30' - 45' )",
    "Talleres (6 - 8 horas; 12 horas o 16 horas)",
    "Seminarios (4 - 8 horas)",
    "Cursos (150 horas)(En alianza)",
    "Diplomado (En alianza)",
  ];
  return (
    <Layout>
      <Container>
        <LineaMiento />
        <Objetivos />
        <Proyectos />
        <Clientes />
      </Container>
    </Layout>
  );
};
