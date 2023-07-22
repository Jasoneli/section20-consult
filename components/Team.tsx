import Image from "next/image";
import Link from "next/link";
import React from "react";

const Team = () => {
  return (
    <section>
      <div className="max-w-6xl p-4 mx-auto container">
        <h2 className="text-lg lg:text-4xl  uppercase font-bold text-center">
          Meet Our Expert Consultants
        </h2>
        <p className="lg:text-center text-left text-base lg:text-lg mt-2 font-semibold text-[#7d7c83]">
          At Section20 Consult, our success lies in the expertise and dedication
          of our consulting team. Each member brings a wealth of knowledge and
          experience, ensuring that our clients receive the best guidance and
          support throughout their journey. Get to know our team of passionate
          consultants:
        </p>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2  justify-between items-center gap-10">
          <div className="flex flex-col lg:flex-row gap-5 items-center">
            <Image
              className="rounded-full object-cover shadow-2xl"
              src="/images/ceo-1.jpg"
              width={250}
              height={250}
              alt="ceo"
            />
            <div>
              <h3 className="font-bold text-xl">Clement Kojo Acquah</h3>
              <small className="text-[#7d7c83] font-semibold">
                Founder & CEO
              </small>
              <p>
                <Link className="hover:text-accent" href="">
                  +36705780067
                </Link>
              </p>
              <p>
                <Link
                  className="hover:text-accent"
                  href="mailto:ckacquah@section20consult.com"
                >
                  ckacquah@section20consult.com
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 items-center">
            <Image
              className="rounded-full object-cover shadow-2xl"
              src="/images/ceo-2.jpg"
              width={250}
              height={250}
              alt="ceo"
            />
            <div>
              <h3 className="font-bold text-xl">Emily Johnson</h3>
              <small className="text-[#7d7c83] font-semibold">
                Jobs Abroad Consultant
              </small>
              <p>
                <Link className="hover:text-accent" href="">
                  +233543955902
                </Link>
              </p>
              <p>
                <Link
                  className="hover:text-accent"
                  href="mailto:Oathstill@yahoo.co.uk"
                >
                  Oathstill@yahoo.co.uk
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
