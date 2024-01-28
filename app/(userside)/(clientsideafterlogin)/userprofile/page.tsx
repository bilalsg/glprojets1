"use client"
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import axios from 'axios';
import { useEffect } from 'react';
import RefusedMessage from '@/components/ui/refusealert';
import AcceptedMessage from '@/components/ui/acceptalert';
import { useAuth } from '@/providers/AuthContext';
import { useState } from 'react';
const ProfilePage: React.FC = () => {
 const { data: session, status } = useSession()
 const {userId}= useAuth()
 console.log(session?.user?.image)
 console.log(status)
 const [notifications, setNotifications] = useState<any[]>([]); // Replace 'any[]' with the actual type of your notification objects

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
    // Handle success, e.g., redirect or display a success message
  } catch (error:any) {
    console.error('Error during registration:', error);

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received. Request:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up the request:', error.message);
    }

    // Handle errors, e.g., display an error message to the user
  }
};
const handleLogin = async () => {
  try {
    // Send a POST request to the API endpoint
    const response = await axios.post('http://127.0.0.1:8000/login/google/', {
      email: session?.user?.email,
      name: session?.user?.name,
    });

    // Handle the response (you can redirect or do other actions here)
    console.log('Login successful:', response.data);
  } catch (error) {
    // Handle errors
    console.error('Error during login:', error);
  }
};
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
    } else {
      console.error('Error during Google login:', response.statusText);
    }
  } catch (error: any) {
    // Log the detailed error information
    console.error('Error during Google login:', error.message);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Server responded with:', error.response.data);
      console.error('Status code:', error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up the request:', error.message);
    }
  }
};



useEffect(() => {
const getNotifications = async () => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/notif/${userId}/`,{
      headers: {
        'X-User-ID': `${userId}`, // Assuming `id` is your token
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
      
    }

    const data = await response.json();
    console.log(data)
    setNotifications(data)
    return data;
  } catch (error:any) {
    console.error('Error fetching notifications:', error.message);
   
  }
};
getNotifications();
}, [userId]);

  return (
    <div className="flex items-center justify-center h-screen pt-40 sm:px-20 px-5">
       <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
      backgroundImage: "url('https://i.pinimg.com/736x/62/d0/87/62d087cd68ffdeaacc93326c8b513009.jpg')",
    }}>
      <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
    </div>
       <div className="relative flex flex-col min-w-0 break-words bg-white w-full h-full shadow-xl rounded-sm">
            <div className="px-6">
               <div className="flex flex-wrap justify-center pb-20">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <img alt="..." src={`${session?.user?.image}`} className="shadow-xl bg-cover rounded-full h-40 w-40 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 " />
                </div>
     

              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal  text-blueGray-700 mb-2">
                  {session?.user?.name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold ">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  {session?.user?.email}
                </div>
                
              </div>  
              <div className='p-4 max-h-[150px] overflow-y-auto'>
              {notifications && notifications.length > 0 && (
                <div className='pb-4 font-semibold text-2xl'>Your Notifications</div>
              )}
              {notifications.map((notification) => (
              <div key={notification.id}>
              
              {notification.text === 'Your appointment has been accepted!' ? (
                <AcceptedMessage date={notification.date_created} time={notification.time} text={notification.text} />
              ) : (
              <RefusedMessage text={notification.text}  />
              )}
              </div>
              ))}
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
  Bienvenue sur votre profil personnel ! Sur cette page, vous pouvez consulter et gérer votre profil. Recevez des notifications pour rester informé(e) des dernières mises à jour et des événements importants. Explorez et personnalisez votre expérience en fonction de vos préférences. Profitez d'une atmosphère chaleureuse et intime avec une solide structure musicale, à l'image de l'artiste d'envergure que vous êtes.
</p>

                    <a href="#pablo" className="font-normal text-pink-500">Show more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
    </div>
  );
};

export default ProfilePage;
