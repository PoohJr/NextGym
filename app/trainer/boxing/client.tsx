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
    gsap.to("#welcome", {
      text: "Welcome to The world of Boxing",
      delay: 0.5,
      duration: 2,
      delimiter: " ",
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
        <div className="absolute inset-0 flex justify-center items-center">
          <p
            id="welcome"
            className="font-body text-white text-2xl font-bold"
          ></p>
        </div>
      </div>
      <div className="h-screen">
        <p>Now the Time for these classes</p>
      </div>
    </>
  );
};

export default Boxingclient;
