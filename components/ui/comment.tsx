"use client"
"use client";
import React from 'react';
import StarDisplay from '../rating';

interface Review {
  lawyerr: number;
  rating: number;
  comment: string;
  id: number;
  name: string;
  email: string;
}

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Comment: React.FC<Review> = ({ comment, rating, name, email }) => {
  const initial = name.charAt(0).toUpperCase();
  const randomColor = getRandomColor();

  return (
    <div className="flex flex-col mb-2 gap-4 bg-black p-4 text-white">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div
            className="flex items-center font-meduim text-xl justify-center w-14 h-14 rounded-full"
            style={{ backgroundColor: randomColor }}
          >
            {initial}
          </div>
          <div>{name}</div>
        </div>
        <div className="flex items-center gap-1 text-yellow-300">
          <StarDisplay max={5} rating={rating} />
        </div>
      </div>

      <div className="whitespace-pre-line">{comment}</div>
      <div>{email}</div>

      <div className="flex justify-between items-center">
        <span>{rating}</span>
        <button className="p-1 px-2 bg-gray-900 hover:bg-gray-950 border border-gray-950 bg-opacity-60">
          Share
        </button>
      </div>
    </div>
  );
};

export default Comment;
