import React from 'react'
import Image from 'next/image'
import Img1 from './images/gym1.jpg'
import Img2 from './images/gym2.jpg'
import Img3 from './images/gym3.jpg'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);

const HomePage = () => {
  use

  return (
    <div className='bg-black w-full h-screen'>

    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-full">
        <Image
          src={Img1}
          alt='Image of Dumbell'
          className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
      <Image
          src={Img2}
          alt='Image of Gym Man'
          className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
      <Image
          src={Img3}
          alt='Image of Strong Independent Women'
          className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
        
  </div>
  // end of contaiter div ^^
  )
}

export default HomePage
