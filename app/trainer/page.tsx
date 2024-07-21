import React from "react";
import Image, { StaticImageData } from "next/image";
import Bill from "../public/teach-img/Bill.jpg";
import Zoey from "../public/teach-img/Zoey.jpg";
import Francis from "../public/teach-img/Francis.jpg";
import Luis from "../public/teach-img/Luis.jpg";

interface Trainer {
  img: StaticImageData;
  name: string;
  desc: string;
}

const trainers: Trainer[] = [
  { img: Bill, name: "Bill", desc: "Bill is Great boxing Coach" },
  { img: Zoey, name: "Zoey", desc: "Zoey is a great Yoga Instructor" },
  {
    img: Francis,
    name: "Francis",
    desc: "Our best strength coach is the one and only Francis",
  },
  { img: Luis, name: "Luis", desc: "Our swimming coach is Luis" },
];

const Trainpage: React.FC = () => {
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
      <div className="flex flex-col justify-center items-center">
        {trainers.map((trainer, index) => (
          <div className="w-auto h-auto m-10 p-10" key={index}>
            <Image className="w-96 h-96" src={trainer.img} alt={trainer.name} />
            <p className="text-center font-body text-white text-2xl">
              {trainer.name}
            </p>
            <p className="text-center p-3 font-body text-white">
              {trainer.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainpage;
