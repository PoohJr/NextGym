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
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, TextPlugin);

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
  const btnRef = useRef(null);

  const btn = document.querySelector("#join");

  useGSAP(() => {
    const joinRef = btnRef.current;
    if (joinRef) {
      joinRef.addEventListener("click", () => {
        gsap.to(window, {
          duration: 1,
          scrollBehavior: "smooth",
          scrollTo: "#signup",
        });
      });
    }
  });

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
      <div className="navbar bg-black">
        <div className="navbar-start">
          <Link href={"/"} className="">
            <Image className="w-14 h-14" src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-end">
          <div className="hidden md:flex ">
            <ul className="md:flex md:flex-row md:justify-evenly">
              <li className="mx-4 hover:text-orange-500 transition-all ease-in-out delay-100 ">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="mx-4 hover:text-orange-500 transition-all ease-in-out delay-100 ">
                <Link href={"./"}>Go Back to Schedule</Link>
              </li>
              <li className="mx-4 hover:text-orange-500 transition-all ease-in-out delay-100 ">
                <Link href={"/"}>FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" right-0 menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"./"}>Go Back to Schedule</Link>
              </li>
              <li>
                <Link href={"/"}>FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* NavBar ^ */}

      {/* Content | */}
      <div className="bg-black">
        <div className="h-screen">
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <div className="relative">
                <Image
                  className="border-white h-[475px] md:w-[800px] xs:max-md:w-screen"
                  src={GymTrainer}
                  alt="Gym Trainer"
                />
                <p className=" text-6xl text-white font-body absolute inset-0 pb-10 flex items-end justify-center">
                  Gym Name
                </p>
              </div>

              <div className=" mt-6 mb-4 bg-orange-500 w-96 rounded-2xl break-words">
                <p className="p-4 text-white font-body">
                  <span className="font-bold">Boxing</span> is a combat sport
                  where two fighters use their fists to score points or knock
                  out their opponent. It improves physical fitness, strength,
                  and mental toughness. For beginners, boxing offers a way to
                  learn self-defense, build confidence, and stay disciplined.
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  ref={btnRef}
                  id="join"
                  className=" text-center rounded-lg bg-orange-500 text-white p-3 hover:bg-orange-600 transition-all ease-in-out delay-100"
                >
                  Join Now!
                </button>
                {/* add something to the button*/}
              </div>
            </div>
          </div>
        </div>

        {/* Cards  */}
        <div className=" xs:max-maxvp:mt-64 mb-10 bg-fixed bg-boxing h-full pt-10 md:grid-cols-1 xs:flex xs:flex-col justify-center items-center">
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
          md:grid md:grid-cols-2 md:gap-2"
          >
            <div className="rounded-xl p-2 m-10">
              <Image
                className="border-8 border-white rounded-full lg:max-maxvp:h-[500px] lg:max-maxvp:w-[500px] xs:max-lg:w-72 xs:max-lg:h-72"
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

            <div className="xs:max-lg:mt-32 lg:max-maxvp:mt-52">
              <p className="text-center text-3xl font-body font-bold text-white">
                Confidence and Self-Belief
              </p>
              <p className="lg:max-maxvp:text-3xl font-body md:text-xl text-white break-before-auto p-10">
                <span className="font-bold">Building self-confidence</span> is
                key. Mental toughness encourages you to believe in your
                potential, boosting your self-esteem and helping you face
                opponents with assurance.
              </p>
            </div>
            <div className="md:flex md:justify-center p-2 mx-24 mb-10 lg:max-maxvp:mt-52">
              <Image
                className="lg:max-maxvp:h-[500px] lg:max-maxvp:w-[500px] xs:max-lg:w-72 xs:max-lg:h-72 border-8 border-white rounded-full"
                src={FemaleBoxer}
                alt="Female Boxer"
              ></Image>
            </div>
          </div>

          <div className="p-10 flex justify-center">
            <Link href={"./"}>
              <button id="signup" className="btn btn-primary">
                Click to Sign up
              </button>
            </Link>
          </div>
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
