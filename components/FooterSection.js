import React from "react";

import {
  GlobeAltIcon,
  PhoneIcon,
  ArrowCircleUpIcon,
} from "@heroicons/react/solid";

function FooterSection() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3  bg-white shadow-md py-3 px-32 border-t ">
      {/*left*/}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <p className="text-md hidden md:inline">
          ©2021 Airbnb,Inc. - Privacy - Terms - Sitemap - Conpany details
        </p>
      </div>

      {/*middle - search*/}
      <div className="flex justify-center  ">
        {" "}
        <ArrowCircleUpIcon className="h-9 cursor-pointer animate-bounce text-yellow-500 " />
      </div>
      {/*right*/}
      <div className="flex  items-center space-x-2 justify-end text-gray-700">
        {/* <GlobeAltIcon className="h-6 cursor-pointer" /> */}
        <p className="hidden md:inline font-bold cursor-pointer underline ">
          English (UK)
        </p>
        <p className="hidden md:inline font-bold cursor-pointer underline ">
          £ (GBP)
        </p>
        {/* <div className="flex items-center space-x-2  p-2 rounded-full">
          <PhoneIcon className="h-6 cursor-pointer" />
        </div> */}
      </div>
    </header>
  );
}

export default FooterSection;
