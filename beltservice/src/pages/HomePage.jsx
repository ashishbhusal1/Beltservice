import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/home/hero/Hero";
import Service from "../components/home/service/Service";
import Gallery from "../components/home/gallery/Gallery";

function HomePage() {
  return (
    <>
    <Hero />
    <Service />
    <Gallery />
    </>
  );
}

export default HomePage;
