/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;

      const visibleThreshold = scrollHeight * 0.8;

      setIsVisible(scrollPosition < visibleThreshold);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`px-4 sticky top-0 left-0 w-full z-10 h-20 bg-primary shadow-lg`}
      >
        <div className="max-w-6xl container mx-auto flex  font-medium gap-4 items-center justify-between p-2">
          <div>
            <Link href="/">
              <img
                src="/images/logo-white.jpg"
                alt="logo"
                className="rounded-full w-16 h-16 object-cover"
              />
            </Link>
          </div>
          <ul className="hidden md:flex items-center justify-between gap-5 tracking-wide text-background font-semibold uppercase">
            <li>
              <Link className="hover:text-red-500" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-red-500" href="#about">
                About us
              </Link>
            </li>
            <li>
              <Link className="hover:text-red-500" href="/ehac">
                EAHAC
              </Link>
            </li>
            <li>
              <Link className="hover:text-red-500" href="/services">
                Services
              </Link>
            </li>

            <li>
              <Link className="hover:text-red-500" href="#contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* hamburger button */}
          <div className="md:hidden">
            {isOpen ? (
              <button
                className="z-40 block hamburger md:hidden foucs:outline-none open "
                id="menu-btn"
                type="button"
                onClick={() => setIsOpen(prev => !prev)}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            ) : (
              <button
                className="z-40 block hamburger md:hidden foucs:outline-none"
                id="menu-btn"
                type="button"
                onClick={() => setIsOpen(prev => !prev)}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            )}
          </div>
        </div>
        {/* mobile menu */}

        {isOpen ? (
          <div
            id="menu"
            className="absolute right-0 top-0 bottom-0 flex flex-col gap-8 self-end w-2/3   h-screen py-1 pt-40 pl-12 spacy-3
       text-xl text-white  bg-primary font-semibold uppercase"
          >
            <Link
              href="/"
              className="hover:text-pink-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:text-pink-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              About us
            </Link>
            <Link
              className="hover:text-red-500"
              href="/ehac"
              onClick={() => setIsOpen(!isOpen)}
            >
              EAHAC
            </Link>
            <Link
              href="/services"
              className="hover:text-pink-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="hover:text-pink-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              Contact
            </Link>
          </div>
        ) : (
          <div
            id="menu"
            className="absolute top-0 bottom-0 hidden flex-col self-end  w-full min-h-screen py-1 pt-40 pl-12 spacy-3
       text-lg text-white  bg-background uppercase"
          >
            <Link href="/" className="hover:text-pink-500">
              Home
            </Link>
            <a href="" className="hover:text-pink-500">
              About us
            </a>
            <Link className="hover:text-red-500" href="/ehac">
              EAHAC
            </Link>
            <a href="" className="hover:text-pink-500">
              Services
            </a>
            <a href="" className="hover:text-pink-500">
              Contact
            </a>
          </div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
