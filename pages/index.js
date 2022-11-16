import React from "react";
import MainContainer from "../components/MainContainer";
import Link from "next/link";
import Image from "next/image";
import staf from "../public/image/swetre.jpg";
import white from "../public/image/white.jpg";
export default function Home() {
  return (
    <MainContainer>
      <div>
        <Link href="/shop">
          <div>
            <div className="text-3xl caret-lime-500">EMPT S/S 21`</div>

            <Image priority />
          </div>
        </Link>
        <div>
          <Image priority />
        </div>
      </div>
    </MainContainer>
  );
}
