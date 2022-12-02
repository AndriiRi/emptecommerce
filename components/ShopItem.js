import React from "react";
import Image from "next/image";
import Link from "next/link";
import Swetre from "../public/image/EmptSwetre.jpg";
const ShopItem = ({ items }) => {
  return (
    <>
      {items &&
        items.data.map((item) => {
          return (
            <div key={item.id} className=" border-4 border-black solid">
              <Link href={`shop/empt_unti:` + item.id}>
                <Image src={Swetre} alt="image" priority />
                <div className="flex  justify-center items-center">
                  <p className="uppercase">{item.attributes.name}</p>
                  <p className="ml-2 text-xl font-bold">
                    {" "}
                    ₴{item.attributes.priceUah}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default ShopItem;
