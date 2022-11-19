import React from "react";
import MainContainer from "../components/MainContainer";
import E from "../public/icons/E.svg";
import Pustota from "../public/icons/PUSTOTA.svg";
import Sign from "../public/icons/SIGN.svg";
const about = () => {
  return (
    <MainContainer>
      <div className="flex flex-col justify-center items-center border-4 border-black solid">
        <E />
        <p className=" my-4 text-center text-base w-2/5">
          This bernd is a personal statement by an independent designer in order
          to materialize the emotions that he wants to broadcast to a specific
          audience.
        </p>
        <Pustota className="my-4 " />
        <Sign />
      </div>
    </MainContainer>
  );
};

export default about;
