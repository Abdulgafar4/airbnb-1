import React from "react";
import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <section className="relative py-16 cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute bottom-20 left-4 h-24 p-2 bg-white/20 backdrop-blur-md rounded">
        <h3 className="text-4xl mb-3 w-64 text-white">{title}</h3>
      </div>
    </section>
  );
}

export default MediumCard;
