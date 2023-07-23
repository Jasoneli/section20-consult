"use client";

import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ScrollRevealSection = ({ children }: { children: ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, scale: 1, rotate: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

export default ScrollRevealSection;
