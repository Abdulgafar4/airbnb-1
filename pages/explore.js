import React from "react";
import go from "../public/go.jpg";
import Image from "next/image";
import Header from "../components/Header";
import one from "../public/1.jpg";
import two from "../public/2.jpg";
import tree from "../public/3.jpg";
import four from "../public/4.jpg";
import five from "../public/5.jpg";
import Footer from "../components/Footer";
import FooterSection from "../components/FooterSection";

function explore() {
  return (
    <div>
      <Header />
      <section className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="relative pt-4 cursor-pointer hover:scale-105 transform transition duration-300 ease-out ">
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
              In the sportlight
            </h3>
            <p>
              Get to know the athletes like never before in these live,
              interactive Experiences.
            </p>
            <button
              className="text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 px-8 py-3 shadow-md rounded-full font-bold my-4  hover:shadow-xl active:scale-90 transition duration-150 hover:underline "
              onClick={() => router.push("/moreInfo")}
            >
              Let`s go!
            </button>
          </div>
        </section>
        <section className="relative py-2 cursor-pointer hover:scale-105 transform transition duration-300 ease-out ">
          <div className="relative h-96 min-w-[300px]">
            <Image
              src={one}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
          <div className="absolute top-32 left-12 h-auto p-4 bg-white/20 backdrop-blur-md rounded">
            <h3 className="text-4xl mb-3 w-64 text-white hover:text-pink-600">
              Refugee athletes
            </h3>
            <p>
              Spend time with the athletes and discover extraordinary stories of
              strength.
            </p>
            <button
              className="text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 px-8 py-3 shadow-md rounded-full font-bold my-4  hover:shadow-xl active:scale-90 transition duration-150 hover:underline "
              onClick={() => router.push("/moreInfo")}
            >
              Let`s go!
            </button>
          </div>
        </section>
        <section className="relative py-2 cursor-pointer hover:scale-105 transform transition duration-300 ease-out ">
          <div className="relative h-96 min-w-[300px]">
            <Image
              src={two}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
          <div className="absolute top-32 left-12 h-auto p-4 bg-white/20 backdrop-blur-md rounded">
            <h3 className="text-4xl mb-3 w-64 text-white hover:text-pink-600">
              Live from Tokyo
            </h3>
            <p>
              Bring the Games to you with these on-site Experiences. Only
              available in the United States.
            </p>
            <button
              className="text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 px-8 py-3 shadow-md rounded-full font-bold my-4  hover:shadow-xl active:scale-90 transition duration-150 hover:underline "
              onClick={() => router.push("/moreInfo")}
            >
              Let`s go!
            </button>
          </div>
        </section>
        <section className="relative py-2 cursor-pointer hover:scale-105 transform transition duration-300 ease-out ">
          <div className="relative h-96 min-w-[300px]">
            <Image
              src={tree}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
          <div className="absolute top-32 left-12 h-auto p-4 bg-white/20 backdrop-blur-md rounded">
            <h3 className="text-4xl mb-3 w-64 text-white hover:text-pink-600">
              Athlete perspectives
            </h3>
            <p>
              Hang out with all-time greats and rising stars from all over the
              wor
            </p>
            <button
              className="text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 px-8 py-3 shadow-md rounded-full font-bold my-4  hover:shadow-xl active:scale-90 transition duration-150 hover:underline "
              onClick={() => router.push("/moreInfo")}
            >
              Let`s go!
            </button>
          </div>
        </section>
        <section className="relative py-2 cursor-pointer hover:scale-105 transform transition duration-300 ease-out ">
          <div className="relative h-96 min-w-[300px]">
            <Image
              src={five}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
          <div className="absolute top-32 left-12 h-auto p-4 bg-white/20 backdrop-blur-md rounded">
            <h3 className="text-4xl mb-3 w-64 text-white hover:text-pink-600">
              Recommended for you
            </h3>
            <p>
              More experiences we think you’ll love, hosted by some of the
              world’s best athletes.
            </p>
            <button
              className="text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 px-8 py-3 shadow-md rounded-full font-bold my-4  hover:shadow-xl active:scale-90 transition duration-150 hover:underline "
              onClick={() => router.push("/moreInfo")}
            >
              Let`s go!
            </button>
          </div>
        </section>
      </section>
      <Footer />
      <FooterSection />
    </div>
  );
}

export default explore;
