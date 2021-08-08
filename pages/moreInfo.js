import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

import More from "../components/More";

function MoreInfo() {
  return (
    <div>
      <Header />
      <main className="flex"></main>
      <section className=" flex-grow pt-0 px-0">
        <div className="flex flex-col">
          <More />
        </div>
      </section>
      <Footer />
      <FooterSection />
    </div>
  );
}

export default MoreInfo;
