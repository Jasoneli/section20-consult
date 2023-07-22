/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-10 py-5 text-textColor border-t-2 border-primary mt-20">
      <div className="flex flex-col lg:grid lg:grid-cols-3 justify-between items-center gap-4">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
          <Link href="/">
            <img
              src="/images/logo.jpg"
              alt="logo"
              className="rounded-full w-14 h-14 object-cover"
            />
          </Link>
          <span className="font-semibold">
            &copy; {new Date().getFullYear()}. All Rights Reserved.
          </span>
        </div>
        <nav>
          <ul className="lg:flex grid grid-cols-2 items-center text-textGray  gap-5 tracking-wide font-semibold">
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
        </nav>
        <div className="flex flex-col items-center gap-4 justify-end">
          <p className="font-bold">Follow us or contact us on:</p>
          <div className="flex gap-2">
            <Link className="hover:text-red-500 text-2xl" href="tel:054426285">
              <AiOutlineWhatsApp />
            </Link>
            <Link className="hover:text-red-500 text-2xl" href="twitter.com">
              <FaTwitter />
            </Link>
            <Link className="hover:text-red-500 text-2xl" href="instagram.com">
              <AiOutlineInstagram />
            </Link>
            <Link className="hover:text-red-500 text-2xl" href="facebook.com">
              <FaFacebookF />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
