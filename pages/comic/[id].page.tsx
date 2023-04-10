import React from "react";
import CardComic from "dh-marvel/components/cardComic/cardComic";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { getComic, getComics } from "dh-marvel/services/marvel/marvel.service";
import { Comic } from "types/typeComics";

export default function Index(data: Comic) {
  return <CardComic {...data} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: comics } = await getComics(0, 100);

  const data = comics?.results;

  const paths = data.map((comic: any) => {
    return {
      params: {
        id: comic.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

type Params = {
  id: string;
};

export const getStaticProps = async (ctx: GetStaticPropsContext<Params>) => {
  const { params } = ctx;

  const comic = await getComic(Number(params?.id));

  if (!comic) return;

  return {
    props: comic,
  };
};
