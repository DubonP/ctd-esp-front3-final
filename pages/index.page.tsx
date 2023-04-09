import type { NextPage } from "next";
import Head from "next/head";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import type { GetServerSideProps } from "next";
import { getComics } from "dh-marvel/services/marvel/marvel.service";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import cardHome from "dh-marvel/components/cardHome/cardHome";
import { Button } from "@mui/material";
import { useState } from "react";

type Props = {
  comics: any;
};

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
        <Grid2
          container
          spacing={2}
          sx={{
            marginTop: "20px",
          }}
        >
          {data?.map((comic: any) => (
            <Grid2 xs={12} sm={6} md={4} key={comic.id}>
              {cardHome({
                title: comic.title,
                image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
                id: comic.id,
              })}
            </Grid2>
          ))}
        </Grid2>
        <Button variant="contained" size="medium" id="load-more">
          Load more
        </Button>
      </BodySingle>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: comics } = await getComics(0, 100);

  const data = comics.results;

  return {
    props: {
      data: data,
    },
  };
};
