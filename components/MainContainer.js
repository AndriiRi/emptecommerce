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
      <div className=" mx-auto max-w-7xl min-h-screen border-4 border-black solid    ">
        <div className=" md:flex">
          <aside className=" bg-white flex   sticky top-0 md:flex-col  md:w-1/5 md:h-screen border-4 border-black solid ">
            <Link className="  md:flex  md:justify-center  " href={"/"}>
              <Logo />
            </Link>

            <div className=" hidden md:flex md:flex-col items-center text-4xl">
              <Link href={"/about"}>About</Link>
              <Link href={"/contacts"}>Contacts</Link>
            </div>
            <div className=" right-6 md:flex-col  md:min-w-full   absolute bottom-10 ">
              <Link
                className="  md:flex md:items-center md:justify-center md:my-8"
                href={"/card"}
              >
                <Card />
              </Link>
              <Link
                className=" hidden md:flex items-center justify-center "
                href={"/shop"}
              >
                <Arrow />
              </Link>
            </div>
          </aside>
          <div className="w-full grid grid-rows-1">{children}</div>
        </div>
        <footer className="md:flex md:justify-between px-8 md:h-40 items-center min-w-full border-4 border-black solid bg-stone-400">
          <Logo />

          <div>2021</div>

          <Link href={"/contacts"}>Contacts</Link>
        </footer>
      </div>
    </>
  );
};

export default MainContainer;
