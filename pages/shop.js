import Link from "next/link";
import React from "react";
import { useState } from "react";
import MainContainer from "../components/MainContainer";
import style from "../styles/Shop.module.css";
import ShopItem from "../components/ShopItem";
const shop = () => {
  const [items] = useState([
    { id: 1, name: "hoodie" },
    { id: 2, name: "Blood batryal sweeter" },
    { id: 3, name: "White hoodie" },
    { id: 4, name: " sweeter" },
  ]);
  return (
    <MainContainer>
      <div className={style.itemsList}>
        {items.map((item) => (
          <div key={item.id}>
            <Link href={`/items/${item.id}`}>
              <ShopItem />
            </Link>
          </div>
        ))}
      </div>
    </MainContainer>
  );
};

export default shop;
