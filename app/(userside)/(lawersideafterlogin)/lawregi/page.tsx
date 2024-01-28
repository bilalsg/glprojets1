"use client"
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const page = () => {
  const [lawyerData, setLawyerData] = useState({
    
    username: '',
    password: '',
    email: '',
    date_of_birth: null,
    profile_picture: null,
    name: '',
    phone: '',
    adress: '',
    website: null,
    facebook: '',
    twitter: '',
    linkedin: '',
    category: '',
    description: '',
    cv: null,
  });
  console.log(lawyerData)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLawyerData({ ...lawyerData, [name]: value });
  };
  const handleRegistration = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/register/', lawyerData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 201) {
        // Registration was successful
        const data = response.data;
        window.location.href='/lawlogin'
        console.log('Registration successful:', data);
      } else {
        // Handle registration error, e.g., show an error message
        console.error('Registration failed:', response.statusText);
      }
    } catch (error:any) {
      console.error('Error during registration:', error);
  
      // Log the response data
      console.error('Response data:', error.response.data);
  
      // Log the error stack trace
      console.error(error.stack);
    }
  };
  
  
  return (
    <div className="pt-28 flex items-center justify-center min-h-screen-[20px]">
    <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl -2xl md:flex-row md:space-y-0">
      <div className="relative">
        <img
          src="law3.jpg"
          alt="img"
          className="w-[600px] h-full hidden md:block object-cover"
        />
      </div>
      <div className="flex flex-col justify-center p-8 md:p-14">
        <span className="mb-3 text-4xl font-bold">Bienvenue de retour</span>
        <span className="font-light text-gray-400 mb-8">
          Bienvenue de retour ! Veuillez entrer vos détails
        </span>

        {/* Nom d'utilisateur */}
        <div className="py-4">
          <span className="mb-2 text-md">Nom d'utilisateur</span>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 -md placeholder:font-light placeholder:text-gray-500"
            name="username"
            id="username"
            onChange={handleInputChange}
          />
        </div>

        {/* Mot de passe */}
        <div className="py-4">
          <span className="mb-2 text-md">Mot de passe</span>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 -md placeholder:font-light placeholder:text-gray-500"
            name="password"
            id="password"
            onChange={handleInputChange}
          />
        </div>

        {/* Email */}
        <div className="py-4">
          <span className="mb-2 text-md">Email</span>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 -md placeholder:font-light placeholder:text-gray-500"
            name="email"
            id="email"
            onChange={handleInputChange}
          />
        </div>

        {/* Date de naissance */}
        <div className="py-4">
          <span className="mb-2 text-md">Date de naissance</span>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 -md placeholder:font-light placeholder:text-gray-500"
            name="date_of_birth"
            id="date_of_birth"
            onChange={handleInputChange}
          />
        </div>

        {/* Photo de profil (Télécharger) */}
        <div className="py-4">
          <span className="mb-2 text-md">Photo de profil</span>
          <input
            type="url" // Change the input type to "url"
            className="w-full p-2 border border-gray-300 -md placeholder:font-light placeholder:text-gray-500"
            name="profile_picture"
            id="profile_picture"
            onChange={handleInputChange}
          />
        </div>

        {/* Nom */}
        <div className="py-4">
          <span className="mb-2 text-md">Nom</span>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 -md placeholder:font-light placeholder:text-gray-500"
            name="name"
            id="name"
            onChange={handleInputChange}
          />
        </div>

        {/* Téléphone */}
        <div className="py-4">
          <span className="mb-2 text-md">Téléphone</span>
          <input
            type="tel"
            className="w-full p-2 border border-gray-300 -md placeholder:font-light placeholder:text-gray-500"
            name="phone"
            id="phone"
            onChange={handleInputChange}
          />
        </div>

        {/* Adresse */}
        <div className="py-4">
          <span className="mb-2 text-md">Adresse</span>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 -md placeholder:font-light placeholder:text-gray-500"
            name="adress"
            id="adress"
            onChange={handleInputChange}
          />
        </div>

        {/* Site web */}
        <div className="py-4">
          <span className="mb-2 text-md">Site web</span>
          <input
            type="url"
            className="w-full p-2 border border-gray-300 -md placeholder:font-light placeholder:text-gray-500"
            name="website"
            id="website"
            onChange={handleInputChange}
          />
        </div>

        {/* Facebook */}
        <div className="py-4">
          <span className="mb-2 text-md">Facebook</span>
          <input
            type="url"
            className="w-full p-2 border border-gray-300 -md placeholder:font-light placeholder:text-gray-500"
            name="facebook"
            id="facebook"
            onChange={handleInputChange}
          />
        </div>

        {/* Twitter */}
        <div className="py-4">
          <span className="mb-2 text-md">Twitter</span>
          <input
            type="url"
            className="w-full p-2 border border-gray-300 -md placeholder:font-light placeholder:text-gray-500"
            name="twitter"
            id="twitter"
            onChange={handleInputChange}
          />
        </div>

        {/* LinkedIn */}
        <div className="py-4">
          <span className="mb-2 text-md">LinkedIn</span>
          <input
            type="url"
            className="w-full p-2 border border-gray-300 -md placeholder:font-light placeholder:text-gray-500"
            name="linkedin"
            id="linkedin"
            onChange={handleInputChange}
          />
        </div>

        {/* Catégorie (Tableau de chaînes) */}
        <div className="py-4">
          <span className="mb-2 text-md">Catégorie</span>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 -md placeholder:font-light placeholder:text-gray-500"
            name="category"
            id="category"
            onChange={handleInputChange}
          />
        </div>

        {/* Description */}
        <div className="py-4">
          <span className="mb-2 text-md">Description</span>
          <textarea
            className="w-full p-2 border border-gray-300 -md placeholder:font-light placeholder:text-gray-500"
            name="description"
            id="description"
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="py-4">
          <span className="mb-2 text-md">CV</span>
          <textarea
            className="w-full p-2 border border-gray-300 -md placeholder:font-light placeholder:text-gray-500"
            name="cv"
            id="cv"
            onChange={handleInputChange}
          ></textarea>
        </div>

        <button
          className="w-full bg-red-700 z-20 hover:bg-gray-900 text-white p-2 mb-6 hover:border hover:border-gray-300"
          onClick={handleRegistration}
        >
          Créer un compte
        </button>
        <p className="pb-2">J'ai déjà un compte.</p>
        <a href="/lawlogin">
          <button
            className="w-full bg-black z-20 hover:bg-gray-900 text-white p-2 mb-6 hover:border hover:border-gray-300"
            onClick={handleRegistration}
          >
            Se connecter
          </button>
        </a>
      </div>
    </div>
  </div>
  )
}

export default page