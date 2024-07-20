import Link from "next/link";
import React from "react";
import Image from "next/image";
const NavBar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-transparent">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* Place Img Here */}
            {/* <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              (Gymname)
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link href="./joinus">
              <button className="text-white font-body font-bold ">
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-150 dark:bg-gray-700">
        <div className="bg-black max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  href="/"
                  className="text-white dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-900 dark:text-white hover:underline"
                  href="/newabout"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="./trainer"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Classes
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-900 dark:text-white hover:underline"
                  href="/membership"
                >
                  MemberShip
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
