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
        <div>
          {data?.map((comic: any) => (
            <div key={comic.id}>
              {cardHome({
                title: comic.title,
                image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
                id: comic.id,
              })}
            </div>
          ))}
        </div>
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
