import React from "react";
import HeroSection from "../components/reusable/HeroSection";
import { HeroContactContent } from "../components/storage/HomeDb";
import Level from "../components/contact/level/Level";
import Form from "../components/contact/form/Form";

function ContactPage() {
  return (
    <>
      <HeroSection
        title={HeroContactContent.title}
        description={HeroContactContent.description}
        buttonText={HeroContactContent.button}
        img1={HeroContactContent.img1}
        img2={HeroContactContent.img2}
      />
      <Level />
      <Form />
    </>
  );
}

export default ContactPage;
