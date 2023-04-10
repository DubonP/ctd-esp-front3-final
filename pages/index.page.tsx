import Head from "next/head";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import type { GetServerSideProps } from "next";
import { getComics } from "dh-marvel/services/marvel/marvel.service";
import cardHome from "dh-marvel/components/cardHome/cardHome";
import { Button, Grid, Box } from "@mui/material";

type ComicsProps = {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export default function Home({ data }: { data: ComicsProps[] }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <BodySingle>
        <Grid
          sx={{
            marginTop: "20px",
          }}
          container
          spacing={2}
        >
          {data?.map((comic: any) => (
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                height: "100%",
              }}
              key={comic.id}
            >
              {cardHome({
                title: comic.title,
                image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
                id: comic.id,
              })}
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" size="medium" id="load-more">
          Load more
        </Button>
      </BodySingle>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: comics } = await getComics(0, 12);

  const data = comics.results;

  return {
    props: {
      data: data,
    },
  };
};
