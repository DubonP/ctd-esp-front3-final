import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation/BottomNavigation";
import { useRouter } from "next/router";
import { Container, Grid, Link } from "@mui/material";

type CardHomeProps = {
  title: string;
  image: string;
  id: number;
};

export default function cardHome({ title, image, id }: CardHomeProps) {
  const { push } = useRouter();

  return (
    <Container>
      <Card sx={{ maxWidth: "345px", height: "450px", minWidth: "200px" }}>
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
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            variant="contained"
            size="medium"
            onClick={() => push(`/checkout/${id}`)}
          >
            Buy
          </Button>
          <Button
            variant="contained"
            size="medium"
            onClick={() => push(`/comic/${id}`)}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
