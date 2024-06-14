import React from "react";
import HeroSection from "../components/reusable/HeroSection";
import { HeroFaqContent } from "../components/storage/HomeDb";

function FaqPage() {
  return (
    <>
      <HeroSection
        title={HeroFaqContent.title}
        description={HeroFaqContent.description}
        buttonText={HeroFaqContent.button}
        img1={HeroFaqContent.img1}
        img2={HeroFaqContent.img2}
      />
    </>
  );
}

export default FaqPage;
