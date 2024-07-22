import React from "react";

const Boxingpage = () => {
  return (
    <div className="h-full">
      <div className="relative">
        <video
          className="absolute  w-full h-full object-cover"
          src={require("../../public/videos/boxing.mp4")}
          autoPlay
          loop
          muted
        ></video>
        <p className="absolute">Welcome to World Of boxing</p>
      </div>
    </div>
  );
};

export default Boxingpage;
