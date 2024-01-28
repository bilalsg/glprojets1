"use client"
import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/providers/AuthContext';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import axios from 'axios';
const DropdownButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { data: session,status } = useSession();
  const {setAuthUser,currentUser,lawyerCookie,setLawyerCookie}=useAuth()
  const handleSignOut = () => {
        signOut({ callbackUrl: '/' }); // This will sign the user out
  };
 // Your React component
 const logout = async () => {
    try {
      const token = lawyerCookie; // Replace with your actual token
      console.log(token)
      const response = await axios.post(
        'http://127.0.0.1:8000/logout/',
        null,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`, // Include the "Token" prefix
          },
          withCredentials: true,
        }
      );
  
      if (response.status === 200) {
        window.location.href = '/';
        setLawyerCookie(null)
      } else {
        console.error('Logout failed:', response.statusText);
      }
    } catch (error:any) {
      console.error('Error during logout:', error.message);
    }
  };
  
  
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="h-18 w-18"
        type="button"
        onClick={toggleDropdown}
      >
        <div className='pl-8   flex justify-center items-center'>
        {status === 'authenticated' && (
          <img
            alt="..."
            src={`${session?.user?.image}`}
            className="p-1 ring-2 ring-gray-300 dark:ring-gray-500 h-14 w-14 rounded-full object-cover "
          />
       
        )}
        {lawyerCookie&&
          <img
          alt="..."
          src={currentUser?.profile_picture || "https://i.pinimg.com/564x/83/cf/a2/83cfa2982c6f051c0284c52d6bb65090.jpg"}
          className="p-1 ring-2 ring-gray-300 dark:ring-gray-500 h-14 w-14 rounded-full object-cover"
        />
        }
        </div>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          id="dropdown"
          className="z-10 absolute top-full right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
       <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
  <li>
    {lawyerCookie ? (
      <a href="/lawdash" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tableau de bord</a>
    ) : (
      <a href="/userprofile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profil personnel</a>
    )}
  </li>
  <li>
    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Paramètres</a>
  </li>
  <li>
    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Gains</a>
  </li>
  <li>
    {!lawyerCookie ? (
      <a onClick={handleSignOut} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
        Se déconnecter
      </a>
    ) : (
      <a onClick={logout} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
        Se déconnecter
      </a>
    )}
  </li>
</ul>

        </div>
      )}
    </div>
  );
};

export default DropdownButton;
