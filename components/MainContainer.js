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
              <Logo />
            </Link>

            <div className=" flex flex-col items-center text-4xl">
              <Link href={"/about"}>About</Link>
              <Link href={"/contacts"}>Contacts</Link>
            </div>
            <div className=" flex-col  min-w-full   absolute bottom-10 ">
              <Link
                className="flex items-center justify-center my-8"
                href={"/card"}
              >
                <Card />
              </Link>
              <Link
                className="flex items-center justify-center "
                href={"/shop"}
              >
                <Arrow />
              </Link>
            </div>
          </aside>
          <div className="w-full grid grid-rows-1">{children}</div>
        </div>
        <footer className="flex justify-between px-8 h-40 items-center min-w-full border-4 border-black solid bg-stone-400">
          <Logo />

          <div>2021</div>

          <p>Contacts</p>
        </footer>
      </div>
    </>
  );
};

export default MainContainer;
