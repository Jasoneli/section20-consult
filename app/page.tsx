import AboutUS from "@/components/AboutUS";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Resources from "@/components/Resources";
import Team from "@/components/Team";
import React from "react";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUS />
      <Contact />
      <Resources />
      <Team />
    </>
  );
};

export default Home;
