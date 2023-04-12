import * as React from "react";
import { Typography, Box, Grid, Stack, Paper } from "@mui/material";
import { useRouter } from "next/router";
import { Comic } from "types/typeComics";
import Image from "next/image";
import { styled } from "@mui/material/styles";

export default function CardHero({
  name,
  comics,
  thumbnail,
  description,
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
      <Grid md={6}>
        <Box display={"flex"} gap={"3px"} flexDirection={"column"}>
          <Typography variant="h6">Name: {name}</Typography>
          <Typography variant="subtitle1">
            Description: {description}
          </Typography>

          <Typography variant="subtitle1">
            Others comics from {name}:
          </Typography>
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="column"
            sx={{ width: 300 }}
          >
            {comics?.items.map((character) => {
              const characterId = character.resourceURI
                ? encodeURIComponent(getId(character.resourceURI)!)
                : "";
              return <Item>{`${character.name}`}</Item>;
            })}
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
