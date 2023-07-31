"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const EhacTeam = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const handleScroll = () => {
    const section = document.getElementById("fancySection");
    if (section) {
      const sectionTop = section.offsetTop;
      const windowHeight = window.innerHeight;
      setIsVisible(window.scrollY > sectionTop - windowHeight / 2);
    }
  };

  useEffect(() => {
    const handleScrollThrottled = () => {
      // Throttle scroll event for performance improvement
      window.requestAnimationFrame(handleScroll);
    };
    window.addEventListener("scroll", handleScrollThrottled);
    return () => {
      window.removeEventListener("scroll", handleScrollThrottled);
    };
  }, []);

  useEffect(() => {
    // Animate the section's sliding from the left
    controls.start({ x: isVisible ? 0 : "-100%" });
  }, [isVisible, controls]);

  return (
    <motion.section
      id="fancySection"
      initial={{ x: "-100%" }}
      animate={controls}
      transition={{ duration: 2 }}
    >
      <div className="container mx-auto max-w-6xl p-4">
        <h2 className="text-2xl lg:text-4xl  uppercase font-bold  text-center">
          Eahac Team
        </h2>
        <div className="mt-12 flex justify-center items-center gap-20">
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
              src="/images/ehac-team.jpg"
              width={200}
              height={200}
              alt="ehac pic"
            />
            <div>
              <h3 className="font-bold text-xl">Emmanuel Osei</h3>
              <small className="text-[#7d7c83] font-semibold">
                Federation of Helping Hands
              </small>
              <p>
                <Link className="hover:text-accent" href="tel:+233554807083">
                  +233554807083
                </Link>
              </p>
              <p>
                <Link
                  className="hover:text-accent"
                  href="mailto:Oathstill@yahoo.co.uk"
                >
                  infoateahac@gmail.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default EhacTeam;
