import React from 'react'

const Cards = () => {
    const letters = ["some great things", "some better things", "some even greater things"]
    const names = ["Sarah", "Michael", "Phill"]
  
    return (
        <div className='bg-black'>
            {letters.map((letter, index) => (
                <div key={index} className="bg-white p-20 m-2" >
                    <p>{letter}</p>
                    <p>{names[index]}</p>
                </div>
            ))}
        </div>
    )
}

export default Cards
