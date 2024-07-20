import React from "react";
import Image from "next/image";
import Trainer1 from "./public/img-train/trainer.jpg";
import Link from "next/link";

const Trainer = () => {
  return (
    <div className="m-20 mt-32">
      <div className="flex justify-center items-center bg-slate-950 rounded-xl">
        <div id="hello" className="p-10 items-center align-middle">
          <p className="text-2xl text-white font-body text-center">
            Hire our Best Trainers In the City!
          </p>
          <ul className="pt-10 font-body">
            <li className="p-1">Strength Training</li>
            <li className="p-1">Yoga Sessions</li>
            <li className="p-1">Power Lifting</li>
          </ul>
          <Link href={"./trainer"}>
            <button
              className="font-body bg-orange-500 text-white 
        p-4 mt-9 rounded-xl w-40
        hover:bg-orange-600 
        transition-all ease-in-out duration-100 delay-100
        "
            >
              See Our Training
            </button>
          </Link>
        </div>
        <div className="flex flex-col">
          <Image className="h-[500px]" src={Trainer1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Trainer;
