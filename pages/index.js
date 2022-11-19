import React from "react";
import MainContainer from "../components/MainContainer";
import Link from "next/link";
import Image from "next/image";
import Banner from "../public/image/Banner.jpg";
export default function Home() {
  return (
    <MainContainer>
      <div className="grid grid-cols-2">
        <Link href="/shop">
          <div className=" w-full flex justify-center items-center h-screen border-4 border-black solid">
            EMPT S/S 21`
            <Image priority />
          </div>
        </Link>
        <div className="flex justify-center items-center  overflow-hidden h-screen border-4 border-black solid">
          <Image
            className="object-cover h-full w-full "
            src={Banner}
            priority
          />
        </div>
      </div>
    </MainContainer>
  );
}
