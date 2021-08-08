import React from "react";
import Image from "next/image";
import go from "../public/london.jpg";
function More({ img, location, title, description, star, price, total }) {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[840px]">
      <Image src={go} layout="fill" objectFit="cover" />
      <div
        className=" absolute top-32 left-12 right-12 h-auto p-4 bg-white/20 backdrop-blur-md rounded"
        objectPosition="left"
      >
        <p className="text-2xl md:text-4xl lg:text-2xl text-white ">
          London is one of the world's most important global cities.
        </p>
        <p className="hidden lg:inline lg:text-2xl text-white ">
          It exerts considerable influence on the arts, commerce, education,
          entertainment, fashion, finance, healthcare, media, professional
          services, research and development, tourism, and transportation. It is
          one of the largest financial centres in the world and in 2019, London
          had the second highest number of ultra high-net-worth individuals in
          Europe, after Paris. And in 2020, London had the second-highest number
          of billionaires of any city in Europe, after Moscow.London's
          universities form the largest concentration of higher education
          institutes in Europe, and London is home to highly ranked institutions
          such as Imperial College London in natural and applied sciences, the
          London School of Economics in social sciences, as well as the
          comprehensive University College London. In 2012, London became the
          first city to have hosted three modern Summer Olympic Games.{" "}
        </p>
      </div>
    </div>
  );
}

export default More;
