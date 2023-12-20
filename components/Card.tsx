import React from 'react';
interface FeedbackCardProps {
  content: string;
  name: string;
  title: string;
  img: any;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ content, name, title, img }) => (
  <div className="flex  group-hover:blur-sm hover:!blur-none hover:scale-105 duration-300 backdrop-blur-sm bg-white/10 hover:bg-white/30 justify-between flex-col px-10 py-12 max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5  backdrop-filter ">
    <div className="flex flex-col justify-center items-center">
      <img src={img} alt={name} className="w-[80px] h-[80px] object-cover  bg-red-700 p-[6px] rounded-full" />

      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] text-white leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    
  </div>
);

export default FeedbackCard;
