import React, { useState } from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FloatingButton = ({ link }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          display: "flex",
          alignItems: "center",
          position: "fixed",
          bottom: "50%", // Ajusta el valor inferior para posicionarlo más arriba
          right: "20px",
          zIndex: 3,
        }}
      >
        <Tooltip title="Comunicate con Nosotros" arrow placement="left">
          <IconButton
            sx={{
              width: "70px",
              height: "70px",
              backgroundColor: "green",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "100%",
              cursor: "pointer",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              ":hover": {
                transform: "scale(1.1)",
                background: "#257003",
              },
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <WhatsAppIcon sx={{ color: "white", width: 50, height: 50 }} />
          </IconButton>
        </Tooltip>
      </Box>
    </a>
  );
};

export default FloatingButton;
