import React from "react";
import CardHero from "dh-marvel/components/cardHero/cardHero";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import {
  getCharacter,
  getComics,
} from "dh-marvel/services/marvel/marvel.service";
import { Comic } from "types/typeComics";

export default function Index(data: Comic) {
  console.log(data);
  return <CardHero {...data} />;
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

type Params = {
  id: string;
};

export const getStaticProps = async (ctx: GetStaticPropsContext<Params>) => {
  const { params } = ctx;

  const comic = await getCharacter(Number(params?.id));

  if (!comic) return;

  return {
    props: comic,
  };
};
