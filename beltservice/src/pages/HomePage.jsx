import React from "react";
import Hero from "../components/home/hero/Hero";
import Service from "../components/home/service/Service";
import Gallery from "../components/home/gallery/Gallery";
import Problem from "../components/home/problem/Problem";
import Help from "../components/home/help/Help";
import Faq from "../components/home/faq/Faq";

function HomePage() {
  return (
    <>
      <Hero />
      <Service />
      <Gallery />
      <Problem />
      <Help />
      <Faq />
    </>
  );
}

export default HomePage;
