import React from 'react';

interface StarDisplayProps {
  max: number;
  rating: number;
}

const StarDisplay: React.FC<StarDisplayProps> = ({ max, rating }) => {
  // Ensure that rating is within the valid range (0 to max)
  const clampedRating = Math.max(0, Math.min(rating, max));

  return (
    <div className="flex items-center">
      {[...Array(max)].map((_, index) => (
        <span
          key={index}
          className={`text-xl ${
            index < clampedRating ? 'text-yellow-500' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarDisplay;
