/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-10 py-5 bg-[#102e4a] text-textGray">
      <div className="grid grid-cols-3 justify-between items-center gap-8">
        <div className="flex justify-center items-center gap-5">
          <Link href="/">
            <img
              src="/images/logo.jpg"
              alt="logo"
              className="rounded-full w-14 h-14 object-cover"
            />
          </Link>
          <span className="font-medium">
            &copy; {new Date().getFullYear()}. All Rights Reserved.
          </span>
        </div>
        <nav>
          <ul className="flex items-center text-textGray justify-between gap-5 tracking-wide font-semibold">
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
        </nav>
        <div className="flex items-center gap-8 justify-end">
          <AiOutlineWhatsApp />
          <FaTwitter />
          <AiOutlineInstagram />
          <FaFacebookF />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
