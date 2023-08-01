/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ScrollRevealSection from "./ScrollRevealSection";
import { useAnimation } from "framer-motion";

const HeroSection = () => {
  return (
    <ScrollRevealSection>
      <header className="py-4 mb-10 hero h-full">
        <div className="container max-w-6xl mx-auto p-4">
          <div className="flex flex-col justify-center lg:items-center text-left lg:text-center h-80 text-background gap-5">
            <h1 className="lg:text-6xl font-bold text-3xl">
              Welcome to <span className="text-red-600">Section20 Consult</span>
              &mdash;Your Satisfaction Is Our Pride
            </h1>
            <p className="font-medium text-background text-xl">
              We are a leading study and work consulting firm dedicated to
              empowering students and professionals in achieving their academic
              and career goals. With our expert guidance and personalized
              approach, we strive to unlock your full potential and pave the way
              for a successful future.
            </p>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
              <Link
                className="px-4 py-2 font-semibold tracking-wide border-none rounded-md border-textColor hover:shadow-2xl hover:translate-y-[-2px] duration-200 transition-all bg-primary text-background text-center hover:bg-background hover:text-primary"
                href="#contact"
              >
                Contact us
              </Link>
              <Link
                className="px-4 py-2 tracking-wide border-background border-2 rounded-md  text-background  hover:shadow-2xl hover:translate-y-[-2px]  duration-200 transition-all outline-none  font-semibold text-center hover:bg-red-600"
                href="/services"
              >
                Our services
              </Link>
            </div>
          </div>
        </div>
      </header>
    </ScrollRevealSection>
  );
};

export default HeroSection;
