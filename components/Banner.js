import React from "react";
import Image from "next/image";
import hedPic from "../public/header.jpg";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[900px]">
      <Image src={hedPic} layout="fill" objectFit="cover" />
      <div className="absolute top-1/4 w-full text-left ml-40 ">
        <p className="text-2xl sm:text-7xl text-white">Olympian & </p>
        <p className="text-2xl sm:text-7xl  text-white">Paralumpian </p>
        <p className="text-2xl sm:text-7xl  text-white">Online </p>
        <p className="text-2xl sm:text-7xl  text-white"> Expiriences </p>
        <button className="text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 px-8 py-3 shadow-md rounded-full font-bold my-4  hover:shadow-xl active:scale-90 transition duration-150 hover:underline ">
          Explore now
        </button>
      </div>
    </div>
  );
}

export default Banner;
