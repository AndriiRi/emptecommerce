import Head from "next/head";
import React from "react";
import Link from "next/link";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"empt, sweatre" + keywords}></meta>
        <title>EMPT</title>
      </Head>
      <div className="w-1440px h-screen bg-slate-400">
        <div>
          <aside>
            <Link className="text-2xl" href={"/"}>
              LOGO
            </Link>

            <div className="bg-black text-3xl">
              <p className="text-2xl bg-blend-color-burn">About</p>
              <p>Contacts</p>
            </div>

            <Link href={"/shop"}>CARD</Link>
          </aside>
          <div>{children}</div>
        </div>
        <footer>EMPT</footer>
      </div>
    </>
  );
};

export default MainContainer;
