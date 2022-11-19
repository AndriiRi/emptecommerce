import React from "react";
import Image from "next/image";
import Unit from "../public/image/UNIT1.jpg";
import DelIcon from "../public/icons/EXIT_ICON.svg";

const CardItem = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 md:grid-cols-5 md:grid-rows-1 h-28 w-full border-4 border-black solid ">
      <Image
        className="row-start-1 row-end-3 w-28 h-full object-contain border-4 border-black solid"
        src={Unit}
        alt="image"
      />
      <p className="col-start-2 col-end-4 flex items-center justify-center">
        empt blood betrayal jacket
      </p>
      <p className="row-start-2 flex items-center justify-center">M</p>
      <p className=" row-start-2 flex items-center justify-center">₴3499</p>
      <div className="col-start-4 row-start-1 row-end-3 flex items-center justify-center">
        <DelIcon />
      </div>
    </div>
  );
};

export default CardItem;
