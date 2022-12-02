import Link from "next/link";
import React, { useState } from "react";
import MainContainer from "../components/MainContainer";
import ShopItem from "../components/ShopItem";
import { fetcher } from "../lib/api";

const Shop = ({ items }) => {
  return (
    <MainContainer>
      <div className="grid sm:grid-cols-2">
        <ShopItem items={items} />
      </div>
    </MainContainer>
  );
};

export default Shop;

export async function getStaticProps() {
  const itemResponce = await fetcher(
    `${process.env.EMPT_PUBLIC_STRAPI_URL}/items?fields=name&fields=priceUah&populate=photo`
  );
  console.log(itemResponce);

  return {
    props: {
      items: itemResponce,
    },
  };
}
