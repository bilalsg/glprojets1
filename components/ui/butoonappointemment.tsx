"use client"
import React, { useState } from 'react';
import AppointmentForm from '../Form2';

const AppointmentButton: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative pt-2">
     <button className="bg-red-700 text-white p-2" onClick={handleButtonClick}>
    Prendre rendez-vous
</button>


      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50  flex items-center pt-6 justify-center">
          <div className="  p-4 w-1/3 rounded-lg">
            <div className='relative backdrop-blur-md bg-black/30 text-white'>
               <AppointmentForm />  
                 <button className="absolute bottom-6 right-6 text-white" onClick={handleCloseModal}>
                  Close
                </button>
            </div>
         
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentButton;
