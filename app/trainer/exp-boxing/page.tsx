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
import MaleBoxer from "../../public/boxing-img/boxers-males-boxing-sports-c7038a-1024.jpg";
import Clock from "../../public/boxing-img/th-1845431758.svg";
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

const ExpertBoxing = () => {
  const cardsRef = useRef(null);

  useGSAP(() => {
    // gsap.from(cardsRef.current, {
    //   opacity: 0,
    //   scrollTrigger: {

    //   }
    // });
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

      {/* Cards  */}

      {/* Expert boxing classes are designed for advanced practitioners who have mastered the basics and intermediate techniques. These classes focus on refining skills, advanced strategies, high-intensity conditioning, and preparation for competitive boxing. Here’s what might be involved:

### Technique Mastery
1. **Precision and Timing:**
   - Refining punch accuracy and timing.
   - Advanced drills to improve reaction speed.

2. **Complex Combinations:**
   - Incorporating feints and deceptive moves.
   - Developing unique and personalized combinations.

3. **Advanced Footwork:**
   - Mastering pivots, sidesteps, and advanced angles.
   - Footwork drills to enhance movement efficiency.

4. **Defense and Countering:**
   - Advanced defensive techniques like shoulder rolls, pull counters, and slips.
   - Developing effective counterpunching strategies.

### Conditioning and Strength
1. **High-Intensity Conditioning:**
   - Advanced HIIT routines.
   - Endurance circuits with minimal rest.

2. **Explosive Strength Training:**
   - Olympic lifts and plyometric exercises.
   - Heavy bag work for power development.

3. **Sport-Specific Conditioning:**
   - Drills that mimic fight conditions.
   - Extended sparring sessions for stamina.

### Sparring and Live Drills
1. **Full-Contact Sparring:**
   - Regular and intense sparring sessions.
   - Incorporating fight scenarios and round-based sparring.

2. **Technical Sparring:**
   - Focused on specific techniques or strategies.
   - Partner drills to simulate fight situations.

3. **Situational Sparring:**
   - Practicing specific scenarios (e.g., fighting off the ropes, dealing with aggressive opponents).

### Strategy and Tactics
1. **Advanced Fight Strategy:**
   - Developing and implementing complex game plans.
   - Studying and adapting to different boxing styles.

2. **Opponent Analysis:**
   - Reviewing fight footage to understand and exploit opponent weaknesses.
   - Practicing adjustments and counter-strategies.

3. **Mental Toughness:**
   - Psychological preparation for competition.
   - Techniques to maintain focus and composure under pressure.

### Specialized Drills and Equipment
1. **Focus Mitts and Pads:**
   - Advanced mitt work for precision and power.
   - Incorporating defensive maneuvers and counters.

2. **Double-End and Speed Bags:**
   - Enhancing hand-eye coordination and reflexes.
   - Advanced drills for rhythm and timing.

3. **Resistance Training:**
   - Using resistance bands and weighted equipment.
   - Drills to improve punch speed and power.

### Class Structure
1. **Warm-up:**
   - Intense dynamic stretching and sport-specific drills.

2. **Technical Drills:**
   - Advanced techniques and combination drills.
   - Partner drills for timing and precision.

3. **Conditioning:**
   - High-intensity circuits and sport-specific exercises.

4. **Sparring/Live Drills:**
   - Full-contact and situational sparring.
   - Focus on implementing strategies and techniques in live situations.

5. **Cool-down:**
   - Comprehensive stretching and recovery exercises.

### Competition Preparation
1. **Mock Fights:**
   - Simulating fight conditions with judges and rounds.
   - Analyzing performance and making adjustments.

2. **Weight Management:**
   - Nutrition and training to maintain or reach competition weight.
   - Monitoring hydration and recovery.

3. **Injury Prevention and Recovery:**
   - Techniques for injury prevention.
   - Recovery strategies including rest, massage, and physiotherapy.

Expert boxing classes demand a high level of commitment, physical fitness, and technical skill. They are geared towards individuals preparing for competitive boxing or looking to achieve peak performance in the sport. */}
      <div className="mt-10 flex flex-col justify-center items-center">
        <div ref={cardsRef} className="">
          {/* copy div below */}
          <div className="bg-white rounded-xl h-fit w-64 my-5 ">
            <div className="flex flex-col justify-center items-center">
              <Image className="h-24 mt-5" src={Boxingsvg} alt=""></Image>
              <div className="">
                <p className="text-center text-black">FootWork and Stance</p>
                <ul className="p-2">
                  <li className="flex flex-col mb-2">
                    <strong>Stance</strong>
                    {/* Header */}
                    <ul className="list-disc list-inside pl-4">
                      <li>Feet shoulder-width apart</li>
                      <li>Balanced weight</li>
                      {/* Li des */}
                    </ul>
                  </li>
                  <li>
                    <strong>Footwork</strong>
                    <ul className="list-disc list-inside pl-4">
                      <li>Step in all directions</li>
                      <li>Pivot, shuffle, slide</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Drills</strong>
                    <ul className="list-disc list-inside pl-4">
                      <li>Shadowboxing</li>
                      <li>Ladder and cone drills</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Conditioning</strong>
                    <ul className="list-disc list-inside pl-4">
                      <li>Skipping rope</li>
                      <li>Leg strength exercises</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl h-fit w-64 my-5 ">
            <div className="flex flex-col justify-center items-center">
              <Image className="h-24 mt-5" src={Boxing} alt=""></Image>
              <div className="">
                <p className="text-center text-black">Offense</p>
                <ul className="p-2">
                  <li className="flex flex-col mb-2">
                    <strong>Jab</strong>
                    {/* Header */}
                    <ul className="list-disc list-inside pl-4">
                      <li>A quick, straight punch with the lead hand</li>
                      {/* Li des */}
                    </ul>
                  </li>
                  <li>
                    <strong>Cross</strong>
                    <ul className="list-disc list-inside pl-4">
                      <li>A powerful, straight punch with the rear hand.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="">Hook</strong>
                    <ul className="list-disc list-inside pl-4">
                      <li>A semi-circular punch with the lead or rear hand.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Overhand</strong>
                    <ul className="list-disc list-inside pl-4">
                      <li>
                        A punch thrown with the rear hand in an arching motion,
                        aimed at the opponent's head.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Body Shot</strong>
                    <ul className="list-disc list-inside pl-4">
                      <li>
                        Any punch aimed at the opponent's torso to weaken their
                        stamina.
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
              <Image className="h-24 mt-5" src={Heavybag} alt=""></Image>
              {/* Make this about defense  */}
              <div className="">
                <p className="text-center text-black">Defense Techniques</p>
                <ul className="p-2">
                  <li className="flex flex-col mb-2">
                    <strong>Slipping</strong>
                    {/* Header */}
                    <ul className="list-disc list-inside pl-4">
                      <li>
                        {" "}
                        Move your head to the side to avoid punches. Quite
                        Simple
                      </li>
                      {/* Li des */}
                    </ul>
                  </li>
                  <li>
                    <strong>Bobbing</strong>
                    <ul className="list-disc list-inside pl-4">
                      <li>
                        Bend your knees and move your body up and down to dodge
                        punches.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong className="">Weaving</strong>
                    <ul className="list-disc list-inside pl-4">
                      <li> Move your head in a U-shape under punches.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Blocking</strong>
                    <ul className="list-disc list-inside pl-4">
                      <li>Use your gloves and arms to block punches.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Parrying</strong>
                    <ul className="list-disc list-inside pl-4">
                      <li>Deflect punches with your hands.</li>
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

export default ExpertBoxing;
