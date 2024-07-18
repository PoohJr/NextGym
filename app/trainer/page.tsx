import React from "react";
import Image from "next/image";
import Bill from "./trainersimg/bill.jpg";

const Trainpage = () => {
  const trainersImg = [];
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
      {Bill}
    </div>
  );
};

export default Trainpage;
