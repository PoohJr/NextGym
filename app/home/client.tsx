'use client';
import React, { useRef, useEffect, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import Image from 'next/image'
import Img1 from './images/gym1.jpg'
import Img2 from './images/gym2.jpg'
import Img3 from './images/gym3.jpg'

gsap.registerPlugin(useGSAP, TextPlugin);

const Client = () => {

  useEffect(() => {

  },[])
// Use effect for makin the img switch pages every couple secs
// use setInterval 

    useGSAP(() => {
      gsap.fromTo('#welcome', {
        opacity:0,
        x: -100
      },{
        opacity:1,
        duration:1,
        delay:.3,
        delimiter: " ",
        ease: "power2.out",
        x:0
      })

      gsap.fromTo('#btn', {
        opacity:0,
        x: -100
      },{
        opacity:1,
        duration:1,
        delay:.3,
        delimiter: " ",
        ease: "power2.out",
        x:0
      })

      
    })
    // This is make a animation for the refs under me and text and the button to appear at the same time

    const img1 = useRef(null);
    const img2 = useRef(null);
    const img3 = useRef(null);
    const img4 = useRef(null);
    const textbox = useRef(null);
    
  return (
    
      <div className='flex justify-between'>
      <div ref={textbox} className="flex flex-col justify-center items-center text-white">
          <p id='welcome' className='text-center mr-auto text-5xl font-bold font-body'>Welcome To The Best Gym In Town</p>
          <div className="">
          <button id='btn' className="m-10 btn-lg btn-outline btn-warning">Contact Us</button>
          </div>
      </div>
   
    <div className=" carousel lg:w-[900px] h-screen">
      <div ref={img1} id="slide1" className="carousel-item relative w-full h-auto ">
        <Image
          src={Img1}
          alt='Image of Dumbell'
          className=" relative z-10 w-full"/>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div ref={img2} id="slide2" className="carousel-item relative w-full">
      <Image
          src={Img2}
          alt='Image of Gym Man'
          className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div ref={img3} id="slide3" className="carousel-item relative w-full">
      <Image
          src={Img3}
          alt='Image of Strong Independent Women'
          className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          {/* <a href="#slide4" className="btn btn-circle">❯</a> */}
        </div>
      </div>
    </div>
        
  </div>
    
  )
}

export default Client
