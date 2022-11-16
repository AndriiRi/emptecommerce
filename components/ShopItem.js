import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
const ShopItem = () => {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      <div>
        <div>EMPT Logo Sweatre</div>
        <Image alt="image" priority />
      </div>
    </div>
  );
};

export default ShopItem;
