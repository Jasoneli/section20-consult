/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-10 py-5 bg-textColor text-background mt-20">
      <div className="flex flex-col lg:grid lg:grid-cols-3 justify-between items-center gap-4">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
          <Link href="/">
            <img
              src="/images/logo-white.jpg"
              alt="logo"
              className="rounded-full  w-14 object-cover logo"
            />
          </Link>
          <span className="font-semibold text-xs">
            &copy; {new Date().getFullYear()}. All Rights Reserved.
          </span>
        </div>
        <nav>
          <ul className="lg:flex grid grid-cols-2 items-center text-textGray  gap-5 tracking-wide font-semibold uppercase text-xs">
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
                EHAC
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
            <Link
              className="hover:text-red-500 text-2xl"
              href="https://wa.me/233544262825"
              target="_blank"
            >
              <AiOutlineWhatsApp />
            </Link>
            <Link
              className="hover:text-red-500 text-2xl"
              href="https://twitter.com/@S20consult"
              target="_blank"
            >
              <FaTwitter />
            </Link>
            <Link
              className="hover:text-red-500 text-2xl"
              href="https://www.instagram.com/section20consult"
              target="_blank"
            >
              <AiOutlineInstagram />
            </Link>
            <Link
              className="hover:text-red-500 text-2xl"
              href="https://www.facebook.com/section20consult"
              target="_blank"
            >
              <FaFacebookF />
            </Link>
            <Link
              className="hover:text-red-500 text-2xl"
              href="https://www.youtube.com/channel/YourChannelID"
              target="_blank"
            >
              <AiOutlineYoutube />
            </Link>
            <Link
              className="hover:text-red-500 text-2xl"
              href="https://www.linkedin.com/company/section-20-consult"
              target="_blank"
            >
              <AiFillLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
