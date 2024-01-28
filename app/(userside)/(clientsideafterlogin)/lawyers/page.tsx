"use client"
import Lawercard from '@/components/Lawercard';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
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
  adress: string;
  website: string | null;
  facebook: string;
  twitter: string;
  linkedin: string;
  category: string;
  description: string;
  cv: string;
}

// Define the Page component
const Page = () => {
  const [lawyerData, setLawyerData] = useState<Lawyer[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<'name' | 'category' | 'address'>('name');
  const [filterValue, setFilterValue] = useState<string>('');
  const [cookie, setCookie] = useState(false);
  const{isLoggedIn,setLoggedIn,setGoogleUserId,googleUserId,lawyerCookie,currentUser,setUserId}=useAuth()
  console.log(currentUser)
  console.log(lawyerCookie)
  const { data: session, status } = useSession();

  // Fetch lawyer data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/Lawyer/');
        setLawyerData(response.data);
      } catch (error) {
        console.error('Error fetching lawyer data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter lawyers based on search criteria
  const filteredLawyers = lawyerData.filter((lawyer) => {
    const nameMatch = lawyer.name.toLowerCase().includes(filterValue.toLowerCase());
    const categoryMatch = selectedFilter === 'category' && lawyer.category.includes(filterValue);
    const addressMatch = selectedFilter === 'address' && lawyer.adress.includes(filterValue);

    return nameMatch || categoryMatch || addressMatch;
  });

  // Handle registration
  const handleRegistration = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/register/google/',
        {
          email: session?.user?.email,
          name: session?.user?.name,
        }
      );
      
      console.log('Registration successful:', response.data);
      
      // Assuming that response.data contains necessary information after registration
      // You might need to adjust this based on your server's response structure
      
      setLoggedIn(true);
      handleGoogleLogin()
      // Log before calling handleGoogleLogin
      console.log('Calling handleGoogleLogin...');
      
      
      // Additional log after handleGoogleLogin
      console.log('handleGoogleLogin called.');
  
      // Handle success, e.g., redirect or display a success message
    } catch (error) {
      console.error('Error during registration:', error);
  
      // Handle errors, e.g., display an error message to the user
    }
  };
  
  console.log(isLoggedIn)
  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/login/google/', {
        email: session?.user?.email,
        name: session?.user?.name,
      });
  
      if (response.status === 200) {
        const token = response.data.token;
        // Handle the token (e.g., save to state or local storage)
        console.log('Received token:', token);
       
        setGoogleUserId(token)
        setUserId(googleUserId)
        console.log("google id",googleUserId)
      } else {
        console.error('Error during Google login:', response.statusText);
      }
    } catch (error:any) {
      console.error('Error during Google login:', error.message);
  
      // Handle the case where the GoogleUser does not exist
      if (error.response && error.response.status === 404) {
        console.error('GoogleUser does not exist');
        // You can handle this case as needed, for example, redirect to a registration page
      } else {
        // Log the detailed error information for other types of errors
        if (error.response) {
          console.error('Server responded with:', error.response.data);
          console.error('Status code:', error.response.status);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up the request:', error.message);
        }
      }
    }
  };
  

  // JSX structure
  return (
    <div>
      <div className={`${isLoggedIn ? 'blur-0' : 'blur-md'} relative flex flex-col justify-center h-screen items-center pt-40`}>
      <div className='top-20 w-full flex items-center justify-center gap-2'>
    <input
        type='text'
        placeholder={`Filtrer par ${selectedFilter === 'name' ? 'nom' : selectedFilter === 'category' ? 'catégorie' : 'adresse'}`}
        className='px-4 py-2 w-1/2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
    />
    <select
        className="p-2 border border-gray-300 rounded-md text-center focus:outline-none focus:border-blue-500 appearance-none"
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value as 'name' | 'category' | 'address')}
    >
        <option value="name">Nom</option>
        <option value="category">Catégorie</option>
        <option value="address">Adresse</option>
    </select>
</div>

       
        <div className='h-full grid justify-items-center md:grid-cols-2 grid-cols-1 gap-4 pt-8 sm:px-20 px-[100px] w-full bg-black'>
          {filteredLawyers.map((lawyer: Lawyer) => (
            <Lawercard key={lawyer.id} lawyer={lawyer} />
          ))}
        </div>
      </div>
      <div className={`flex fixed top-0 left-0 items-center justify-center h-screen w-full ${isLoggedIn ? 'hidden' : ''}`}>
        <div className='w-0.4 shadow-2xl flex flex-col bg-gray-100 group-hover:blur-sm hover:!blur-none ho p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <h2 className='text-2xl font-bold text-center text-black'>Cookie Consent</h2>
          <img src='/cookie.png' alt='Cookies Image' className='mx-auto mb-4 rounded-full w-[150px] h-[150px]' />
          <div className='font-medium'>
            <p className='py-2 border-b mx-8 mt-4'>This website uses cookies to enhance user experience.</p>
            <p className='py-2 border-b mx-8'>We use cookies for essential functionalities and analytics.</p>
            <p className='py-2 border-b mx-8'>By using our website, you agree to our use of cookies.</p>
            <div className='flex gap-2 px-6'>
              <button onClick={handleRegistration} className='bg-gray-900 hover:bg-red-700 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Accept Cookies</button>
              <button className='border-2 border-red-700 hover:bg-red-700 text-black hover:text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
