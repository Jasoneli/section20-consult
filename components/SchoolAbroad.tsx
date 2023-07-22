/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

const SchoolAbroad = () => {
  return (
    <div className="max-w-6xl container mx-auto p-4 my-20">
      <div className="flex flex-col md:flex-row justify-between gap-16">
        <div className="flex-1 flex flex-col gap-8">
          <h3 className="text-lg text-primary font-semibold uppercase tracking-wide flex items-center gap-4">
            <span className="font-bold text-3xl bg-[#d2d2cf] p-4 rounded-full text-center">
              01
            </span>
            <span> School Abroad Programs</span>
          </h3>
          <p className="text-lg text-accent">
            Explore the world of international education with our carefully
            curated study abroad programs. Whether you're a high school graduate
            seeking a bachelor's degree abroad or a professional looking to
            enhance your skills through a specialized course, we've got you
            covered. Our expert counselors will guide you through the entire
            process, from choosing the right destination and institution to
            handling visa applications and accommodation arrangements.
            Experience a transformative educational journey that expands your
            horizons and enriches your perspective.
          </p>
        </div>
        <div className="">
          <Image
            src="/images/school-1.jpg"
            width={600}
            height={600}
            alt="school logo"
            className="rounded-xl shadow-2xl hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default SchoolAbroad;
