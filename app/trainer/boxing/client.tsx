"use client";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import BoxingImg from "../../public/boxing-img/boxing-training-session-in-gym.jpg";
import Logo from "../../public/gymlogo/logo.png";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

const Boxingclient = () => {
  const page2textRef = useRef(null);
  const page2colRef = useRef(null);

  useGSAP(() => {
    gsap.from("#welcome", {
      opacity: 0,
      y: -150,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from("#class", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(page2colRef.current, {
      scrollTrigger: {
        trigger: page2colRef.current,
        toggleActions: "restart none none none",
      },
      opacity: 0,
      x: -100,
      start: "top center",
      duration: 1,
      ease: "power2.out",
    });
  });

  return (
    <>
      <div className="relative h-screen">
        <nav className=" border-gray-200 bg-black">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image className="h-20 w-20" src={Logo} alt="Logo"></Image>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    href="/"
                    className=" block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Pricing
                  </a>
                </li>
                <li>
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
          <div className="mt-44 ml-4 border-b-2 border-r-2 p-10">
            <Image className="h-52" src={BoxingImg} alt="sparring"></Image>
            <p className="text-center mt-5 text-white et">
              Add Something here{" "}
            </p>
          </div>
          <div className="border-r-2 border-b-2">
            <p>Hello</p>
          </div>
          <div className=""></div>
        </div>
        <div ref={page2textRef} className="w-2/3 flex flex-col">
          <div className="border-b-2">
            <p className="text-white text-center text-2xl mt-20 font-body p-10">
              No Matter what Skill level We have a Place for you!
            </p>
          </div>
          <div className=" border-b-2">
            <ul className="p-10 list-disc">
              <li className="text-white">
                Full-Body Workout: Boxing engages multiple muscle groups,
                providing a full-body workout that improves overall strength and
                conditioning. It works the arms, shoulders, chest, back, legs,
                and core.
              </li>
              <li className="text-white">
                Cardiovascular Health: The high-intensity nature of boxing
                workouts enhances cardiovascular fitness. It boosts heart
                health, increases stamina, and improves circulation.
              </li>
              <li className="text-white">
                Improves Coordination and Balance: Boxing requires precise
                movements and quick reflexes, which enhance hand-eye
                coordination, agility, and balance.
              </li>
              <li className="text-white">
                Stress Relief: Boxing can be a great way to release pent-up
                energy and stress. The physical activity helps produce
                endorphins, which are natural mood lifters.
              </li>
              <li className="text-white">
                Boosts Confidence: Learning and mastering boxing techniques can
                significantly boost self-confidence and provide a sense of
                accomplishment.
              </li>
              <li className="text-white">
                Fun and Engaging: Boxing is a dynamic and engaging form of
                exercise, which can keep workouts interesting and motivate
                individuals to stay consistent.
              </li>
              <li className="text-white">
                Mental Focus and Discipline: Boxing requires concentration,
                strategy, and discipline, which can improve mental sharpness and
                focus.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

// Inspo
// https://www.canva.com/design/DAGL4Q6JIl8/7axbPDVNzze68ld0jQhEAw/edit
// https://www.equinox.com/clubs/new-york/uptown/columbuscircle
// Look At the footer and update it to look something like this
export default Boxingclient;
