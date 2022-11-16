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
      <div className=" mx-auto max-w-7xl min-h-screen border-4 border-black solid  ">
        <div className="flex">
          <aside className=" sticky top-0 grid grid-rows-12 grid-cols-1 w-1/5 h-screen border-4 border-black solid">
            <Link className="flex justify-center mt-5" href={"/"}>
              LOGO
            </Link>

            <div className="flex justify-center">
              <p className="">About</p>
              <p>Contacts</p>
            </div>

            <Link className="flex justify-center" href={"/shop"}>
              CARD
            </Link>
          </aside>
          <div className="w-full grid grid-rows-1">{children}</div>
        </div>
        <footer className="flex justify-center h-40 items-center min-w-full border-4 border-black solid bg-stone-400">
          EMPT
        </footer>
      </div>
    </>
  );
};

export default MainContainer;
