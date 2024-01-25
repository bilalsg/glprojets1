import React, { useState } from 'react';

const StarRate: React.FC<{ onChange: (rating: number) => void }> = ({ onChange }) => {
  const [rating, setRating] = useState<number | null>(null);

  const handleClick = (newRating: number) => {
    onChange(newRating);
    console.log("hello")
    setRating(newRating);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log('hello 2')
    event.preventDefault();
    console.log(rating);

    // const apiUrl = '';

    // try {
    //   const response = await fetch(apiUrl, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     console.log('Appointment submitted successfully!');
    //   } else {
    //     console.error('Error submitting appointment:', response.statusText);
    //   }
    // } catch (error) {
    //   console.error('Network error:');
    // }
  };
  return (
    <form onSubmit={handleSubmit}  className='flex gap-2'>
        {[1, 2, 3, 4, 5].map((star) => (
          <p
            key={star}
            onClick={() => handleClick(star)}
            className={`text-md cursor-pointer mx-1 ${star <= (rating || 0) ? 'text-yellow-500' : 'text-gray-300'}`}
          >
            ★ 
          </p>
        ))}
      <button type="submit" className='px-2 py-1 bg-red-700 text-white rounded-md text-sm'>send</button>
    </form>
    
  );
};

export default StarRate;
