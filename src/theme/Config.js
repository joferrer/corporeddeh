import { useMediaQuery } from "@mui/material";

export const MediaQuerys = () => {
  const Mobile = useMediaQuery("maxWidth-642px");

  return { Mobile };
  
};
