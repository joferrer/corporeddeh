import React, { useState } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { Box, Typography } from "@mui/material";

const ButtonFile = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (onFileSelect) {
      onFileSelect(file);
    }
  };

  return (
    <Box>
      <Input
        id="file-input"
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
        inputProps={{ accept: "application/pdf" }}
      />
      <label htmlFor="file-input">
        <Button
          variant="contained"
          component="span"
          fullWidth
          sx={{
            background: selectedFile != null ? "purple" : "silver",
            color: selectedFile != null ? "white" : "black",
          }}
        >
          Seleccionar Archivo
        </Button>
      </label>
      {selectedFile != null ? (
        <Box sx={{ marginTop: 2, marginBottom: 1 }}>
          <Typography fontWeight={"bold"} fontStyle={"oblique"}>
            Archivo seleccionado:
          </Typography>
          <Typography textAlign={"justify"}>{selectedFile.name}</Typography>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default ButtonFile;
