/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-50 border-b-2 border-blue-800 py-2 sticky top-0  right-0 left-0">
      <div className="max-w-6xl container mx-auto flex flex-col justify-center md:flex-row font-medium gap-4 items-center md:justify-between">
        <div>
          <Link href="/">
            <img
              src="/images/logo.jpg"
              alt=""
              className="rounded-full w-14 h-14 object-cover"
            />
          </Link>
        </div>
        <ul className="flex items-center justify-between gap-5 tracking-wide text-zinc-900">
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
      </div>
    </nav>
  );
};

export default Navbar;
