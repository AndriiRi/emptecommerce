import Head from "next/head";
import React from "react";
import Link from "next/link";
import style from "../styles/MainContainer.module.css";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <div className={style.container}>
        <Head>
          <meta keywords={"empt, sweatre" + keywords}></meta>
          <title>EMPT</title>
        </Head>

        <aside className={style.sideBar}>
          <Link className={style.logoButton} href={"/"}>
            LOGO
          </Link>

          <div className={style.infoPlace}>
            <p>About</p>
            <p>Contacts</p>
          </div>

          <Link className={style.cardButton} href={"/shop"}>
            CARD
          </Link>
        </aside>
        <div className={style.childrenEllement}>{children}</div>
      </div>
      <footer className={style.botomnFooter}>EMPT</footer>
    </>
  );
};

export default MainContainer;
