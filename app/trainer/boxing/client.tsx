"use client";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";
import BoxingImg from "../../public/boxing-img/boxing-training-session-in-gym.jpg";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

const Boxingclient = () => {
  useGSAP(() => {
    gsap.from("#welcome", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from("#class", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  });

  return (
    <>
      <div className="relative h-screen">
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
          <button
            id="class"
            className="bg-red-700 mt-4 p-3  text-white font-body rounded-2xl hover:scale-125 transition-all delay-100 ease-in-out"
          >
            Click to see{/* Look at Our Classes */}
          </button>
        </div>
      </div>
      <div className="flex justify-between h-screen ">
        <div className="flex flex-col w-1/3">
          <div className="mt-10 ml-4">
            <Image className="h-52" src={BoxingImg} alt="sparring"></Image>
            <p className="text-center">We spar </p>
          </div>
          <div className=""></div>
        </div>
        <div className="w-2/3 flex flex-col">
          <p className="text-white text-center text-2xl mt-20 font-body p-10">
            No Matter what Skill level We have a Place for you!
          </p>
          <p className="text-white text-center text-2xl font-body mt-0 p-4">
            ever see some silly moment from a train ride from the L train
          </p>
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
