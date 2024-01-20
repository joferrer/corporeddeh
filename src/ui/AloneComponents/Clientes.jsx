import { Box, Collapse, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Titulo } from "./Titulo";
import { Parrafos } from "./Parrafos";

export const Clientes = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box>
      <Titulo>NUESTROS CLIENTES</Titulo>
      <Parrafos> Los clientes de la Corporación son de dos tipos:</Parrafos>

      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          onClick={() => handleClick(1)}
          sx={{
            cursor: "pointer",
            background: "#308CD7",
            borderRadius: "10px",
            color: "white",
            fontSize: "20pt",
            fontWeight: "bold",
            height: "100%",
            minHeight: "250px",
            display: "flex",
            justifyContent: "center",
            borderRadius:
              openIndex === 2 || openIndex === 1 ? "10px 10px 0px 0px" : "10px",
            alignItems: "center",
            "@media (max-width:900px)": {
              minHeight: "150px",
              borderRadius: openIndex === 1 ? "10px 10px 0px 0px" : "10px",
            },
            ":hover": {
              transform: "scale(1.05)",
            },
            transition: "transform 0.3s ease-in-out",
          }}
        >
          Clientes Internos
        </Grid>
        <Collapse
          in={openIndex === 1}
          timeout="auto"
          unmountOnExit
          sx={{
            background: "#308CD7",
            borderRadius: "0px 0pc 10px 10px ",
            "@media (min-width:900px)": {
              display: "none",
            },
          }}
        >
          <Box
            sx={{
              background: "#308CD7",
              borderRadius: "10px",
              color: "white",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                margin: "5px",
                fontSize: "20pt",
                marginTop: 2,
                fontWeight: "bold",
                marginBottom: 2,
                "@media (max-width:720px)": {
                  fontSize: "14pt",
                },
              }}
            >
              Entendemos como clientes internos a nuestra base social conformada
              por 23 organizaciones y 16 personas naturales quienes son los
              dueños de la corporación.
            </Typography>
          </Box>
        </Collapse>
        <Grid
          item
          xs={12}
          md={6}
          onClick={() => handleClick(2)}
          sx={{
            background: "#00559B",
            borderRadius: "10px",
            color: "white",
            fontSize: "20pt",
            fontWeight: "bold",
            height: "100%",
            minHeight: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            borderRadius:
              openIndex === 2 || openIndex === 1 ? "10px 10px 0px 0px" : "10px",
            "@media (max-width:900px)": {
              minHeight: "150px",
              borderRadius: openIndex === 2 ? "10px 10px 0px 0px" : "10px",
            },
            ":hover": {
              transform: "scale(1.05)",
            },
            transition: "transform 0.3s ease-in-out",
          }}
        >
          Clientes Externos
        </Grid>
        <Collapse
          in={openIndex === 2}
          timeout="auto"
          unmountOnExit
          sx={{
            background: "#00559B",
            borderRadius: "0px 0pc 10px 10px ",
            "@media (min-width:900px)": {
              display: "none",
            },
          }}
        >
          <Box
            sx={{
              color: "white",
              fontSize: "20pt",
              width: "100%",
              textAlign: "justify",
            }}
          >
            <Box
              sx={{
                margin: "10px",
                textAlign: "justify",
                fontSize: "20pt",
                marginTop: 2,
                marginBottom: 2,
                "@media (max-width:720px)": {
                  fontSize: "14pt",
                },
              }}
            >
              <Typography
                sx={{ marginTop: 1, marginBottom: 1, fontSize: "15pt" }}
              >
                Atendemos como clientes externos a 5 microsegmentos de actores:
              </Typography>
              <ul>
                <li>
                  <Typography>
                    Personas naturales: en general, víctimas del conflicto
                    armado y líderes y lideresas sociales.
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ marginTop: 1, marginBottom: 1 }}>
                    Organizaciones sociales: de víctimas, JAC, campesinos,
                    veedurias entre otros.
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ marginTop: 1, marginBottom: 1 }}>
                    Medios de comunicación: empresas y organizaciones de
                    comunicación que solicitan semanalmente información sobre la
                    situación de los derechos humanos, de los líderes/as
                    sociales y defensores, del contexto social, político y
                    económico sobre migración y situación de la frontera, entre
                    otros.
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ marginTop: 1, marginBottom: 1 }}>
                    ONG´s nacionales: con presencia nacional de justicia, viva
                    la ciudadanía, CREDHOS, entre otros.
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ marginTop: 1, marginBottom: 1 }}>
                    ONG´s regionales: con presencia en el departamento,
                    PROGRESAR, COSPAS, PARCOMUN, entre otros.
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ marginTop: 1, marginBottom: 1 }}>
                    Organismos de cooperación internacional: organismos del
                    Sistema Nacional de Naciones Unidas, entidades de
                    cooperación bilateral(USAID, GIZ, AECID), entidades de
                    cooperación descentralizadas(CARITAS, Cruz Roja
                    Internacional, entre otros).
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ marginTop: 1, marginBottom: 1 }}>
                    ONG´s regionales: comprepagadas en ciencias humanas(
                    derecho, social, economía) y grupos de investigación de temas
                    de derechos humanos, construcción de paz, tales como la
                    UFPS, Unisimón, Unilibrio, Unifamplona, ESAP.
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ marginTop: 1, marginBottom: 1 }}>
                    Entidades territoriales: la gobernación y la alcaldía que
                    por mandato constitucional deben ofrecer atención integral a
                    víctimas del conflicto armado y otros tipos de actores
                    sociales(LGBTI, vendedores ambulantes, entre otros).
                  </Typography>
                </li>
              </ul>
            </Box>
          </Box>
        </Collapse>
      </Grid>
      <Collapse
        in={openIndex === 1}
        timeout="auto"
        unmountOnExit
        sx={{
          background: "#308CD7",
          borderRadius: "0px 0pc 10px 10px ",
          "@media (max-width:900px)": {
            display: "none",
          },
        }}
      >
        <Box
          sx={{
            background: "#308CD7",
            borderRadius: "10px",
            color: "white",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              margin: "5px",
              fontSize: "20pt",
              marginTop: 2,
              fontWeight: "bold",
              marginBottom: 2,
              "@media (max-width:720px)": {
                fontSize: "14pt",
              },
            }}
          >
            Entendemos como clientes internos a nuestra base social conformada
            por 23 organizaciones y 16 personas naturales quienes son los dueños
            de la corporación.
          </Typography>
        </Box>
      </Collapse>
      <Collapse
        in={openIndex === 2}
        timeout="auto"
        unmountOnExit
        sx={{
          background: "#00559B",
          borderRadius: "0px 0pc 10px 10px ",
          "@media (max-width:900px)": {
            display: "none",
          },
        }}
      >
        <Box
          sx={{
            color: "white",
            fontSize: "20pt",
            width: "100%",
            textAlign: "justify",
          }}
        >
          <Box
            sx={{
              margin: "10px",
              textAlign: "justify",
              fontSize: "20pt",
              marginTop: 2,
              fontWeight: "bold",
              marginBottom: 2,
              "@media (max-width:720px)": {
                fontSize: "14pt",
              },
            }}
          >
            <Typography
              sx={{ marginTop: 1, marginBottom: 1, fontSize: "15pt" }}
            >
              Atendemos como clientes externos a 5 microsegmentos de actores:
            </Typography>
            <ul>
              <li>
                <Typography>
                  Personas naturales: en general, víctimas del conflicto armado
                  y líderes y lideresas sociales.
                </Typography>
              </li>
              <li>
                <Typography sx={{ marginTop: 1, marginBottom: 1 }}>
                  Organizaciones sociales: de víctimas, JAC, campesinos,
                  veedurias entre otros.
                </Typography>
              </li>
              <li>
                <Typography sx={{ marginTop: 1, marginBottom: 1 }}>
                  Medios de comunicación: empresas y organizaciones de
                  comunicación que solicitan semanalmente información sobre la
                  situación de los derechos humanos, de los líderes/as sociales
                  y defensores, el contexto social, político y económico sobre
                  migración y situación de la frontera, entre otros.
                </Typography>
              </li>
              <li>
                <Typography sx={{ marginTop: 1, marginBottom: 1 }}>
                  ONG´s nacionales: con presencia nacional de justicia, viva la
                  ciudadanía, CREDHOS, entre otros.
                </Typography>
              </li>
              <li>
                <Typography sx={{ marginTop: 1, marginBottom: 1 }}>
                  ONG´s regionales: con presencia en el departamento, PROGRESAR,
                  COSPAS, PARCOMUN, entre otros.
                </Typography>
              </li>
              <li>
                <Typography sx={{ marginTop: 1, marginBottom: 1 }}>
                  Organismos de cooperación internacional: organismos del
                  Sistema Nacional de Naciones Unidas, entidades de cooperación
                  bilateral(USAID, GIZ, AECID), entidades de cooperación
                  descentralizadas(CARITAS, Cruz Roja Internacional, entre
                  otros).
                </Typography>
              </li>
              <li>
                <Typography sx={{ marginTop: 1, marginBottom: 1 }}>
                  ONG´s regionales: con pregrados en ciencias humanas(derecho,
                  social, economía) y grupos de investigación de temas de derechos
                  humanos, construcción de paz, tales como la UFPS, Unisimón,
                  Unilibrio, Unifamplona, ESAP.
                </Typography>
              </li>
              <li>
                <Typography sx={{ marginTop: 1, marginBottom: 1 }}>
                  Entidades territoriales: la gobernación y la alcaldía que por
                  mandato constitucional deben ofrecer atención integral a
                  víctimas del conflicto armado y otros tipos de actores
                  sociales(LGBTI, vendedores ambulantes, entre otros).
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};
