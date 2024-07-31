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
import Boxingsvg from "../../public/boxing-img/jap.svg";
import FootWork from "../../public/boxing-img/footwork.svg";
import Heavybag from "../../public/boxing-img/heavybag.svg";
import Mental from "../../public/boxing-img/boxing-4-1200x800-min-.jpg";
import FemaleBoxer from "../../public/boxing-img/female-boxer.jpg";

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

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
          <div className="flex flex-col items-center">
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
                <div className=" absolute top-72 bg-slate-900  p-4 h-72 w-80 z-20">
                  <div className="break-words">
                    <p className="text-center mt-3 font-body text-3xl text-white font-bold">
                      Boxing
                    </p>
                    <p className="mt-2 p-1 text-white">
                      Boxing is a combat sport where two fighters use their
                      fists to score points or knock out their opponent. It
                      improves physical fitness, strength, and mental toughness.
                      For beginners, boxing offers a way to learn self-defense,
                      build confidence, and stay disciplined.
                    </p>
                  </div>
                </div>
                <div className="absolute top-96 right-1 bg-black h-64 w-80 z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        {/* Above you can change tthis div to make this a col to row depending on vp */}
        {/* Cards  */}
        <div className="mt-10 flex flex-col justify-center items-center">
          <div ref={cardsRef} className="">
            {/* copy div below */}
            <div className="bg-white rounded-xl h-fit w-64 my-5 ">
              <div className="flex flex-col justify-center items-center">
                <Image className="h-24 w-24 mt-5" src={FootWork} alt=""></Image>
                <div className="">
                  <p className="text-center text-black font-bold font-body">
                    FootWork and Stance
                  </p>
                  <ul className="p-2">
                    <li className="flex flex-col mb-2">
                      <strong className="text-black font-bold font-body text-xl">
                        Stance
                      </strong>
                      {/* Header */}
                      <ul className="list-disc list-inside pl-4">
                        <li className="text-slate-800 font-body">
                          Feet shoulder-width apart
                        </li>
                        <li className="text-slate-800 font-body">
                          Balanced weight
                        </li>
                        {/* Li des */}
                      </ul>
                    </li>
                    <li className="text-slate-800 font-body">
                      <strong className="text-black font-bold font-body text-xl">
                        Footwork
                      </strong>
                      <ul className="list-disc list-inside pl-4">
                        <li className="text-slate-800 font-body">
                          Step in all directions
                        </li>
                        <li className="text-slate-800 font-body">
                          Pivot, shuffle, slide
                        </li>
                      </ul>
                    </li>
                    <li className="text-slate-800 font-body">
                      <strong className="text-black font-bold font-body text-xl">
                        Drills
                      </strong>
                      <ul className="list-disc list-inside pl-4">
                        <li className="text-slate-800 font-body">
                          Shadowboxing
                        </li>
                        <li className="text-slate-800 font-body">
                          Ladder and cone drills
                        </li>
                      </ul>
                    </li>
                    <li className="text-slate-800 font-body">
                      <strong className="text-black font-bold font-body text-xl">
                        Conditioning
                      </strong>
                      <ul className="list-disc list-inside pl-4">
                        <li className="text-slate-800 font-body">
                          Skipping rope
                        </li>
                        <li className="text-slate-800 font-body">
                          Leg strength exercises
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl h-fit w-64 my-5 ">
              <div className="flex flex-col justify-center items-center">
                <Image
                  className="h-24 w-24 mt-5"
                  src={Boxingsvg}
                  alt=""
                ></Image>
                <div className="">
                  <p className="text-center text-black font-bold font-body">
                    Offense
                  </p>
                  <ul className="p-2">
                    <li className="flex flex-col mb-2">
                      <strong className="text-black font-bold font-body text-xl">
                        Jab
                      </strong>
                      {/* Header */}
                      <ul className="list-disc list-inside pl-4">
                        <li className="text-slate-800 font-body">
                          A quick, straight punch with the lead hand
                        </li>
                        {/* Li des */}
                      </ul>
                    </li>
                    <li className="text-slate-800 font-body">
                      <strong className="text-black font-bold font-body text-xl">
                        Cross
                      </strong>
                      <ul className="list-disc list-inside pl-4">
                        <li className="text-slate-800 font-body">
                          A powerful, straight punch with the rear hand.
                        </li>
                      </ul>
                    </li>
                    <li className="text-slate-800 font-body">
                      <strong className="text-black font-bold font-body text-xl">
                        Hook
                      </strong>
                      <ul className="list-disc list-inside pl-4">
                        <li className="text-slate-800 font-body">
                          A semi-circular punch with the lead or rear hand.
                        </li>
                      </ul>
                    </li>
                    <li className="text-slate-800 font-body">
                      <strong className="text-black font-bold font-body text-xl">
                        Overhand
                      </strong>
                      <ul className="list-disc list-inside pl-4">
                        <li className="text-slate-800 font-body">
                          A punch thrown with the rear hand in an arching
                          motion, aimed at the opponent's head.
                        </li>
                      </ul>
                    </li>
                    <li className="text-slate-800 font-body">
                      <strong className="text-black font-bold font-body text-xl">
                        Body Shot
                      </strong>
                      <ul className="list-disc list-inside pl-4">
                        <li className="text-slate-800 font-body">
                          Any punch aimed at the opponent's torso to weaken
                          their stamina.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl h-fit w-64 my-5 ">
              <div className="flex flex-col justify-center items-center">
                <Image className="h-24 w-32 mt-5" src={Heavybag} alt=""></Image>
                {/* Make this about defense  */}
                <div className="">
                  <p className="text-center text-black font-bold font-body">
                    Defense Techniques
                  </p>
                  <ul className="p-2">
                    <li className="flex flex-col mb-2">
                      <strong className="text-black font-bold font-body text-xl">
                        Slipping
                      </strong>
                      {/* Header */}
                      <ul className="list-disc list-inside pl-4">
                        <li className="text-slate-800 font-body">
                          {" "}
                          Move your head to the side to avoid punches. Quite
                          Simple
                        </li>
                        {/* Li des */}
                      </ul>
                    </li>
                    <li className="text-slate-800 font-body">
                      <strong className="text-black font-bold font-body text-xl">
                        Bobbing
                      </strong>
                      <ul className="list-disc list-inside pl-4">
                        <li className="text-slate-800 font-body">
                          Bend your knees and move your body up and down to
                          dodge punches.
                        </li>
                      </ul>
                    </li>
                    <li className="text-slate-800 font-body">
                      <strong className="text-black font-bold font-body text-xl">
                        Weaving
                      </strong>
                      <ul className="list-disc list-inside pl-4">
                        <li className="text-slate-800 font-body">
                          {" "}
                          Move your head in a U-shape under punches.
                        </li>
                      </ul>
                    </li>
                    <li className="text-slate-800 font-body">
                      <strong className="text-black font-bold font-body text-xl">
                        Blocking
                      </strong>
                      <ul className="list-disc list-inside pl-4">
                        <li className="text-slate-800 font-body">
                          Use your gloves and arms to block punches.
                        </li>
                      </ul>
                    </li>
                    <li className="text-slate-800 font-body">
                      <strong className="text-black font-bold font-body text-xl">
                        Parrying
                      </strong>
                      <ul className="list-disc list-inside pl-4">
                        <li className="text-slate-800 font-body">
                          Deflect punches with your hands.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-32">
          <div className="bg-white rounded-full p-2 m-10">
            <Image
              className="rounded-full"
              src={Mental}
              alt="Mental Toughness"
            ></Image>
          </div>

          <div className="">
            <p className="text-center text-3xl font-body font-bold text-white">
              Mental Tenedacy{" "}
            </p>
            <p className="font-body text-white break-before-auto p-10">
              <span className="font-bold">Mental grit</span> is crucial for
              boxing because it builds resilience and perseverance, enabling
              boxers to push through intense training sessions, endure physical
              pain, and stay focused under pressure. It helps fighters maintain
              a strong mindset, recover from setbacks, and stay motivated to
              achieve their goals. In the ring, mental grit can make the
              difference between giving up and finding the strength to keep
              fighting, ultimately contributing to overall success and longevity
              in the sport.
            </p>
          </div>

          <div className="mt-32">
            <p className="text-center text-3xl font-body font-bold text-white">
              Confidence and Self-Belief
            </p>
            <p className="font-body text-white break-before-auto p-10">
              <span className="font-bold">Building self-confidence</span> is
              key. Mental toughness encourages you to believe in your potential,
              boosting your self-esteem and helping you face opponents with
              assurance.
            </p>
            <div className="bg-white rounded-full p-2 mx-24 mb-10">
              <Image
                className=" rounded-full"
                src={FemaleBoxer}
                alt="Female Boxer"
              ></Image>
            </div>
          </div>
        </div>

        {/* <div className="m-5">
          <Link href={}>
            <button className="btn btn-primary">Click to Sign up</button>
          </Link>
        </div> */}
        {/* MAKE A PAGE TO SIGN UP FOR CLASS */}
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
