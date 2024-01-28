"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '@/providers/AuthContext';

const Page = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { setAuthUser, setLawyerCookie, setAdminToken, setLawyerObject } = useAuth();
  const [first, setFirst] = useState(null);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:8000/login/', credentials);
      const token = response.data.token;
      const user = response.data.lawyer;

      // Store the token in local storage or state for future requests
      localStorage.setItem('token', token);
      setLawyerCookie(token);
      setAdminToken(token);
      console.log(user);
      if (user.is_staff === true) {
        window.location.href = '/admin';
      } else {
        window.location.href = '/lawdash/lawerrequest';
      }
      setLawyerObject(user);
      setAuthUser(user);
      console.log(token);
    } catch (error: any) {
      // Handle login error
      console.error('La connexion a échoué :', error.response.data.detail);
    }
  };
  console.log(first);

  return (
    <div className="pt-28 flex items-center justify-center min-h-screen ">
      <div className="relative flex flex-col m-6 space-y-4 bg-white shadow-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Bienvenue de retour</span>
          <span className="font-light text-gray-400 mb-8">
            Bienvenue de retour ! Veuillez entrer vos détails
          </span>
          <div className="py-4">
            <span className="mb-2 text-md">Nom d'utilisateur</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 -md placeholder:font-light placeholder:text-gray-500"
              name="username"
              id="username"
              value={credentials.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Mot de passe</span>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full p-2 border border-gray-300 -md placeholder:font-light placeholder:text-gray-500"
              value={credentials.password}
              onChange={handleInputChange}
            />
          </div>

          <button
            className="w-full bg-red-700 z-20 hover:bg-gray-900 text-white p-2 mb-6 hover:border hover:border-gray-300"
            onClick={handleSignIn}
          >
            Se connecter
          </button>
          <div className="flex justify-between w-full ">
            <span className="font-bold text-md">Mot de passe oublié</span>
          </div>
        </div>
        <div className="relative">
          <img
            src="law3.jpg"
            alt="img"
            className="w-[400px] h-full hidden md:block object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
