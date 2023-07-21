/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-50 border-b-2 border-blue-800 py-2 sticky top-0  right-0 left-0">
        <div className="max-w-6xl container mx-auto flex  font-medium gap-4 items-center justify-between">
          <div>
            <Link href="/">
              <img
                src="/images/logo.jpg"
                alt=""
                className="rounded-full w-14 h-14 object-cover"
              />
            </Link>
          </div>
          <ul className="hidden md:flex items-center justify-between gap-5 tracking-wide text-zinc-900">
            <li>
              <Link className="hover:text-blue-800" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-800" href="#about">
                About us
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-800" href="/services">
                Services
              </Link>
            </li>

            <li>
              <Link className="hover:text-blue-800" href="#contact">
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
            className="absolute top-0 bottom-0 flex flex-col self-end  w-full min-h-screen py-1 pt-40 pl-12 spacy-3
       text-lg text-white uppercase bg-textColor"
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
       text-lg text-white uppercase bg-black"
          >
            <a href="" className="hover:text-pink-500">
              Home
            </a>
            <a href="" className="hover:text-pink-500">
              About us
            </a>
            <a href="" className="hover:text-pink-500">
              Services
            </a>
            <a href="" className="hover:text-pink-500">
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
