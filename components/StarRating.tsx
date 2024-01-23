interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((index) => (
        <p
          key={index}
          className={`text-md mx-1 ${index <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
        >
          ★ 
        </p>
      ))}
    </div>
  );
};

export default StarRating;