"use client";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

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
            Look at Our Classes
          </button>
        </div>
      </div>
      <div className="h-screen flex flex-col">
        <p className="text-white text-center text-2xl mt-20 p-10">
          No Matter what Skill level We have a Place for you!
        </p>
        <p className="text-white text-center text-2xl mt-0 p-4">
          {" "}
          ever see some silly moment from a train ride from the L train
        </p>
        <p>Voxing </p>
      </div>
    </>
  );
};

export default Boxingclient;
