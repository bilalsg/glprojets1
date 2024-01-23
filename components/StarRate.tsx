import React, { useState } from 'react';

const StarRate: React.FC<{ onChange: (rating: number) => void }> = ({ onChange }) => {
  const [rating, setRating] = useState<number | null>(null);

  const handleClick = (newRating: number) => {
    setRating(newRating);
    onChange(newRating);
  };

  return (
    <div className='flex'>
      {[1, 2, 3, 4, 5].map((star) => (
        <p
          key={star}
          onClick={() => handleClick(star)}
          className={`text-md cursor-pointer mx-1 ${star <= (rating || 0) ? 'text-yellow-500' : 'text-gray-300'}`}
        >
          ★ 
        </p>
      ))}
    </div>
  );
};

export default StarRate;
