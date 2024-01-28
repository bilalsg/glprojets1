"use client"
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

// Interface for the Lawyer data
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

// Create the LawyerPersonalProfile component
const LawyerPersonalProfile: React.FC = () => {
  // Get the dynamic parameter 'id' using useRouter
  const router = useRouter();
  const { id } = router.query;

  // State to store the lawyer data
  const [lawyer, setLawyer] = useState<Lawyer | null>(null);

  // Use the 'id' in your component logic
  useEffect(() => {
    // Fetch data for the specific lawyer based on 'id'
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/Lawyer/${id}`);
        const data: Lawyer = await response.json();
        setLawyer(data);
      } catch (error) {
        console.error('Error fetching lawyer data:', error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  // Return your JSX for the lawyer's personal profile
  return (
    <div>
      <h1>Lawyer Personal Profile</h1>
      {lawyer ? (
        <>
          <p>Profile for Lawyer with ID: {lawyer.id}</p>
          <p>Name: {lawyer.name}</p>
          {/* Add other fields as needed */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

// Export the component
export default LawyerPersonalProfile;
