import React, { useState, useEffect } from "react";
const friends = [
  {
    name: "Diwakar Joshi",
    age: 20,
    no: 109,
    city: "Uttarakhand",
    rank: "First",
    image: "src/assets/diwakar.jpeg",
  },
  {
    name: "Ekansh Srivastava",
    age: 19,
    no: 87,
    city: "Prayagraj",
    rank: "Second",
    image: "src/assets/ekansh.jpg",
  },
  {
    name: "Gaurav Singh",
    age: 20,
    no: 79,
    city: "Prayagraj",
    rank: "Third",
    image: "src/assets/gaurav.jpeg",
  },
  {
    name: "Faizan Khan",
    age: 19,
    no: 76,
    city: "Mirzapur",
    rank: "Fourth",
    image: "src/assets/faizan.jpeg",
  },
  {
    name: "Gaurav Srivastava",
    age: 19,
    no: 73,
    city: "Prayagraj",
    rank: "Fifth",
    image: "src/assets/gauravs.jpeg",
  },
];

const FriendCards = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % friends.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const friend = friends[index];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 animate-gradient-x">
      
      <div className="backdrop-blur-lg bg-white/40 border border-white/30 rounded-3xl shadow-2xl p-8 w-80 text-center transform transition duration-500 hover:scale-105">
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={friend.image}
            alt={friend.name}
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-lg object-cover"
          />
        </div>

        {/* Name */}
        <h2 className="text-2xl font-extrabold text-gray-800 mt-4">
          {friend.name}
        </h2>

        {/* Details */}
        <div className="mt-4 space-y-2 text-gray-700">
          <p className="bg-white/60 rounded-lg py-1 px-3 shadow-sm">
            🎂 <strong>Age:</strong> {friend.age}
          </p>
          <p className="bg-white/60 rounded-lg py-1 px-3 shadow-sm">
            📍 <strong>City:</strong> {friend.city}
          </p>
          <p className="bg-white/60 rounded-lg py-1 px-3 shadow-sm">
            🏆 <strong>Rank:</strong> {friend.rank}
          </p>
          <p className='bg-white/60 rounded-lg py-1 px-3 shadow-sm'>
          🔢 <strong>Marks:</strong> {friend.no}/120
          </p>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center mt-5 space-x-2">
          {friends.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-blue-600 scale-125" : "bg-gray-400"
              } transition-all`}
            ></div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FriendCards;