"use client"
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { withRouter, NextRouter } from 'next/router';
import Tabscomp from '@/components/Tabs';
import axios from 'axios';
import DropdownButton from '@/components/ui/dropdown';
import AppointmentButton from '@/components/ui/butoonappointemment';

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
interface LawyerPersonalProfileProps {
    router: NextRouter;
  }
// Create the LawyerPersonalProfile component
const LawyerPersonalProfile: React.FC = () => {
  // Get the dynamic parameter 'id' using useRouter
  const pathArray = window.location.pathname.split('/');
    
  // Select the last element in the array, which is the 'id'
  const idParam = pathArray[pathArray.length - 1];
  const id = idParam ? Number(idParam) : NaN;
  console.log(id)
  // State to store the lawyer data
  const [lawyer, setLawyer] = useState<Lawyer | null>(null);

const fetchLawyerReviews = async (lawyerId:number) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/${lawyerId}/reviews/`);
    console.log(response.data)

    return response.data;
  } catch (error) {
    // Handle error if needed
    console.error('Error fetching lawyer reviews:', error);
    return null;
  }
};
  




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
  console.log(lawyer)
  return (
    <div>
    <div
     
       className="flex flex-col items-center xl:px-[100px] sm:px-[50px] px-[20px] rounded-md pt-28  shadow md:flex-row  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
     > 
       
       <img
         className="object-cover shadow-lg  w-full rounded-b-[0px] rounded-t-sm  h-[650px] sm:scale-[0.9] transition ease-in-out delay-200 duration-300 scale-100 hover:rounded-r-[0px]  hover:scale-100  sm:rounded-md"
         src={lawyer?.profile_picture || "https://i.pinimg.com/564x/53/be/9f/53be9fb939c5ee370e1533150adc8332.jpg"}
         alt="Sample Image"
       ></img>
       <div className="flex flex-col items-center  justify-center p-4 leading-normal">
       <div className="bg-black text-white p-6">
      
      <div className="mt-6 border-t border-gray-700 relative">
        <dl className="divide-y divide-gray-700">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-300">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{lawyer?.name}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-300">phone number</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{lawyer?.phone}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-300">Application for</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{lawyer?.cv}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-300">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{lawyer?.email}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-300">Category</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{lawyer?.category}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-300">Description</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
              Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident.
              Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <AppointmentButton/>
         
        </dl>
      </div>
    </div>
       </div>
     
     </div>

     <Tabscomp />
     
     </div>
  );
};

// Export the component
export default LawyerPersonalProfile;
