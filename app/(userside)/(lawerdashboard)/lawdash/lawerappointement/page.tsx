"use client"
import AppointmentSystem from '@/components/calender';
import React, { useState, useEffect } from 'react';

// Define the Lawyer interface
interface Lawyer {
  id: number;
  password: string;
  username: string;
  email: string;
  date_of_birth: string | null;
  profile_picture: string | null;
  name: string;
  phone: string;
  address: string;
  website: string | null;
  facebook: string;
  twitter: string;
  linkedin: string;
  category: string[];
  description: string;
  cv: string;
}

// Define the Next.js page component
const LawyersPage2: React.FC = () => {
  // State to hold lawyer data
  const [lawyerData, setLawyerData] = useState<Lawyer[]>([]);
  
  // State for search term (if needed)
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Fetch lawyer data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/Lawyer/');
        const data: Lawyer[] = await response.json();
        setLawyerData(data);
      } catch (error) {
        console.error('Error fetching lawyer data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to handle lawyer deletion
  const handleDelete = async (lawyerId: number) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/Lawyer/${lawyerId}`, {
        method: 'DELETE',
      });

      if (response.status === 204) {
        // Deletion successful
        setLawyerData((prevLawyers) => prevLawyers.filter((lawyer) => lawyer.id !== lawyerId));
      } else if (response.status === 404) {
        console.error('Lawyer not found');
      } else {
        console.error('Failed to delete lawyer');
      }
    } catch (error) {
      console.error('Error deleting lawyer:', error);
    }
  };

  // Function to handle accepting a lawyer request
  const handleAccept = (lawyerId: number) => {
    // Implement logic for accepting a lawyer request
    console.log(`Accepted lawyer with ID ${lawyerId}`);
  };

  // Function to handle rejecting a lawyer request
  const handleReject = (lawyerId: number) => {
    // Implement logic for rejecting a lawyer request
    console.log(`Rejected lawyer with ID ${lawyerId}`);
  };

  // Render the component
  return (
    <div className='px-[80px] w-full h-full pt-40  bg-[#171717]'>
       <AppointmentSystem/>
    </div>
  );
};

// Export the component
export default LawyersPage2;
