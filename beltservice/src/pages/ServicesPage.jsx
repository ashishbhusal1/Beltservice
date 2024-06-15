import React from "react";
import HeroSection from "../components/reusable/HeroSection";
import { HeroServicesContent } from "../components/storage/HomeDb";
import Services from "../components/services/Services";
import Report from "../components/services/Report";

function ServicesPage() {
  return (
    <>
      <HeroSection
        title={HeroServicesContent.title}
        description={HeroServicesContent.description}
        buttonText={HeroServicesContent.button}
        img1={HeroServicesContent.img1}
        img2={HeroServicesContent.img2}
      />
      <Services />
      <Report />
    </>
  );
}

export default ServicesPage;
