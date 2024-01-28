'use client'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Googlemap from '@/components/Googlemap';
import React, { useState } from 'react';
import AppointmentSystem from './calender';
import Comment from './ui/comment';
import StarRating from './rating';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useAuth } from '@/providers/AuthContext';
import NotFoundPage from './ui/notfound';
import AppointmentForm from './Form2';
const coordinates = {
  lat: 40.7128,
  lng: -74.0060,
};
interface Review {
  comment: string;
  lawyerr: number;
  rating: number;
  userr: number;
}

const Tabscomp = () => {
  const { data: session,status } = useSession();
  const [newComment, setNewComment] = useState<string>('');
  const [newRating, setNewRating] = useState<number>(0);
  const [forceRender, setForceRender] = useState(false);
  const pathArray = window.location.pathname.split('/');
  const [reviews, setReviews] = useState<Review[]>([]);
  const{googleUserId}=useAuth()
  // Select the last element in the array, which is the 'id'
  const idParam = pathArray[pathArray.length - 1];
  const id = idParam ? Number(idParam) : NaN;
  console.log('id',newComment);

  const [appointments, setAppointments] = useState([]);


  const fetchLawyerReviews = async (lawyerId: number) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/${lawyerId}/reviews/`);
      console.log("hi data",response);
      setReviews(response.data);
      return response.data;
    } catch (error) {
      // Handle error if needed
      console.error('Error fetching lawyer reviews:', error);
      return null;
    }
  };


  const handleTabSelect = () => {
    setForceRender(true);
  };
  const postData = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/usereview',
        {
          rating: newRating, // Replace with your actual rating
          comment: newComment, // Replace with your actual comment
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-User-ID': googleUserId,
            'LawyerID': id,
          },
        }
      );
      if(response)
      {
        window.location.reload()
      }
      console.log('Review posted successfully:', response.data);
    } catch (error) {
      console.error('Error posting review:', error);
  
      // Log the full error object
      console.error('Full error object:', error);
  
      // Check if it's an AxiosError and log the specific details
      if (axios.isAxiosError(error)) {
        console.error('AxiosError details:', {
          code: error.code,
          request: error.request,
          response: error.response,
          config: error.config,
        });
      }
    }
  };
  
  const isButtonDisabled = status !== 'authenticated';

  const fetchAppointments = async (id:number) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/cal/${id}/`);
      setAppointments(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };
  
  return (
    <div className='xl:px-[100px] h-[500px] sm:px-[50px] px-[20px] mt-5'>
      <Tabs forceRenderTabPanel={forceRender} onSelect={handleTabSelect}>
        <TabList className="flex">
        <Tab className="bg-gray-200 p-3 cursor-pointer">Adresse</Tab>
        <Tab className="bg-gray-200 p-3 cursor-pointer" onClick={() => fetchLawyerReviews(id)}>
            Avis{' '}
        </Tab>

        </TabList>
        <div className='rounded-md rounded-tl-none'>
          

          <TabPanel>
            <div className='p-10 z-10 bg-[#1a1a1a] text-white'>
              <h5 >Address : </h5>
              <Googlemap coordinates={coordinates} />
            </div>
          </TabPanel>

          

          <TabPanel>
          <div className='p-10 bg-[#1a1a1a]'>
  {reviews && reviews.length > 0 ? (
    reviews.map((review) => (
      <Comment key={review.id} rating={review.rating} name={review.userr.name} email={review.userr.email} comment={review.comment} />
    ))
  ) : (
    <NotFoundPage />
  )}

  <div className="bg-black p-6 shadow-md">
    <h3 className="text-2xl text-white font-semibold mb-4">Ajouter un commentaire</h3>
    <div className="mb-4">
      <label htmlFor="newComment" className="text-white block mb-2">Commentaire :</label>
      <textarea
        id="newComment"
        className="w-full p-4 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label htmlFor="newRating" className="text-white block mb-2">Note (1-5) :</label>
      <input
        type="number"
        id="newRating"
        className="w-full p-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
        value={newRating}
        onChange={(e) => setNewRating(Math.max(1, Math.min(5, Number(e.target.value))))}
        min="1"
        max="5"
      />
    </div>
    <button
      type="submit"
      className={`bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none ${
        isButtonDisabled ? 'cursor-not-allowed opacity-50' : ''
      }`}
      disabled={isButtonDisabled}
      onClick={postData}
    >
      Soumettre le commentaire
    </button>
  </div>
</div>

      
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Tabscomp;
