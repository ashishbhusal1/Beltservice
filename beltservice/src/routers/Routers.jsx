import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import FaqPage from "../pages/FaqPage";
import ContactPage from "../pages/ContactPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/faqs" element={<FaqPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default Routers;
