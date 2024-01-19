import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const LineaMiento = () => {
  const list = [
    {
      nombre: "FORMACIÓN Y CAPACITACIÓN",
      objetivo:
        "Fortalecer el conocimiento sobre los derechos humanos, la construcción de paz y el desarrollo, así como las habilidades para la defensa y su promoción.",
      productos: [
        "Conferencias(30' - 45')",
        "Talleres(6' - 8'; 12 horas o 16 horas.)",
        "Seminarios(4 - 8 horas)",
        "Cursos(150 horas)(En alianza)",
        "Diplomado(En alianza)",
      ],
      color: "rgb(204,150,50)",
    },
    {
      nombre: "ASESORÍA Y ACOMPAÑAMIENTO",
      objetivo:
        "Diseñar e implementar procesos de cambio-socio organizacional para el mejoramiento de la gestión de las formas de organización social (formal e informal).",
      productos: [
        "Construcción del modelo (según la forma de organización social )",
        "Diseño del proceso de intervención: diagnóstico, plan de mejoramiento, estrategia de desarrollo de capacidades, asesoria, acompañamiento, asistencia técnica, monitoreo y evaluación. ",
      ],
      color: "rgb(192,110,63)",
    },
    {
      nombre: "GESTIÓN DE PROYECTOS",
      objetivo:
        "Diseñar e implementar procesos de cambio-socio organizacional para el mejoramiento de la gestión de las formas de organización social (formal e informal).",
      productos: [
        "Identificación. Diseño y Formulación.",
        "Ejecución / Implementación / Desarrollo.",
        "Monitoreo / Seguimiento y Evaluación.",
        "Sistematización de Experiencias.",
      ],
      color: "rgb(183,84,128)",
    },
    {
      nombre: "ACCIÓN COLECTIVA E INCIDENCIA",
      objetivo:
        "Potenciar la coordinación e impacto de las relaciones do cooperación y solidaridad de actores, organizaciones e Instituciones a favor de la defensa de los derechos humanos, la construcción de paz y la promoción del desarrollo.",
      productos: [
        "Representación y vocería en espacios de participación.",
        "Gestión de la cooperación (Redes, Alianzas, Mesas, entro otros)",
        "Recolección, visibilización y difusión de hechos e información estratégica en materia de DDHH.",
        "Denuncias, pronunciamientos, comunicados.",
        "Movilización y participación organizada.",
        "Posicionamiento y reconocimiento.",
        "Investigaciones, estudios, caracterizacionos.",
        "Publicaciones y otras plezas de comunicación.",
      ],
      color: "rgb(26,119,180)",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Typography
        sx={{
          textAlign: "left",
          fontSize: "30pt",
          fontWeight: "bold",
          color: "#308CD7",
          "@media (max-width:720px)": {
            fontSize: "26pt",
          },
          "@media (max-width:400px)": {
            fontSize: "20pt",
          },
        }}
      >
        NUESTRAS LINEAS DE TRABAJO
      </Typography>
      <Typography
        sx={{
          textAlign: "left",
          fontSize: "20pt",
          color: "#308CD7",
          "@media (max-width:720px)": {
            fontSize: "18pt",
          },
        }}
      >
        (SERVICIOS)
      </Typography>
      <Typography
        sx={{
          textAlign: "justify",
          fontSize: "14pt",
          marginTop: 2,
          marginBottom: 2,
          "@media (max-width:720px)": {
            fontSize: "14pt",
          },
        }}
      >
        Teniendo en cuenta las necesidades sentidas y los intereses estratégicos
        de nuestros clientes (internos y externos), se definieron las siguientes
        líneas de trabajo (servicios).
      </Typography>

      <List>
        {list.map((item, index) => (
          <React.Fragment key={index}>
            <ListItemButton
              onClick={() => handleClick(index)}
              sx={{
                borderRadius: "20px",
                backgroundColor: item.color,
                ":hover": {
                  transform: "scale(1.03)",
                  backgroundColor: item.color,
                },
                transition: "transform 0.3s ease-in-out",
                transform: openIndex === index ? "scale(1.03)" : "scale(1)",
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "14pt",
                      fontWeight: 550,
                      "@media (max-width:720px)": {
                        fontSize: "12pt",
                      },
                    }}
                  >
                    {item.nombre}
                  </Typography>
                }
              />
              {openIndex === index ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
              <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                <Typography
                  sx={{
                    color: "#308CD7",
                    fontSize: "19pt",
                    fontWeight: 400,
                    textAlign: "left",
                    marginBottom: 2,
                    "@media (max-width:720px)": {
                      fontSize: "17pt",
                    },
                  }}
                >
                  OBJETIVO
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13pt",
                    textAlign: "left",
                    fontWeight: 400,
                    marginBottom: 2,
                    "@media (max-width:720px)": {
                      fontSize: "12pt",
                    },
                  }}
                >
                  {item.objetivo}
                </Typography>
                <Typography
                  sx={{
                    color: "#308CD7",
                    fontSize: "19pt",
                    fontWeight: 400,
                    textAlign: "left",
                    marginBottom: 2,
                    "@media (max-width:720px)": {
                      fontSize: "17pt",
                    },
                  }}
                >
                  PRODUCTOS
                </Typography>
                <ul style={{ textAlign: "left" }}>
                  {item.productos.map((i) => (
                    <li>{i}</li>
                  ))}
                </ul>
                <Typography sx={{ marginBottom: 2 }}>.</Typography>
              </Box>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};
