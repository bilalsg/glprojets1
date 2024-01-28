import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className=" text-white pb-60 h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="md:text-[300px] text-6xl font-bold">404</h1>
        <p className="text-4xl font-medium mt-4">Oops!</p>
       
      </div>
    </div>
  );
};

export default NotFoundPage;