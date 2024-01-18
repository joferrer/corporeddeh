import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CardAction({ titulo, fecha, descripcion, imagen, id }) {
  const handleClick = (id = 0) => {
    window.location.href = "/evento?id=" + id;
  };
  return (
    <Card
      sx={{ maxWidth: 700, width: "100%", zIndex: 0 }}
      onClick={() => handleClick(id)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="170px"
          image={imagen}
          alt="imagenEvento"
        />
        <CardContent sx={{ textAlign: "start" }}>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography gutterBottom variant="body3" component="div">
            {fecha}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
