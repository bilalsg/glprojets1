"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '@/providers/AuthContext';
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
const LawyersPage: React.FC = () => {
  // State to hold lawyer data
  const [lawyerData, setLawyerData] = useState<Lawyer[]>([]);
  // State for loading indicator
  const [loading, setLoading] = useState<boolean>(true);
  const {adminToken}=useAuth()

  // Fetch lawyer data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/Lawyer/');
        if (!response.ok) {
          throw new Error(`Failed to fetch lawyer data. Server response: ${response.statusText}`);
        }
        const data: Lawyer[] = await response.json();
        setLawyerData(data);
      } catch (error) {
        console.error('Error fetching lawyer data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to handle lawyer deletion
  const handleDelete = async (lawyerId: number, yourAuthToken: string) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/delete/${lawyerId}/`, {
        headers: {
          'Authorization': `Token ${yourAuthToken}`,  // Use 'Token' before the actual token
        },
      });

      if (response.status === 204) {
        // Deletion successful
        setLawyerData((prevLawyers) => prevLawyers.filter((lawyer) => lawyer.id !== lawyerId));
      } else if (response.status === 404) {
        console.error('Lawyer not found');
      } else {
        console.error(`Failed to delete lawyer. Server response: ${response.statusText}`);
        console.error('Full response object:', response);
      }
    } catch (error:any) {
      console.error('Error deleting lawyer:', error.message);
    }
  };

  // Render the component
  return (
    <div className='px-[80px] pt-40'>
      <h3 className='text-white font-bold text-2xl pb-8'>Les Avocats de System</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        lawyerData.map((lawyer, index) => (
          <div key={index} className="flex min-w-0 gap-x-4 border-b text-white p-4 mb-4">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 flex-none object-cover rounded-full bg-gray-700"
                src={lawyer.profile_picture || "https://i.pinimg.com/564x/53/be/9f/53be9fb939c5ee370e1533150adc8332.jpg"}
                alt="Profile"
              />
            </div>
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6">{lawyer.name}</p>
              <p className="mt-1 truncate text-xs leading-5">{lawyer.email}</p>
            </div>
            <div className="flex-shrink-0">
              {/* Delete Button */}
              <button
              className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4"
              onClick={() => handleDelete(lawyer.id, adminToken ?? '')}
            >
              Supprimer
            </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

// Export the component
export default LawyersPage;
