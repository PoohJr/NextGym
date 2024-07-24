import React, { useEffect } from "react";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Bill from "../public/teach-img/Bill.jpg";
import Zoey from "../public/teach-img/Zoey.jpg";
import Francis from "../public/teach-img/Francis.jpg";
import Luis from "../public/teach-img/Luis.jpg";
import Link from "next/link";
import { time } from "console";

// interface Trainer {
//   img: StaticImageData;
//   name: string;
//   desc: string;
//   title: string;
//   goto: string;
// }
interface initialSchedule {
  typeofclass: string;
  nameofcoach: string;
  location: string;
  time: string;
  todo: string;
}

const getNewdat = () => {
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  const month = d.getMonth();
  if (month == 0) {
    return monthName[0];
  } else if (month == 1) {
    return monthName[1];
  } else if (month == 2) {
    return monthName[2];
  } else if (month == 3) {
    return monthName[3];
  } else if (month == 4) {
    return monthName[4];
  } else if (month == 5) {
    return monthName[5];
  } else if (month == 6) {
    return monthName[6];
  } else if (month == 7) {
    return monthName[7];
  } else if (month == 8) {
    return monthName[8];
  } else if (month == 9) {
    return monthName[9];
  } else if (month == 10) {
    return monthName[10];
  } else if (month == 11) {
    return monthName[11];
  } else month == 6;
  return monthName[6];
};

const d = new Date();
const day = d.getDay();

const initialSchedule: Schedule[] = [
  {
    typeofclass: "Boxing",
    nameofcoach: "Bill",
    location: "address",
    time: "7:00am - 7:45am",
    todo: "/trainer/boxing",
  },
  {
    typeofclass: "Yoga",
    nameofcoach: "Zoey",
    location: "address",
    time: "8:00am - 8:45am",
    todo: "/trainer/yoga",
  },
  {
    typeofclass: "Strenth Training",
    nameofcoach: "Francis",
    location: "address",
    time: "9:00am - 9:45am",
    todo: "/trainer/strength",
  },
];
// const trainers: Trainer[] = [
//   {
//     img: Bill,
//     name: "Bill",
//     desc: "Bill is Great boxing Coach",
//     title: "Boxing Coach",
//     goto: "boxing",
//   },
//   {
//     img: Zoey,
//     name: "Zoey",
//     desc: "Zoey is a great Yoga Instructor",
//     title: "Yoga Coach",
//     goto: "yoga",
//   },
//   {
//     img: Francis,
//     name: "Francis",
//     desc: "Our best strength coach is the one and only Francis",
//     title: "Stength Coach",
//     goto: "strength",
//   },
//   {
//     img: Luis,
//     name: "Luis",
//     desc: "Our swimming coach is Luis",
//     title: "Swimming Coach",
//     goto: "swimming",
//   },
// ];

const Trainpage: React.FC = () => {
  const dayMessage = getNewdat();

  return (
    <>
      <div className="p-10">
        <p className="text-center text-3xl text-white font-body">
          Hello and Welcome To the
        </p>
        <p className="text-center text-3xl text-white font-body">
          Trainers of (nameofgym)
        </p>
      </div>
      <div className="p-8">
        <nav className="">
          <ul className="flex justify-evenly bg-slate-500 p-3">
            <li className="cursor-pointer">
              <p className="text-white align-middle">Mon</p>
            </li>
            <li className="cursor-pointer">
              <p className="text-white">Tues</p>
            </li>
            <li className="cursor-pointer">
              <p className="text-white">Wed</p>
            </li>
            <li className="cursor-pointer">
              <p className="text-white">Thu</p>
            </li>
            <li className="cursor-pointer">
              <p className="text-white">Fri</p>
            </li>
            <li className="cursor-pointer">
              <p className="text-white">Sat</p>
            </li>
            <li className="cursor-pointer">
              <p className="text-white">Sun</p>
            </li>
          </ul>
        </nav>
        <div className="mt-2 bg-white">
          <div className="flex  bg-white w-full px-5 pt-5 text-slate-950">
            <p>{dayMessage}</p> <p className="ml-1">{day}</p>
          </div>
          <hr></hr>
          {initialSchedule.map((item, index) => (
            <div key={index} className="m-1">
              <Link href={item.todo}>
                <div className="">
                  <h3 className="text-center text-black font-body ">
                    {item.typeofclass}
                  </h3>
                  <p className="text-center">
                    Instructor: <span>{item.nameofcoach}</span>
                  </p>
                  <p className="text-center">{item.location}</p>
                  <p className="text-center">{item.time}</p>
                  <hr></hr>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="flex flex-col justify-center items-center">
        {trainers.map((trainer, index) => (
          <div className="w-screen h-screen m-28 p-10  " key={index}>
            <Image
              className="w-screen h-screen border-4 border-cyan-100"
              src={trainer.img}
              alt={trainer.name}
            />
            <p className="text-center font-body text-white text-2xl mt-2">
              {trainer.name}
            </p>
            <p className="text-center font-body font-bold ">{trainer.title}</p>
            <p className="text-center py-2 font-body text-white">
              {trainer.desc}
            </p>
            <div className="flex justify-center">
              <Link href={`/trainer/${trainer.goto}`}>
                <b className="text-white"utton className="text-white font-body bg-red-600 p-3 rounded-lg">
                  Click Here for more Info
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
};

// instaration for
// https://www.equinox.com/clubs/new-york/brooklyn/brooklynheights

export default Trainpage;
