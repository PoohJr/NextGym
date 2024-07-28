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
    todo: "/trainer/beg-boxing",
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

const Trainpage: React.FC = () => {
  const dayMessage = getNewdat();

  return (
    <>
      <div className="pt-8">
        <p className="text-center text-3xl text-white font-body">
          Classes this week
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
        <div className=" bg-white">
          <div className="flex  bg-white w-full p-2 pl-4 text-slate-950">
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
    </>
  );
};

// instaration for
// https://www.equinox.com/clubs/new-york/brooklyn/brooklynheights

export default Trainpage;
