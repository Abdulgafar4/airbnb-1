import React from "react";
import Image from "next/image";
import { getOverlappingDaysInIntervals } from "date-fns";
import go from "../public/go.jpg";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={go}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12 h-auto p-4 bg-white/20 backdrop-blur-md rounded">
        <h3 className="text-4xl mb-3 w-64 text-white hover:text-pink-600">
          {title}
        </h3>
        <p>{description}</p>
        <button className="text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 px-8 py-3 shadow-md rounded-full font-bold my-4  hover:shadow-xl active:scale-90 transition duration-150 hover:underline ">
          Let`s go!
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
