import Head from "next/head";
import React from "react";
import Link from "next/link";
import Logo from "../public/icons/emptlogo.svg";
import Card from "../public/icons/cardIcon.svg";
import Arrow from "../public/icons/arrow.svg";
const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"empt, sweatre" + keywords}></meta>
        <title>EMPT</title>
      </Head>
      <div className=" mx-auto max-w-7xl min-h-screen border-4 border-black solid  ">
        <div className="flex">
          <aside className=" sticky top-0 flex-col  w-1/5 h-screen border-4 border-black solid">
            <Link className="flex justify-center " href={"/"}>
              <Logo className="object-cover" />
            </Link>

            <div className=" flex flex-col items-center">
              <p>About</p>
              <p>Contacts</p>
            </div>
            <div className=" flex-col  min-w-full   absolute bottom-10 ">
              <Link className="flex items-center justify-center" href={"/shop"}>
                <Card />
              </Link>
              <Link className="flex items-center justify-center" href={"/shop"}>
                <Arrow />
              </Link>
            </div>
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
