import React from "react";
import Image, { StaticImageData } from "next/image";
import Bill from "../public/teach-img/Bill.jpg";
import Zoey from "../public/teach-img/Zoey.jpg";
import Francis from "../public/teach-img/Francis.jpg";
import Luis from "../public/teach-img/Luis.jpg";
import Link from "next/link";

interface Trainer {
  img: StaticImageData;
  name: string;
  desc: string;
  title: string;
  goto: string;
}

const trainers: Trainer[] = [
  {
    img: Bill,
    name: "Bill",
    desc: "Bill is Great boxing Coach",
    title: "Boxing Coach",
    goto: "boxing",
  },
  {
    img: Zoey,
    name: "Zoey",
    desc: "Zoey is a great Yoga Instructor",
    title: "Yoga Coach",
    goto: "yoga",
  },
  {
    img: Francis,
    name: "Francis",
    desc: "Our best strength coach is the one and only Francis",
    title: "Stength Coach",
    goto: "strength",
  },
  {
    img: Luis,
    name: "Luis",
    desc: "Our swimming coach is Luis",
    title: "Swimming Coach",
    goto: "swimming",
  },
];

const Trainpage: React.FC = () => {
  return (
    <div className="p-8 h-full bg-gradient-to-br from-slate-50 via-slate-500 to-slate-950">
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
                <button className="text-white font-body bg-red-600 p-3 rounded-lg">
                  Click Here for more Info
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainpage;
