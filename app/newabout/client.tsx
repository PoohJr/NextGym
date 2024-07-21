"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

useGSAP(() => {
  gsap.to(aboutRef.current, {
    scrollTrigger: {
      trigger: aboutRef.current,
      toggleActions: "play none none none",
    },
    x: 400,
    rotation: 360,
    duration: 3,
  });
});
const aboutRef = useRef(null);

function Client() {
  <div ref={aboutRef} className="min-h-screen mt-72">
    <p className="text-center font-body text-3xl text-white">About Us</p>
    <p></p>
  </div>;
}

export default Client;
