import React from "react";
import HeroSection from "../components/reusable/HeroSection";
import { HeroCardContent } from "../components/storage/HomeDb";

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
    </>
  );
}

export default AboutPage;
