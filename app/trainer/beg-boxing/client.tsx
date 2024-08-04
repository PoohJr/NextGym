"use client";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/gymlogo/logo.png";
import GymTrainer from "../../public/boxing-img/side-view-kid-practicing-boxing.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import OrangeGlove from "../../public/boxing-img/orange-glove.svg";
import PunchBag from "../../public/boxing-img/PunchMan.svg";
import Strength from "../../public/boxing-img/strength.svg";
import Mental from "../../public/boxing-img/boxing-4-1200x800-min-.jpg";
import FemaleBoxer from "../../public/boxing-img/female-fight.jpg";
import Helmet from "../../public/boxing-img/helmet.svg";
import BoxingBG from "../../public/boxing-img/boxing-background.jpeg";

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

interface Items {
  img: string | StaticImageData;
  heading: string;
  des: string;
}

const items: Items[] = [
  {
    img: PunchBag,
    heading: "Strength",
    des: "Join our strength classes, designed for all levels to help you build power and stamina.",
  },
  {
    img: OrangeGlove,
    heading: "Levels",
    des: "We offer training programs ranging from beginner to advanced levels.",
  },
  {
    img: Helmet,
    heading: "Gear",
    des: "We provide top-quality gear and expert boxing lessons tailored for all skill levels. ",
  },
  {
    img: Strength,
    heading: "Test Your Endurance",
    des: "Enhance your endurance with our classes, tailored to meet your fitness goals.",
  },
];

const Boxingclient = () => {
  const cardsRef = useRef(null);

  useGSAP(() => {
    // let tl = gsap.timeline({
    //   ease: "power1.out",
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: cardsRef.current.children,
    //     start: "center center",
    //   },
    // });
    // tl.from(cardsRef.current.children, {
    //   duration: 1,
    //   y: 100,
    //   delay: 0.2,
    //   opacity: 0,
    //   stagger: 0.3,
    //   ease: "power2.out",
    // });
  });

  // do the animation at home
  return (
    <>
      <nav className="bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <Link
            href=""
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
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black dark:border-gray-700">
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
                  className="block py-2 px-3 text-gray-900 rounded  md:border-0 md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-orange-600 delay-100 ease-in-out dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li className="font-body text-white">
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded  md:border-0 md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-orange-600 delay-100 ease-in-out dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li className="font-body text-white">
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded  md:border-0 md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-orange-600 delay-100 ease-in-out dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li className="font-body text-white">
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded  md:border-0 md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-orange-600 delay-100 ease-in-out dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-black">
        <div className="h-screen">
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <div className="relative">
                <Image
                  className="border-white h-[475px] w-full"
                  src={GymTrainer}
                  alt="Gym Trainer"
                />
                <p className=" text-6xl text-white font-body absolute inset-0 pb-10 flex items-end justify-center">
                  Gym Name
                </p>
              </div>
              <div className="break-words">
                <p>
                  {" "}
                  <p className="mt-2 p-10 text-white font-body">
                    Boxing is a combat sport where two fighters use their fists
                    to score points or knock out their opponent. It improves
                    physical fitness, strength, and mental toughness. For
                    beginners, boxing offers a way to learn self-defense, build
                    confidence, and stay disciplined.
                  </p>
                </p>
                <div className="flex justify-center">
                  <button className=" text-center rounded-lg bg-orange-500 text-white p-3 hover:bg-orange-600 transition-all ease-out delay-100">
                    Join Now!
                  </button>
                  {/* add something to the button*/}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards  */}
        <div className=" xs:max-lg:my-52 bg-fixed bg-boxing h-full pt-10 md:grid-cols-1 xs:flex xs:flex-col justify-center items-center">
          <div ref={cardsRef} className="md:grid md:grid-cols-2">
            {items.map((item, index) => (
              <div
                key={index}
                className=" bg-orange-500 h-fit w-72 my-5 mx-8 rounded-xl p-5"
              >
                <div className="bg-white rounded-full w-20 h-20 flex justify-center items-center">
                  <Image className="h-10 w-10" src={item.img} alt="Heading" />
                </div>

                <div className="pl-4">
                  <p className=" text-2xl text-white">{item.heading}</p>
                  <h1 className="mt-1 text-white break-before-auto">
                    {item.des}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-black">
          <div
            className="xs:flex xs:flex-col xs:items-center xs:justify-center
         xs:pt-32  md:grid md:grid-cols-2 md:gap-2"
          >
            <div className="rounded-full p-2 m-10">
              <Image
                className="border-8 border-slate-500 rounded-full lg:max-maxvp:h-[500px] lg:max-maxvp:w-[500px]"
                src={Mental}
                alt="Mental Toughness"
              ></Image>
            </div>

            <div className="">
              <p className="text-center text-3xl font-body font-bold text-white">
                Mental Tenedacy{" "}
              </p>
              <p className="lg:max-maxvp:text-3xl font-body md:text-xl text-white break-before-auto p-10">
                <span className="font-bold">Mental grit</span> is crucial for
                boxing because it builds resilience and perseverance, enabling
                boxers to push through intense training sessions, endure
                physical pain, and stay focused under pressure. It helps
                fighters maintain a strong mindset, recover from setbacks, and
                stay motivated to achieve their goals. In the ring, mental grit
                can make the difference between giving up and finding the
                strength to keep fighting, ultimately contributing to overall
                success and longevity in the sport.
              </p>
            </div>

            <div className="mt-32">
              <p className="text-center text-3xl font-body font-bold text-white">
                Confidence and Self-Belief
              </p>
              <p className="lg:max-maxvp:text-3xl md:text-xl font-body text-white break-before-auto p-10">
                <span className="font-bold">Building self-confidence</span> is
                key. Mental toughness encourages you to believe in your
                potential, boosting your self-esteem and helping you face
                opponents with assurance.
              </p>
            </div>
            <div className="md:flex md:justify-center rounded-full p-2 mx-24 mb-10">
              <Image
                className="lg:max-maxvp:h-[500px] lg:max-maxvp:w-[500px] xs:max-lg:w-72 xs:max-lg:h-72 border-8 border-white rounded-full"
                src={FemaleBoxer}
                alt="Female Boxer"
              ></Image>
            </div>
          </div>

          {/* <div className="m-5">
          <Link href={}>
            <button className="btn btn-primary">Click to Sign up</button>
          </Link>
        </div> */}
          {/* MAKE A PAGE TO SIGN UP FOR CLASS */}
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
