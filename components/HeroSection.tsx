import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <header className="py-20 bg-[#e7e9eb]  lg:min-h-screen">
      <div className="container max-w-6xl mx-auto flex md:justify-between justify-center items-center gap-4 p-4">
        <div className="flex flex-col lg:items-start justify-center items-center text-center lg:text-left gap-5 text-textColor">
          <h1 className="md:text-7xl font-bold text-3xl">
            Welcome to <span className="text-blue-900">Section20 Consult</span>
          </h1>
          <p className="text-base font-medium text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            quibusdam iusto, laborum maxime corrupti nulla aspernatur mollitia
            repudiandae expedita voluptatem. Magnam nesciunt dolores corporis
            commodi.
          </p>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <Link
              className="px-4 py-2 font-medium tracking-wide border-2 rounded-md border-textColor hover:bg-blue-800 hover:text-white hover:shadow-lg hover:translate-y-[-2px] duration-200 transition-all"
              href="#contact"
            >
              Contact us
            </Link>
            <Link
              className="px-4 py-2 font-medium tracking-wide border-2 rounded-md bg-red-500 text-white hover:bg-blue-800 hover:text-white hover:shadow-lg hover:translate-y-[-2px]  duration-200 transition-all outline-none border-none"
              href="/services"
            >
              Our services
            </Link>
          </div>
        </div>

        <Image
          src="/images/header.jpg"
          width={650}
          height={700}
          alt="header img"
          priority
          className="self-end hidden lg:block  rounded-md"
        />
      </div>
    </header>
  );
};

export default HeroSection;
