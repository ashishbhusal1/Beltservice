import React from "react";
import HeroSection from "../components/reusable/HeroSection";
import { HeroFaqContent } from "../components/storage/HomeDb";
import Faq from "../components/faq/contact/Faq";

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
      <Faq />
    </>
  );
}

export default FaqPage;
