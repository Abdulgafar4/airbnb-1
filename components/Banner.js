import React from "react";
import Image from "next/image";
import hedPic from "../public/header.jpg";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src={hedPic} layout="fill" objectFit="cover" />
      <div className="absolute top-1/4 w-full text-left ml-20 ">
        <p className="text-lg sm:text-7xl text-white">Olympian & </p>
        <p className="text-lg sm:text-7xl  text-white">Paralumpian </p>
        <p className="text-lg sm:text-7xl  text-white">Online </p>
        <p className="text-lg sm:text-7xl  text-white"> Expiriences </p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
