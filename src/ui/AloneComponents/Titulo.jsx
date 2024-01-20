import { Typography } from '@mui/material';
import React from 'react';

export const Titulo = ({children}) => {
    return (
      <Typography
        sx={{
          textAlign: "left",
          fontSize: "25pt",
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
        {children}
      </Typography>
    );
}


