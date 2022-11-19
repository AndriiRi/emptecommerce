import React from "react";
import Image from "next/image";
import Unit from "../public/image/UNIT1.jpg";
import DelIcon from "../public/icons/EXIT_ICON.svg";

const CardItem = () => {
  return (
    <div className="grid grid-cols-5  h-28 w-full border-4 border-black solid ">
      <Image
        className=" w-28 h-full object-contain border-4 border-black solid"
        src={Unit}
      />
      <p className=" flex items-center justify-center">
        empt blood betrayal jacket
      </p>
      <p className=" flex items-center justify-center">M</p>
      <p className=" flex items-center justify-center">₴3499</p>
      <div className=" flex items-center justify-center">
        <DelIcon />
      </div>
    </div>
  );
};

export default CardItem;
