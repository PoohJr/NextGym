import React from 'react'
import Image from 'next/image'
import Trainer1 from './img-train/trainer.jpg'

const Trainer = () => {
  return (
    
    <div className="m-20 ">
        <div className="flex justify-between bg-slate-950 rounded-xl">
            <div className="p-20">
                <p className='text-2xl text-white font-body text-center'>Hire our Best Trainers In the City!</p>
                <ul className='pt-10 font-body'>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                </ul>
                <button className='font-body bg-orange-500 text-white p-4 rounded-xl w-40'>See Our Training</button>
            </div>
            <div className="flex flex-col">
                <Image
                src={Trainer1}
                alt=""/>
            </div>
        </div>
    </div>
    
  )
}

export default Trainer
