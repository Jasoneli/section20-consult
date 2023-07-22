/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

const JobsAbroad = () => {
  return (
    <div className="max-w-6xl container mx-auto p-4 my-20">
      <div className="flex flex-col md:flex-row justify-between gap-16">
        <div className="">
          <Image
            src="/images/work.jpg"
            width={600}
            height={600}
            alt="school logo"
            className="rounded-xl shadow-2xl hidden lg:block"
          />
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <h3 className="text-lg text-primary font-semibold uppercase tracking-wide flex items-center gap-4">
            <span className="font-bold text-3xl bg-[#d2d2cf] p-4 rounded-full text-center">
              02
            </span>
            <span> Jobs Abroad Programs</span>
          </h3>
          <p className="text-lg text-accent">
            Maximize your chances of landing your dream job with our
            comprehensive job placement assistance. We maintain strong
            connections with a vast network of employers across various
            industries, increasing your exposure to exciting job opportunities.
            Our career consultants will support you throughout the job search
            process, from identifying suitable openings to helping you perfect
            your applications. We're dedicated to helping you secure a
            fulfilling and rewarding career.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobsAbroad;
