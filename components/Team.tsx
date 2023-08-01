import Image from "next/image";
import Link from "next/link";
import React from "react";
// import ScrollRevealSection from "./ScrollRevealSection";

const Team = () => {
  return (
    <section>
      <div className="max-w-6xl p-4 mx-auto container mt-10">
        <h2 className="text-2xl lg:text-4xl  uppercase font-bold  lg:text-center">
          Meet Our Team
        </h2>
        <p className="lg:text-center text-left text-base mt-2 font-semibold text-[#7d7c83]">
          At Section20 Consult, our success lies in the expertise and dedication
          of our consulting team. Each member brings a wealth of knowledge and
          experience, ensuring that our clients receive the best guidance and
          support throughout their journey. Get to know our team of passionate
          consultants:
        </p>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-10">
          <div className="flex flex-col gap-5 items-center">
            <Image
              className="rounded-full border-2 border-textColor object-cover shadow-2xl shadow-secondary"
              src="/images/team-1.jpg"
              width={200}
              height={200}
              alt="ceo"
            />
            <div>
              <h3 className="font-bold text-xl">Clement Kojo Acquah</h3>
              <small className="text-[#7d7c83] font-semibold">
                Founder & CEO
              </small>
              <p>
                <Link className="hover:text-accent" href="tel:+36705780067">
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
          <div className="flex flex-col  gap-5 items-center">
            <Image
              className="rounded-full border-2 border-textColor object-cover shadow-2xl shadow-secondary"
              src="/images/teaml-2.jpg"
              width={200}
              height={200}
              alt="ceo"
            />
            <div>
              <h3 className="font-bold text-xl">Elizabeth Kessie</h3>
              <small className="text-[#7d7c83] font-semibold">
                Ghana Branch Manager
              </small>
              <p>
                <Link className="hover:text-accent" href="tel:+233543955902">
                  +233543955902
                </Link>
              </p>
              <p>
                <Link
                  className="hover:text-accent"
                  href="mailto:Oathstill@yahoo.co.uk"
                >
                  elizkessie@section20consult.com
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <Image
              className="rounded-full border-2 border-textColor object-cover shadow-2xl shadow-secondary"
              src="/images/team-3.jpg"
              width={200}
              height={200}
              alt="ceo"
            />
            <div>
              <h3 className="font-bold text-xl">Ebenezer Ngoah</h3>
              {/* <small className="text-[#7d7c83] font-semibold">
                Vice President
              </small> */}
              <p>
                <Link className="hover:text-accent" href="tel:+233543955902">
                  +233544262825
                </Link>
              </p>
              <p>
                <Link
                  className="hover:text-accent"
                  href="mailto:Oathstill@yahoo.co.uk"
                >
                  ebenngoah@section20consult.com
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
