import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Swetre from "../public/image/EmptSwetre.jpg";
const ShopItem = () => {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      <div className=" border-4 border-black solid">
        <Image src={Swetre} alt="image" priority />
        <div className="flex  justify-center items-center">
          EMPT Logo Sweatre
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
