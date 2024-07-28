"use client";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BoxingImg from "../../public/boxing-img/boxing-training-session-in-gym.jpg";
import YouthBoxing from "../../public/boxing-img/youth-boxing.jpg";
import Logo from "../../public/gymlogo/logo.png";
import Tort from "../../public/boxing-img/tort.jpg";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

const Boxingclient = () => {
  const page2textRef = useRef(null);
  const page2colRef = useRef(null);
  const page2listRef = useRef(null);

  useGSAP(() => {
    const elements = page2colRef.current ? page2colRef.current.children : [];

    gsap.from("#welcome", {
      opacity: 0,
      y: -150,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(page2textRef.current, {
      scrollTrigger: {
        trigger: page2textRef.current,
        toggleActions: "play pause resume none",
        start: "top center",
      },
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
    });
    if (elements.length) {
      gsap.from(elements, {
        scrollTrigger: {
          trigger: page2colRef.current,
          toggleActions: "play pause resume none",
          start: "top center",
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      });
    }

    gsap.from(page2listRef.current, {
      scrollTrigger: {
        trigger: page2colRef.current,
        toggleActions: "play pause resume none",
        start: "top center",
      },
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
      stagger: 0.2,
    });
  });
  return (
    <>
      <div className="relative h-screen">
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
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
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

        <video
          className=" w-full h-full object-cover"
          src={require("../../public/videos/boxing.mp4")}
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <p id="welcome" className="font-body text-white text-2xl font-bold">
            Welcome to The world of Boxing
          </p>
        </div>
      </div>
      <div className="flex justify-between h-screen ">
        <div ref={page2colRef} className="flex flex-col w-1/3">
          <div className="mt-28 ml-4 border-b-2 border-r-2 p-10">
            <Image className="h-32" src={BoxingImg} alt="sparring"></Image>
            <p className="text-center mt-5 text-white">Add Something here</p>
          </div>
          <div className="ml-4 border-r-2 border-b-2 p-10">
            <Image
              className="h-32"
              src={YouthBoxing}
              alt="Youth Boxing"
            ></Image>
            <p className="text-center mt-6">Youth Boxing </p>
          </div>
          <div className="ml-4 border-r-2 border-b-2 p-8">
            <Image className="h-32" src={Tort} alt="Tortament Img"></Image>
            <p className="text-center"> Add Something</p>
          </div>
        </div>
        <div ref={page2textRef} className="w-2/3 flex flex-col">
          <div className="border-b-2">
            <p className="text-white text-center text-4xl mt-[94px] font-body p-10">
              Beginner Boxing Classes and waht to expect
            </p>
          </div>
          <div ref={page2listRef} className="border-b-2 ">
            <div className="p-5">
              <ul className="px-5 list-disc">
                <li className="font-body text-white">Stance/ FootWork</li>
                <li className="font-body text-white">
                  Work On the basic punches such as{" "}
                  <span className="font-bold">Jabs</span>,{" "}
                  <span className="font-bold">Cross</span>,{" "}
                  <span className="font-bold">Hook</span>,{" "}
                  <span className="font-bold">Uppercuts</span>
                </li>
                <li className="font-body text-white">
                  <span className="font-bold">Defensive Techniques</span>such as
                  , blocking, parrying, slipping, bob and weave
                </li>
                <li className="font-body text-white">
                  Now Combining basic punches maining with the Jap Emphasis on
                  fluidity and transitioning between punches smoothly
                </li>
                <li className="font-body text-white">
                  <span className="font-bold">Bag Work</span> to properly use a
                  heavy bag for practicing punches and combinations.
                </li>
                <li className="font-body text-white">
                  Pad work Partner drills using focus mitts to practice accuracy
                  and timing.
                </li>
                <li className="font-body text-white">
                  <span className="font-bold"> Conditioning:</span> Exercises to
                  improve overall fitness, strength, and endurance. Specific
                  drills for enhancing speed, power, and agility.
                </li>
                <li className="font-body text-white">
                  <span className="font-bold">Cool Down and Stretching:</span>{" "}
                  Importance of cooling down after training. Stretching routines
                  to improve flexibility and prevent injuries.
                </li>
              </ul>
            </div>
          </div>
        </div>
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
