"use client";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/gymlogo/logo.png";
import GymTrainer from "../../public/boxing-img/side-view-kid-practicing-boxing.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import Boxingsvg from "../../public/boxing-img/boxer-black-white-silhouette-vector-design-boxing-silhouette_1188713-997.svg";
import Boxing from "../../public/boxing-img/img2.svg";
import Heavybag from "../../public/boxing-img/heavybag.svg";

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

const Boxingclient = () => {
  const page2textRef = useRef(null);
  const page2colRef = useRef(null);
  const page2listRef = useRef(null);

  useGSAP(() => {});

  interface Item {
    img: string | StaticImageData;
    description: string;
  }

  interface Items {
    [key: string]: Item;
  }

  const items: Items = {
    Stance: {
      img: Boxingsvg,
      description: "FootWork and Stance",
    },
    offense: {
      img: Boxing,
      description: "Jabs, Cross, Hooks",
    },
    heavy: {
      img: Heavybag,
      description: "Will Work on Heavy Bags",
    },
  };

  return (
    <>
      <nav className="bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="./"
            className=" cursor-pointer flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              className="cursor-pointer h-20 w-20"
              src={Logo}
              alt="Logo"
            ></Image>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="font-body text-white">
                <Link
                  href=""
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="font-body text-white">
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li className="font-body text-white">
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li className="font-body text-white">
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li className="font-body text-white">
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="h-[800px] bg-white">
        <div className="flex justify-center relative">
          <div ref={page2textRef} className="flex flex-col items-center">
            <div className="w-screen h-36 bg-slate-900 absolute top-[45%] left-0 "></div>
            <div className="relative z-10 mt-16 p-3">
              <div className="rounded-full bg-black p-3 h-84 w-64 flex items-center justify-center">
                <Image
                  className="rounded-full h-72 w-64"
                  src={GymTrainer}
                  alt="Gym Trainer"
                />
              </div>
              <div className="flex justify-center">
                <div className=" absolute top-72 bg-slate-900 p-2 h-64 w-80 z-20">
                  <div className="break-words">
                    <p className="text-center mt-3 font-body text-3xl text-white font-bold">
                      Boxing
                    </p>
                    <p className="p-2">
                      sOMSVCYIHUADSGCBVJKABSCHIUGABDVUIKDAYUIB
                      JHKbjikdfbvujiksabdvifdbsyujvby
                    </p>
                  </div>
                </div>
                <div className="absolute top-96 right-1 bg-black h-52 w-80 z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col justify-center items-center">
        <p className="mb-5">What will go on in the mopring Class </p>
        {Object.keys(items).map((key, index) => (
          <div key={index} className="bg-white rounded-xl w-64 my-10">
            <Image
              className="h-24 mt-5"
              src={items[key].img}
              alt={`${key} logo`}
            ></Image>
            <div className="">
              <p className="text-center mt-3 text-lg text-black">{}</p>
              <p className="text-center text-black">{items[key].description}</p>
              <p></p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-30">
        {/* Add an image above text */}
        <p>Mental Tenedacy </p>
        <p>explay why its good.</p>
      </div>
    </>
  );
};

// Inspo
//Look At gpt for inspo
// https://www.canva.com/design/DAGL4Q6JIl8/7axbPDVNzze68ld0jQhEAw/edit
// https://www.equinox.com/clubs/new-york/uptown/columbuscircle
// Look At the footer and update it to look something like this
export default Boxingclient;
