import React from "react";
import Image from "next/image";
import Bill from "../public/teach-img/Bill.jpg";
import Zoey from "../public/teach-img/Zoey.jpg";
import Francis from "../public/teach-img/Francis.jpg";
import Luis from "../public/teach-img/Luis.jpg";

const Trainpage = () => {
  // Decorate this more but this is the foundation
  const trainersImg = [Bill, Zoey, Francis, Luis];
  const trainersName = ["Bill", "Zoey", "Francis", "Louis"];
  const trainersDesc = [
    "Bill is Great boxing Coach",
    "Zoey is a great Yoga Instructer",
    "our best strength coaxh is the one and only Francis",
    "our swimming coach is luis ",
  ];

  return (
    <div className="p-8">
      <div className="p-10">
        <p className="text-center text-3xl text-white font-body">
          Hello and Welcome To the
        </p>
        <p className="text-center text-3xl text-white font-body">
          Trainers of (nameofgym)
        </p>
      </div>
      <div className="flex flex-col justify-center  items-center">
        {trainersImg.map((img, index) => (
          <div className="w-auto h-auto m-10 p-10" key={index}>
            <Image className="w-96 h-96" src={img} alt="hello" />
            <p className="text-center font-body text-white text-2xl">
              {trainersName[index]}
            </p>
            <p className="text-center p-3 font-body text-white">
              {trainersDesc[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainpage;
