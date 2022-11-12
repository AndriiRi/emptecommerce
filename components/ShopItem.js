import React from "react";
import { useRouter } from "next/router";
import style from "../styles/ShopItem.module.css";
import Item from "../public/image/EmptSwetre.jpg";
import Image from "next/image";
const ShopItem = () => {
  const { query } = useRouter();
  console.log(query);
  return (
    <div className={style.shopItem}>
      <div className={style.itemImageContainer}>
        <div className={style.itemName}>EMPT Logo Sweatre</div>
        <Image className={style.itemImage} src={Item} alt="image" />
      </div>
    </div>
  );
};

export default ShopItem;
