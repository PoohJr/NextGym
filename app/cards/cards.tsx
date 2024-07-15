import React from "react";

const Cards = () => {
  const letters = [
    "Amazing gym with a motivating atmosphere! The personal trainers are experienced and supportive. I've seen great improvements in my fitness. Five stars!",
    "Fantastic gym! Clean facilities, top-notch equipment, and friendly staff. The variety of classes keeps workouts fun and challenging. Highly recommend!",
    "Joining this gym was the best decision for my health. Spacious, well-equipped, and welcoming staff. The group classes are fun and cater to all fitness levels. Highly recommend!",
  ];
  const names = ["Sarah", "Michael", "Phill"];

  return (
    <div className="bg-black p-4">
      <div className="flex justify-center">
        {letters.map((letter, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 m-2 flex flex-col justify-between h-full"
          >
            <p className="flex-grow text-center">{letter}</p>
            <p className="text-3xl text-center text-black font-body mt-4">
              {names[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
