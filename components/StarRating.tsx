"use client"
interface StarRatingProps {
  initialRating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ initialRating }) => {

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((index) => (
        <p
          key={index}
          className={`text-md mx-1 ${index <= initialRating ? 'text-yellow-500' : 'text-gray-300'}`}
        >
          ★ 
        </p>
      ))}
    </div>
  );
};

export default StarRating;