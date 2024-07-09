import React from 'react'
import Image from 'next/image'
import Img1 from './images/gym1.jpg'
import Img2 from './images/gym2.jpg'
import Img3 from './images/gym3.jpg'

const HomePage = () => {
    const imgs =[Img1, Img2, Img3]
  return (
    <div className='bg-black w-full h-screen'>

        {imgs.map((pic, index) => (
        <Image
        key={index}
        className='w-full'
        src={pic}
        alt="it is a pic of Home screen"
        />
        ))}
        
    </div>
  )
}

export default HomePage
