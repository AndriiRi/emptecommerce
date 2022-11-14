import React from "react";
import MainContainer from "../components/MainContainer";
import style from "../styles/MainBanners.module.css";
import Link from "next/link";
import Image from "next/image";
import staf from "../public/image/swetre.jpg";
import white from "../public/image/white.jpg";
export default function Home() {
  return (
    <MainContainer>
      <div className={style.container}>
        <Link href="/shop">
          <div className={style.rightBanner}>
            <div className={style.textBanner}>EMPT S/S 21`</div>

            <Image
              className={style.bannerImg}
              src={white}
              alt="image"
              priority
            />
          </div>
        </Link>
        <div className={style.leftBanner}>
          <Image className={style.bannerImg} src={staf} alt="image" priority />
        </div>
      </div>
    </MainContainer>
  );
}
