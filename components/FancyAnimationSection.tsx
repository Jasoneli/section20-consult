"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const FancyAnimationSection = ({ children }: { children: ReactNode }) => {
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
      transition={{ duration: 1 }}
    >
      {children}
    </motion.section>
  );
};

export default FancyAnimationSection;
