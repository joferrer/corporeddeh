import { Typography } from '@mui/material';
import React from 'react';

export const Parrafos = ({children}) => {
    return (
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
       {children}
      </Typography>
    );
}


