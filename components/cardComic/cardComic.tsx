import * as React from "react";
import { Button, Typography, Box, Grid, Stack, Paper } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { Comic } from "types/typeComics";
import Image from "next/image";
import { styled } from "@mui/material/styles";

export default function CardComic({
  title,
  thumbnail,
  price,
  oldPrice,
  stock,
  characters,
  description,
  id,
}: Comic) {
  function getId(url: string) {
    const regex = /\/characters\/(\d+)/;
    const match = url.match(regex);
    if (match) {
      return match[1];
    }
    return null;
  }

  const { push } = useRouter();

  const thumb = `${thumbnail.path}.${thumbnail.extension}`;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid container padding={"1rem"}>
      <Grid md={6}>
        <Box p="1rem">
          <Image src={thumb} width={420} height={500} />
        </Box>
      </Grid>
      <Grid md={5}>
        <Box display={"flex"} gap={"3px"} flexDirection={"column"}>
          <Typography variant="h6">Title: {title}</Typography>
          <Typography variant="subtitle1">
            Description: {description}
          </Typography>

          <Typography variant="subtitle1">Characters: </Typography>

          {characters?.items.map((character) => {
            const characterId = character.resourceURI
              ? encodeURIComponent(getId(character.resourceURI)!)
              : "";
            return (
              <Link href={`/character/${characterId}`}>
                <Item
                  sx={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "blue",
                  }}
                >{`${character.name}`}</Item>
              </Link>
            );
          })}

          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                textDecoration: "line-through",
                color: "red",
              }}
            >
              Old Price: {`R$${oldPrice}`}
            </Typography>
            <Typography variant="subtitle1">Price: {`R$${price}`}</Typography>
            <Typography variant="subtitle1">Stock: {`${stock}`}</Typography>
          </Box>
          <Button
            variant="contained"
            onClick={() => push(`/checkout/${id}`)}
            disabled={stock == 0}
          >
            {stock > 0 ? "Buy" : "Stock outs"}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
