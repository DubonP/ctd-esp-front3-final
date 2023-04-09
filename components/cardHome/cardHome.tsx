import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation/BottomNavigation";

type CardHomeProps = {
  title: string;
  image: string;
  id: number;
};

export default function cardHome({ title, image, id }: CardHomeProps) {
  return (
    <Card sx={{ maxWidth: "345px", height: "450px" }}>
      <CardMedia
        component="img"
        height="200px"
        image={image}
        alt="green iguana"
        sx={{
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <BottomNavigation />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-around",
          bottom: "0px",
        }}
      >
        <Button variant="contained" size="medium">
          Buy
        </Button>
        <Button
          variant="contained"
          size="medium"
          onClick={() => `/comic/${id}`}
        >
          Details
        </Button>
      </CardActions>
      <BottomNavigation />
    </Card>
  );
}
