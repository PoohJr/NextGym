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
import Boxingsvg from "../../public/boxing-img/boxer-black-white-silhouette-vector-design-boxing-silhouette_1188713-997.svg";
import Boxing from "../../public/boxing-img/img2.svg";
import Heavybag from "../../public/boxing-img/heavybag.svg";
import Mental from "../../public/boxing-img/boxing-4-1200x800-min-.jpg";
import FemaleBoxer from "../../public/boxing-img/female-boxer.jpg";
import MaleBoxer from "../../public/boxing-img/side-view-kid-practicing-boxing.jpg";
import Clock from "../../public/boxing-img/th-1845431758.svg";
import { it } from "node:test";
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

const interBoxing = () => {
  const cardsRef = useRef(null);
  interface Item {
    img: string | StaticImageData;
    description: string[];
    lesson: string;
    Flesson: string[];
    class_des: string;
  }

  const items: Item[] = [
    {
      img: MaleBoxer,
      lesson: "Combos",
      Flesson: ["something", "nah"],
      description: ["1", "2"],
      class_des: "Class des",
    },
    {
      img: MaleBoxer,
      lesson: "Yurr",
      Flesson: ["Motherfucker", "Smd"],
      description: ["We 3 Spare", "4"],
      class_des: "class des 2",
    },
    {
      img: MaleBoxer,
      lesson: "Yurr",
      Flesson: ["Hello", "Bye"],
      description: ["We Gotta Spare", "Mew"],
      class_des: "class des 3",
    },
  ];

  useGSAP(() => {
    let tl = gsap.timeline({
      ease: "power1.out",
      opacity: 0,
      scrollTrigger: {
        trigger: cardsRef.current.children,
        start: "center center",
      },
    });

    tl.from(cardsRef.current.children, {
      duration: 1,
      y: 100,
      delay: 0.2,
      opacity: 0,
      stagger: 0.3,
      ease: "power2.out",
    });
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

      {/* Intermediate boxing classes typically build on the basics learned in beginner classes and introduce more complex techniques and conditioning. Here’s a breakdown of what might be involved:

### Technique Development
1. **Advanced Punch Combinations:**
   - Focus on more complex combinations (e.g., jab-cross-hook-uppercut).
   - Drills to improve speed, accuracy, and power.

2. **Footwork:**
   - Lateral movements, pivots, and angles.
   - Incorporating footwork into combinations.

3. **Defensive Techniques:**
   - Slips, rolls, and parries.
   - Advanced blocking and counterpunching.

4. **Head Movement:**
   - Drills to improve evasive maneuvers.
   - Integrating head movement with punching.

5. **Body Shots:**
   - Techniques for effective body punching.
   - Combining body and head shots.

### Conditioning
1. **Endurance Training:**
   - Longer and more intense cardio sessions (e.g., running, jump rope).
   - High-intensity interval training (HIIT).

2. **Strength and Power Training:**
   - Weightlifting and resistance training.
   - Plyometric exercises to improve explosiveness.

3. **Core Strength:**
   - Focused core workouts (e.g., medicine ball throws, planks).

### Sparring
1. **Controlled Sparring Sessions:**
   - Increased sparring frequency and intensity.
   - Focus on applying techniques in a live setting.

2. **Situational Sparring:**
   - Drills for specific scenarios (e.g., fighting against the ropes, countering specific attacks).

### Strategy and Tactics
1. **Fight Strategy:**
   - Developing game plans based on opponents’ strengths and weaknesses.
   - Understanding ring control and pace management.

2. **Mental Preparation:**
   - Visualization techniques.
   - Building confidence and focus under pressure.

### Equipment and Gear
1. **Advanced Equipment:**
   - Using different types of gloves (e.g., bag gloves, sparring gloves).
   - Incorporating additional gear (e.g., focus mitts, double-end bags).

2. **Safety Gear:**
   - Ensuring proper use of headgear, mouthguards, and hand wraps.

### Drills and Workouts
1. **Combination Drills:**
   - Partner drills focusing on timing and rhythm.
   - Pad work with advanced combinations.

2. **Bag Work:**
   - Heavy bag drills for power and endurance.
   - Speed bag drills for timing and coordination.

3. **Shadow Boxing:**
   - More complex shadow boxing routines.
   - Focus on integrating footwork, head movement, and combinations.

### Class Structure
1. **Warm-up:**
   - Dynamic stretching and light cardio to prepare the body.

2. **Technique Drills:**
   - Focused practice on specific techniques and combinations.

3. **Conditioning:**
   - Intense physical exercises to build strength and endurance.

4. **Sparring/Drills:**
   - Controlled sparring sessions or situational drills.

5. **Cool-down:**
   - Static stretching and light exercises to aid recovery.

Intermediate boxing classes are designed to challenge participants and push their skills to the next level. They require a higher level of fitness, technical skill, and mental preparation compared to beginner classes. */}
      {/* Cards  */}
      <div className="mt-10 flex flex-col justify-center items-center">
        <div ref={cardsRef} className="">
          {/* copy div below */}
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-xl h-fit w-64 my-5 ">
              <div className="flex flex-col justify-center items-center">
                <Image className="h-24 mt-5" src={item.img} alt=""></Image>
                <div className="">
                  <p className="text-center text-black">{item.lesson}</p>
                  <ul className="p-2">
                    {item.Flesson.map((first, idx) => (
                      <li key={idx} className="flex flex-col mb-2">
                        <strong>{first}</strong>
                        {/* Header */}
                        <ul className="list-disc list-inside pl-4">
                          {item.description.map((des, i) => (
                            <li key={i}>{des}</li>
                          ))}
                          {/* Li des */}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
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
            <span className="font-bold">Mental grit</span> is crucial for boxing
            because it builds resilience and perseverance, enabling boxers to
            push through intense training sessions, endure physical pain, and
            stay focused under pressure. It helps fighters maintain a strong
            mindset, recover from setbacks, and stay motivated to achieve their
            goals. In the ring, mental grit can make the difference between
            giving up and finding the strength to keep fighting, ultimately
            contributing to overall success and longevity in the sport.
          </p>
        </div>

        <div className="mt-32">
          <p className="text-center text-3xl font-body font-bold text-white">
            Confidence and Self-Belief
          </p>
          <p className="font-body text-white break-before-auto p-10">
            <span className="font-bold">Building self-confidence</span> is key.
            Mental toughness encourages you to believe in your potential,
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

export default interBoxing;
