import { Box } from "@mui/material";
import React from "react";

const Container = ({ children }) => {
  return (
    <Box
      sx={{
        padding: 2,
        marginLeft: 2,
        marginRight: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
