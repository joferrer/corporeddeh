import { Box, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";

const GridItemEdit = ({ color, ds, titulo, enabled, setEdit, handleSave }) => {
  const [value, setValue] = useState(ds);
  useEffect(() => {
    setValue(ds);
  }, [ds]);
  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "100%",
        maxHeight: "320px",
      }}
    >
      <Box
        sx={{
          width: "60%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: color,
          boxShadow: "0px 6px 6px -6px #888888", // Desplazamiento vertical positivo
          padding: "10px",
          "@media (max-width:1100px)": {
            width: "80%",
          },
          "@media (max-width:800px)": {
            width: "100%",
          },
        }}
      >
        <Typography sx={{ width: "100%", color: "white" }} variant="h5">
          {titulo}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "60%",
          marginTop: 3,
          textAlign: "justify",
          "@media (max-width:1100px)": {
            width: "80%",
          },
          "@media (max-width:800px)": {
            width: "100%",
          },
        }}
      >
        <TextField
          disabled={!enabled}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          variant="standard"
          multiline={true}
          rows={6}
          sx={{ width: "100%", textAlign: "justify" }}
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            marginTop: 2,
          }}
        >
          {enabled && (
            <IconButton
              onClick={() => {
                handleSave(value);
                setEdit(false);
              }}
              sx={{
                background: "#4CAF50", // Green color for Save button
                borderRadius: "10px",
                ":hover": {
                  transform: "scale(1.1)",
                  background: "#45a049",
                },
                transition: "transform 0.3s ease-in-out",
                marginRight: 1,
              }}
            >
              <SaveIcon sx={{ color: "white" }} />
            </IconButton>
          )}
          <IconButton
            onClick={() => setEdit()}
            sx={{
              background: enabled ? "#FF0000" : "#308CD7",
              borderRadius: "10px",
              ":hover": {
                transform: "scale(1.1)",
                background: enabled ? "#FF0000" : "blue",
              },
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {enabled ? (
              <CloseIcon sx={{ color: "white" }} />
            ) : (
              <EditIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </Box>
      </Box>
    </Grid>
  );
};

export default GridItemEdit;
