import { Box } from "@mui/material";
import React from "react";
import { MediaQuerys } from "../../theme/Config";
import { useWindowSize } from "../../hooks/useWindowSize";
const Container = ({ children }) => {
  const { Mobile } = MediaQuerys;
  const { windowSize } = useWindowSize();

  return (
    <Box
      sx={{
        marginTop: windowSize.width >= 1055 ? 9 : 1,
        maxWidth: "1371px",
        padding: 2,
        marginRight: 2,
        marginLeft: Mobile ? 0 : 2,
        width: "100%",
        
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
