"use client"
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/providers/AuthContext';
import axios from 'axios';
import { time } from 'console';
import NotFoundPage from '@/components/ui/notfound';
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

interface Appointment {
  accepted: boolean;
  date_created: number;
  google_user: number;
  id: number;
  law: number;
  sent: boolean;
  time: number;
}

// Define the Next.js page component
const LawyersPage: React.FC = () => {
  // State to hold lawyer data
  const {adminToken,lawyerObject,lawyerCookie,userId}=useAuth()
  const [lawyerData, setLawyerData] = useState<Appointment[]>([]);
  const [userrequest, setuserrequest] = useState<any | null>(null); // Use any for userrequest
  // State for search term (if needed)
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Fetch lawyer data on component mount
  useEffect(() => {
    const token = adminToken;
    const apiUrl = 'http://127.0.0.1:8000/requests/';
    
      const fetchCalendarData = async () => {
        try {
          const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${token}`,
            },
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log('Calendar Data:', data);
            console.log('it is working')
            // Handle the data as needed
          } else {
            console.error(`Error: ${response.status} - ${response.statusText}`);
          }
        } catch (error) {
          console.error('Error during fetch:', error);
        }
      };

    fetchCalendarData();
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
  useEffect(() => {
  const lawerid=lawyerObject.id
  console.log(lawerid)
  const fetchAppointments = async (lawyerId:number) => {
    try {
      
      const response = await axios.get(`http://127.0.0.1:8000/reqs/${lawyerId}/`, {
        headers: {
          'Authorization': `Token ${lawyerCookie}`,  // Replace "YourAuthTokenHere" with your actual token
        },
      });
  
      
      console.log('Appointments fetched:', response.data);
      console.log('data here is',response.data)
      const appointments = response.data;
      setLawyerData(response.data)
      setuserrequest(response.data)
      
    } catch (error:any) {
      console.error('Error fetching appointments:', error);
  
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      }
    }
  };
  // Function to handle accepting a lawyer request
  const handleAccept = (lawyerId: number) => {
    // Implement logic for accepting a lawyer request
    console.log(`Accepted lawyer with ID ${lawyerId}`);
  };
 fetchAppointments(lawerid);
}, []);

  // Function to handle rejecting a lawyer request
  const handleReject = (lawyerId: number) => {
    // Implement logic for rejecting a lawyer request
    console.log(`Rejected lawyer with ID ${lawyerId}`);
  };



  const lawyerid = lawyerObject.id;
  const time = userrequest?.time;
  const date = userrequest?.date_created;
  
  console.log('date', date); 
  const handleAcceptAppointment = async (userid:number,time:number,date:number) => {
    try {
      // Include the necessary data in the request body
      const data = {
        google_user: userid,
        law: lawyerid,
        time: time,
        date_created: date,
      };
  
      // Make a PUT request to accept the appointment
      const response = await axios.put(
        'http://127.0.0.1:8000/accept/',  // Update the endpoint accordingly
        data,
        {
          headers: {
            Authorization: `Token ${lawyerCookie}`, // Replace with your actual token
          },
        }
      );
  
      // Handle the response as needed
      console.log('Appointment accepted:', response.data);
      window.location.reload()
     // setAccepted(true);
    } catch (error:any) {
      // Log the error or handle it appropriately
      console.error('Error accepting appointment:', error);
  
      // You can access the response status and data if available
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      }
    }
  };
  const handleRefuseAppointment = async (userid:number,time:number,date:number) => {
    const data = {
      google_user: userid,
      law: lawyerid,
      time: time,
      date_created: date,
    };

    try {
      const apiResponse = await axios.put('http://127.0.0.1:8000/refuse/', data ,{
        headers: {
          Authorization: `Token ${lawyerCookie}`, // Replace with your actual token
        },
      });
      window.location.reload()
    } catch (error) {
      console.error('Error refusing appointment:', error);
    }
  };
  // Render the component
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const randomColor = getRandomColor();
  return (
    <div className='px-[80px] w-full h-screen pt-40 bg-[#171717]'>
      <h3 className='text-white text-[40px] flex font-semibold mb-6'>Demandes pour Aujourd'hui</h3>
      {lawyerData && lawyerData.length > 0 ? (
        lawyerData.map((lawyer, index) => (
          <div key={index} className="flex w-full justify-between min-w-0 gap-x-4 border-b text-white p-4 mb-4">
            <div className="flex justify-center items-center gap-2">
              <div         className="flex items-center font-meduim text-xl justify-center w-14 h-14 rounded-full"
            style={{ backgroundColor: randomColor }}>
                
                {lawyer.google_user_name.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6">{lawyer.google_user_name}</p>
              </div>
            </div>
            <div className="flex-shrink-0 space-x-2">
              {/* Accept Button */}
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4"
                onClick={() => handleAcceptAppointment(lawyer.google_user, lawyer.time, lawyer.date_created)}
              >
                Accept
              </button>
              {/* Reject Button */}
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4"
                onClick={() => handleRefuseAppointment(lawyer.google_user, lawyer.time, lawyer.date_created)}
              >
                Reject
              </button>
            </div>
          </div>
        ))
      ) : (
        <NotFoundPage />
      )}
    </div>
  );
};

// Export the component
export default LawyersPage;
