"use client"
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '@/providers/AuthContext';
// AppointmentForm component
const AppointmentForm: React.FC = () => {
  // State for selected date and time
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const pathArray = window.location.pathname.split('/');
  const {userId}=useAuth()
  // Select the last element in the array, which is the 'id'
  const idParam = pathArray[pathArray.length - 1];
  const id = idParam ? Number(idParam) : NaN;
  console.log("this is id n",id)
  // Session information
  const { status } = useSession();

  // Handle date change
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  // Handle time change
  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    // API data for appointment creation
    const data = {
      google_user: userId, // Use userId for google_user
      law: id, // Use id for law
      time: selectedTime,
      date_created: selectedDate,
    };
  
    try {
      // Make a POST request to your Django backend API
      const response = await axios.post('http://127.0.0.1:8000/appform/', data, {
        headers: {
          'X-User-ID': `${userId}`, // Assuming `id` is your token
        },
      });
  
      // Handle the response as needed
      console.log('Appointment booked:', response.data);
    } catch (error: any) {
      // Log the entire Axios error object for more details
      console.error('Error booking appointment:', error);
  
      // You can access the response status and data if available
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      }
    }
  };
  
  // Determine if the button should be disabled
  const isButtonDisabled = status !== 'authenticated';

  // Render the component
  return (
    <div className="mx-auto p-8 h-1/2 z-30">
  <form onSubmit={handleSubmit} className="rounded-md relative p-4 h-[500px] flex flex-col justify-center max-w-md mx-auto">
    <div className="mb-4">
      <label htmlFor="date" className="block text-white text-sm font-medium mb-2">
        Sélectionnez la date
      </label>
      <input
        type="date"
        id="date"
        name="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="bg-gray-800 border border-gray-600 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="time" className="block text-white text-sm font-medium mb-2">
        Sélectionnez l'heure
      </label>
      <select
        id="time"
        name="time"
        value={selectedTime}
        onChange={handleTimeChange}
        className="bg-gray-800 border border-gray-600 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500 overflow-y-auto"
        required
      >
        <option value="" disabled>
          Sélectionnez l'heure
        </option>
        <option value="7:00  - 8:00">7:00 - 8:00</option>
        <option value="8:00  - 9:00">8:00 - 9:00</option>
        <option value="9:00  - 10:00">9:00 - 10:00</option>
        <option value="10:00 - 11:00">10:00 - 11:00</option>
        <option value="11:00 - 12:00">11:00 - 12:00</option>
        <option value="12:00 - 13:00">12:00 - 13:00</option>
        <option value="13:00 - 14:00">13:00 - 14:00</option>
        <option value="14:00 - 15:00">14:00 - 15:00</option>
        <option value="15:00 - 16:00">15:00 - 16:00</option>
        <option value="16:00 - 17:00">16:00 - 17:00</option>
        <option value="17:00 - 18:00">17:00 - 18:00</option>
      </select>
    </div>
    <button
      type="submit"
      className={`bg-red-700 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${
        isButtonDisabled ? 'cursor-not-allowed opacity-50' : ''
      }`}
      disabled={isButtonDisabled}
      onClick={handleSubmit}
    >
      {status === 'authenticated' ? 'Réserver un rendez-vous' : 'Connectez-vous pour réserver'}
    </button>
  </form>
</div>

  );
};

export default AppointmentForm;
