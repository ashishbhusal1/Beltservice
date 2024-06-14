import React from "react";
import HeroSection from "../components/reusable/HeroSection";
import { HeroCardContent } from "../components/storage/HomeDb";
import Faq from "../components/home/faq/Faq";
import Services from "../components/about/services/Services";
import Awards from "../components/about/awards/Awards";
import Clients from "../components/about/clients/Clients";

function AboutPage() {
  return (
    <>
      <HeroSection
        title={HeroCardContent.title}
        description={HeroCardContent.description}
        buttonText={HeroCardContent.button}
        img1={HeroCardContent.img1}
        img2={HeroCardContent.img2}
      />
      <Services />
      <Awards />
      <Clients />
      <Faq />
    </>
  );
}

export default AboutPage;
