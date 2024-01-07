import React, { useEffect, useState } from "react";
import { Box, Grid, IconButton, TextField, Typography } from "@mui/material";
import logo from "../../../../public/logo-SinFondo.png";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import GridItemEdit from "./../../../ui/AloneComponents/GridItemEdit";
const GridAboutAsEdit = ({ events, updateInfo }) => {
  const [edit, setEdit] = useState({ q: false, m: false, v: false });
  const [data, setData] = useState(events);

  useEffect(() => {
    setData(events);
  }, [events]);

  const updateData = (actu, index) => {
    updateInfo(actu, index, data[index].id).then((result) => {
      if (result.status === "loaded") {
        swal("Cambio Realizado Correctamente", {
          icon: "success",
        });
      }
    });
  };

  return (
    <Grid container spacing={5}>
      <GridItemEdit
        color={"#F1D800"}
        ds={data[0]?.descripcion}
        titulo={"¿Quienes Somos?"}
        enabled={edit.q}
        setEdit={() => setEdit((prevEdit) => ({ ...prevEdit, q: !prevEdit.q }))}
        handleSave={(newData) => {
          updateData(newData, 0);
          setEdit((prevEdit) => ({ ...prevEdit, q: true }));
        }}
      />
      <GridItemEdit
        color={"#8491DF"}
        ds={data[2]?.descripcion}
        titulo={"Misión"}
        enabled={edit.m}
        setEdit={() => setEdit((prevEdit) => ({ ...prevEdit, m: !prevEdit.m }))}
        handleSave={(newData) => {
          updateData(newData, 2);
          setEdit((prevEdit) => ({ ...prevEdit, m: true }));
        }}
      />
      <GridItemEdit
        color={"#E1432F"}
        ds={data[1]?.descripcion}
        titulo={"Visión"}
        enabled={edit.v}
        setEdit={() => setEdit((prevEdit) => ({ ...prevEdit, v: !prevEdit.v }))}
        handleSave={(newData) => {
          updateData(newData, 1);
          setEdit((prevEdit) => ({ ...prevEdit, v: true }));
        }}
      />
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            width: "100%",
          }}
        >
          <img
            width={"100%"}
            style={{ maxWidth: "330px" }}
            src={logo}
            alt="Logo"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default GridAboutAsEdit;
