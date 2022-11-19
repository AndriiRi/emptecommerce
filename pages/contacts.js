import React from "react";
import MainContainer from "../components/MainContainer";

const contacts = () => {
  return (
    <MainContainer>
      <div className="flex flex-col justify-center text-5xl px-8 border-4 border-black solid">
        <div>
          <p>instagram :</p>
          <p>empt.empt.empt</p>
        </div>
        <div className=" my-8">
          <p>E-mail :</p>
          <p>emptwrld.com@gmail.com</p>
        </div>
      </div>
    </MainContainer>
  );
};

export default contacts;
