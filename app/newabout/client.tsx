"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import BackImg from "../public/classes-img/bg.jpg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Client() {
  const aboutRef = useRef(null);
  const bodyRef = useRef(null);

  useGSAP(() => {
    gsap.from(aboutRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        toggleActions: "restart none none none",
      },
      opacity: 0,
      x: -100,
      ease: "power2.out",
      duration: 1,
    });

    gsap.from(bodyRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        toggleActions: "restart none none none",
      },
      opacity: 0,
      x: 100,
      delay: 0.4,
      start: "top center",
      markers: true,
      ease: "power2.out",
      duration: 1,
    });

    gsap.from("#about2", {
      scrollTrigger: {
        trigger: "#about2",
        toggleActions: "restart none none none",
      },
      opacity: 0,
      x: -100,
      ease: "power2.out",
      duration: 1,
    });
  }, []);

  return (
    <div className=" mt-[450px]">
      <div ref={aboutRef} className="">
        <p className="text-center font-body text-4xl text-white">About Us</p>
      </div>
      <div ref={bodyRef} className=" p-5">
        <p className="text-white text-center">
          Welcome to [Gym Name], where community and fitness come together! Born
          from the heart of a small, tight-knit community, we are excited to
          expand and bring our passion for health and wellness to a larger
          audience. At [Gym Name], we believe that fitness is more than just a
          routine; it's a lifestyle that fosters growth, resilience, and a sense
          of belonging. Our journey began in a humble space, fueled by a shared
          vision of creating a supportive environment where everyone feels
          welcome and motivated to achieve their personal best. Our
          state-of-the-art facilities are designed to cater to all fitness
          levels, from beginners to seasoned athletes. Whether you're looking to
          build strength, improve endurance, or simply maintain a healthy
          lifestyle, our diverse range of equipment, classes, and personalized
          training programs are here to help you reach your goals. What sets us
          apart is our commitment to community. We understand that a strong
          support system can make all the difference in your fitness journey.
          That's why we've cultivated a welcoming atmosphere where members can
          connect, encourage each other, and celebrate their successes together.
          Join us at [Gym Name] and become a part of our growing family. Let's
          work together to create a healthier, happier community, one workout at
          a time
        </p>
      </div>
      <div className="relative h-screen flex items-center justify-center mt-20">
        <Image
          className="absolute inset-0 w-full h-screen object-cover "
          src={BackImg}
          alt="Hello"
        />
        <p id="about2" className="relative text-white text-3xl">
          Hello There
        </p>
      </div>
    </div>
  );
}

export default Client;
