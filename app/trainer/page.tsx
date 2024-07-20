import React from "react";
import Image from "next/image";
import Bill from "../public/teach-img/Bill.jpg";
import Zoey from "../public/teach-img/Zoey.jpg";

const Trainpage = () => {
  const trainersImg = [Bill, Zoey];
  const trainersName = ["Bill", "Zoey", "Francis", "Louis"];

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
      <div className="w-96 h-96">
        <Image src={Bill} alt="" />
      </div>
    </div>
  );
};

export default Trainpage;
