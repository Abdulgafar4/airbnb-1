import React from "react";
import Image from "next/image";
import bannerPic from "../public/header.jpg";
import { ArrowCircleDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";

function Banner() {
  const router = useRouter();
  return (
    <div className="relative h-[330px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[840px]">
      <Image src={bannerPic} layout="fill" objectFit="cover" />
      <div
        className=" absolute top-1/4 w-auto ml-10 h-auto p-4 bg-white/20 backdrop-blur-md rounded"
        objectPosition="left"
      >
        <p className="text-2xl md:text-3xl lg:text-7xl text-white ">
          Olympian &{" "}
        </p>
        <p className="text-2xl sm:text-3xl lg:text-7xl   text-white">
          Paralumpian{" "}
        </p>
        <p className="text-2xl sm:text-3xl lg:text-7xl  text-white">Online </p>
        <p className="text-2xl sm:text-3xl lg:text-7xl  text-white">
          {" "}
          Expiriences{" "}
        </p>
        <button
          className="text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 px-8 py-3 shadow-md rounded-full font-bold my-4  hover:shadow-xl active:scale-90 transition duration-150 hover:underline "
          onClick={() => router.push("/explore")}
        >
          Explore now
        </button>
      </div>
      <div className="absolute bottom-0 right-0 h-16 w-16 ">
        <ArrowCircleDownIcon className="h-9 animate-bounce text-white cursor-pointer " />
      </div>
    </div>
  );
}

export default Banner;
