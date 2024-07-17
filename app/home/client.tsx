"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Img1 from "./images/gym1.jpg";
import Img2 from "./images/gym2.jpg";
import Img3 from "./images/gym3.jpg";
import Link from "next/link";

gsap.registerPlugin(useGSAP, TextPlugin, ScrollTrigger);

const Client = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const textbox = useRef(null);

  const ImgsTotal = [Img1, Img2, Img3];
  const slideImg = ImgsTotal.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImg);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideImg]);

  useEffect(() => {
    const slides = document.querySelectorAll(".carousel-item");
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        gsap.fromTo(
          slide,
          { autoAlpha: 0, ease: "power1.out", x: 100 },
          { autoAlpha: 1, x: 0, ease: "power1.out", duration: 1.5 },
        );
      } else {
        gsap.to(slide, {
          autoAlpha: 0,
          x: -100,
          ease: "power1.out",
          duration: 1,
        });
      }
    });
  }, [currentSlide]);

  useGSAP(() => {
    gsap.fromTo(
      "#welcome",
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 0.3,
        delimiter: " ",
        ease: "power2.out",
        x: 0,
      },
    );

    gsap.fromTo(
      "#btn",
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 0.6,
        delimiter: " ",
        ease: "power2.out",
        x: 0,
      },
    );

    gsap.fromTo(
      "#carousel",
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 0.8,
        ease: "power2.out",
        x: 0,
      },
    );
  });

  return (
    <div className="flex ">
      <div
        ref={textbox}
        className="flex flex-col justify-center items-center text-white lg:m-10 md:m-20 sm:m-30"
      >
        <p
          id="welcome"
          className="text-center mr-auto text-5xl font-bold font-body"
        >
          Welcome To The Best Gym In Town
        </p>
        <div>
          <Link href={"./contactform"}>
            <button
              id="btn"
              className="font-body m-10 bg-orange-500 p-4 rounded-xl font-bold hover:scale-150 
          hover:bg-orange-600 transition-all ease-in-out duration-100 delay-100"
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <div id="carousel" className=" carousel w-[1000px] h-screen">
        {ImgsTotal.map((img, index) => (
          <div
            key={index}
            ref={index === 0 ? img1 : index === 1 ? img2 : img3}
            className={` carousel-item relative w-full  ${currentSlide === index ? "block" : "hidden"}`}
          >
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              className="relative w-auto h-screen"
            />
            <div className="absolute left-[-33.75rem] inset-0 bg-gradient-to-r from-transparent via-black to-transparent z-10"></div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
