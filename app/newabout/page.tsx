import React from "react";

const Page = () => {
  return (
    <>
      <div className="relative hero min-h-screen">
        <video
          className="absolute top-0 left-0 w-full h-screen object-cover"
          src="https://videos.pexels.com/video-files/5319856/5319856-uhd_1440_2560_25fps.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center relative z-10">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen">
        <p className="">About Us</p>
      </div>
    </>
  );
};
// inspartiono of the about us page
// https://www.canva.com/design/DAGLgzc08CM/eukAze0-G3H_HN-JLToXAA/edit

export default Page;
