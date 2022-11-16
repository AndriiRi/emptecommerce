import React from "react";
import MainContainer from "../components/MainContainer";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <MainContainer>
      <div className="grid grid-cols-2">
        <Link href="/shop">
          <div className=" w-full flex justify-center items-center min-h-screen border-4 border-black solid">
            EMPT S/S 21`
            <Image priority />
          </div>
        </Link>
        <div className=" w-full min-h-screen border-4 border-black solid">
          <Image priority />
        </div>
      </div>
    </MainContainer>
  );
}
