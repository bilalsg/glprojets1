"use client"
import Tabscomp from '@/components/Tabs';
import StarRating from '@/components/StarRating';
import StarRate from '@/components/StarRate';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Edit } from 'lucide-react';

// const coordinates = {
  //   lat: 40.7128,
  //   lng: -74.0060,
  // };

const mockupdata = {
  
  lawyers : [
    {
      "id" : 2,
      "firstName" : "Dina",
      "lastName" : "Mechraoui",
      "categorie" : ["Droit administratif", "Droit commercial", "Droit de l'environnement", "Droit de l'immobilier"],
      "phone" : ["213.033.85.45.19", "06.63.22.58.26"],
      "Adress" : " N⁰ 30, cité diar essalam, annaba",
      "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      "rating" : 5,
      "website" : "https://www.google.com",
      "imageURL": null,
      "wilaya" : "khanchela",
      "email" : "d_mechraoui@estin.dz",
      "experiences" : ["lololol", "lololololl", "fhzofbuz", "cnodnfozfnz"],
      "reviews" : [
        {
          "username" : "dindin133",
          "comment" : "i really like this lawyer, he is thoughtful and wise"
        },
        {
          "username" : "user890",
          "comment" : "good lawyer"
        },
        {
          "username" : "user6902",
          "comment" :"you need this lawyer in your life"
        },
        {
          "username" : "user2091",
          "comment" :"good lawyer"
        }
      ], 
      "cv" : "/file.pdf",
    },
    {
      "id" : 1,
      "firstName" : "dindin",
      "lastName" : "Mechraoui",
      "categorie" : ["Droit commercial", "Droit de l'environnement", "Droit de l'immobilier"],
      "phone" : ["213.033.85.45.19", "06.63.22.58.26"],
      "Adress" : " N⁰ 30, cité diar essalam, annaba",
      "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      "rating" : 0,
      "website" : "https://www.google.com",
      "imageURL": null,
      "wilaya" : "khanchela",
      "email" : "d_mechraoui@estin.dz",
      "experiences" : ["lololol", "lololololl", "fhzofbuz", "cnodnfozfnz"],
      "reviews" : [
        {
          "username" : "dindin133",
          "comment" : "i really like this lawyer, he is thoughtful and wise"
        },
        {
          "username" : "user890",
          "comment" : "good lawyer"
        },
        {
          "username" : "user6902",
          "comment" :"you need this lawyer in your life"
        },
        {
          "username" : "user2091",
          "comment" :"good lawyer"
        }
      ],
      "cv" : null,
    },
    
    
    {
      "id" : 3,
      "firstName" : "Dina",
      "lastName" : "Mechraoui",
      "categorie" : ["Droit administratif", "Droit commercial", "Droit de l'environnement", "Droit de l'immobilier"],
      "phone" : ["213.033.85.45.19", "06.63.22.58.26"],
      "Adress" : " N⁰ 30, cité diar essalam, annaba",
      "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      "rating" : 4,
      "website" : null,
      "imageURL": "/law7.jpg",
      "wilaya" : "annaba",
      "email" : "d_mechraoui@estin.dz",
      "experiences" : ["lololol", "lololololl", "fhzofbuz", "cnodnfozfnz"],
      "reviews" : [
        {
          "username" : "dindin133",
          "comment" : "i really like this lawyer, he is thoughtful and wise"
        },
        {
          "username" : "user890",
          "comment" : "good lawyer"
        },
        {
          "username" : "user6902",
          "comment" :"you need this lawyer in your life"
        },
        {
          "username" : "user2091",
          "comment" :"good lawyer"
        }
      ],
      "cv" : null,
    },
    {
      "id" : 4,
      "firstName" : "a",
      "lastName" : "b",
      "categorie" : ["Droit administratif", "Droit commercial", "Droit de l'environnement", "Droit de l'immobilier"],
      "phone" : ["213.033.85.45.19", "06.63.22.58.26"],
      "Adress" : " N⁰ 30, cité diar essalam, annaba",
      "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      "rating" : 3,
      "website" : "https://www.google.com",
      "imageURL": "/law7.jpg",
      "wilaya" : "annaba",
      "email" : "d_mechraoui@estin.dz",
      "experiences" : ["lololol", "lololololl", "fhzofbuz", "cnodnfozfnz"],
      "reviews" : [
        {
          "username" : "dindin133",
          "comment" : "i really like this lawyer, he is thoughtful and wise"
        },
        {
          "username" : "user890",
          "comment" : "good lawyer"
        },
        {
          "username" : "user6902",
          "comment" :"you need this lawyer in your life"
        },
        {
          "username" : "user2091",
          "comment" :"good lawyer"
        }
      ],
      "cv" : "/file.pdf",
    },
    {
      "id" : 5,
      "firstName" : "b",
      "lastName" : "c",
      "categorie" : ["Droit administratif", "Droit commercial", "Droit de l'environnement", "Droit de l'immobilier"],
      "phone" : ["213.033.85.45.19", "06.63.22.58.26"],
      "Adress" : " N⁰ 30, cité diar essalam, annaba",
      "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      "rating" : 4,
      "website" : null,
      "imageURL": "/law7.jpg",
      "wilaya" : "annaba",
      "email" : "d_mechraoui@estin.dz",
      "experiences" : ["lololol", "lololololl", "fhzofbuz", "cnodnfozfnz"],
      "reviews" : [
        {
          "username" : "dindin133",
          "comment" : "i really like this lawyer, he is thoughtful and wise"
        },
        {
          "username" : "user890",
          "comment" : "good lawyer"
        },
        {
          "username" : "user6902",
          "comment" :"you need this lawyer in your life"
        },
        {
          "username" : "user2091",
          "comment" :"good lawyer"
        }
      ],
      "cv" : null,
    },
    {
      "id" : 6,
      "firstName" : "d",
      "lastName" : "e",
      "categorie" : ["Droit administratif", "Droit commercial", "Droit de l'environnement", "Droit de l'immobilier"],
      "phone" : ["213.033.85.45.19", "06.63.22.58.26"],
      "Adress" : " N⁰ 30, cité diar essalam, annaba",
      "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      "rating" : 4,
      "website" : "https://www.google.com",
      "imageURL": "/law7.jpg",
      "wilaya" : "annaba",
      "email" : "d_mechraoui@estin.dz",
      "experiences" : ["lololol", "lololololl", "fhzofbuz", "cnodnfozfnz"],
      "reviews" : [
        {
          "username" : "dindin133",
          "comment" : "i really like this lawyer, he is thoughtful and wise"
        },
        {
          "username" : "user890",
          "comment" : "good lawyer"
        },
        {
          "username" : "user6902",
          "comment" :"you need this lawyer in your life"
        },
        {
          "username" : "user2091",
          "comment" :"good lawyer"
        }
      ],
      "cv" : null,
    },
    {
      "id" : 7,
      "firstName" : "a",
      "lastName" : "z",
      "categorie" : ["Droit administratif", "Droit commercial", "Droit de l'environnement", "Droit de l'immobilier"],
      "phone" : ["213.033.85.45.19", "06.63.22.58.26"],
      "Adress" : " N⁰ 30, cité diar essalam, annaba",
      "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      "rating" : 3,
      "website" : "https://www.google.com",
      "imageURL": "/law7.jpg",
      "wilaya" : "annaba",
      "email" : "d_mechraoui@estin.dz",
      "experiences" : ["lololol", "lololololl", "fhzofbuz", "cnodnfozfnz"],
      "reviews" : [
        {
          "username" : "dindin133",
          "comment" : "i really like this lawyer, he is thoughtful and wise"
        },
        {
          "username" : "user890",
          "comment" : "good lawyer"
        },
        {
          "username" : "user6902",
          "comment" :"you need this lawyer in your life"
        },
        {
          "username" : "user2091",
          "comment" :"good lawyer"
        }
      ],
      "cv" : null,
    },
    {
      "id" : 8,
      "firstName" : "a",
      "lastName" : "z",
      "categorie" : ["Droit administratif", "Droit commercial", "Droit de l'environnement", "Droit de l'immobilier"],
      "phone" : ["213.033.85.45.19", "06.63.22.58.26"],
      "Adress" : " N⁰ 30, cité diar essalam, annaba",
      "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      "rating" : 4,
      "website" : null,
      "imageURL": "/law7.jpg",
      "wilaya" : "annaba",
      "email" : "d_mechraoui@estin.dz",
      "experiences" : ["lololol", "lololololl", "fhzofbuz", "cnodnfozfnz"],
      "reviews" : [
        {
          "username" : "dindin133",
          "comment" : "i really like this lawyer, he is thoughtful and wise"
        },
        {
          "username" : "user890",
          "comment" : "good lawyer"
        },
        {
          "username" : "user6902",
          "comment" :"you need this lawyer in your life"
        },
        {
          "username" : "user2091",
          "comment" :"good lawyer"
        }
      ],
      "cv" : null,
    },
    {
      "id" : 9,
      "firstName" : "a",
      "lastName" : "t",
      "categorie" : ["Droit administratif", "Droit commercial", "Droit de l'environnement", "Droit de l'immobilier"],
      "phone" : ["213.033.85.45.19", "06.63.22.58.26"],
      "Adress" : " N⁰ 30, cité diar essalam, annaba",
      "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      "rating" : 3,
      "website" : "https://www.google.com",
      "imageURL": "/law7.jpg",
      "wilaya" : "annaba",
      "email" : "d_mechraoui@estin.dz",
      "experiences" : ["lololol", "lololololl", "fhzofbuz", "cnodnfozfnz"],
      "reviews" : [
        {
          "username" : "dindin133",
          "comment" : "i really like this lawyer, he is thoughtful and wise"
        },
        {
          "username" : "user890",
          "comment" : "good lawyer"
        },
        {
          "username" : "user6902",
          "comment" :"you need this lawyer in your life"
        },
        {
          "username" : "user2091",
          "comment" :"good lawyer"
        }
      ],
      "cv" : null,
    },
    {
      "id" : 10,
      "firstName" : "t",
      "lastName" : "d",
      "categorie" : ["Droit administratif", "Droit commercial", "Droit de l'environnement", "Droit de l'immobilier"],
      "phone" : ["213.033.85.45.19", "06.63.22.58.26"],
      "Adress" : " N⁰ 30, cité diar essalam, annaba",
      "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      "rating" : 4,
      "website" : null,
      "imageURL": null,
      "wilaya" : "khanchela",
      "email" : "d_mechraoui@estin.dz",
      "experiences" : ["lololol", "lololololl", "fhzofbuz", "cnodnfozfnz"],
      "reviews" : [
        {
          "username" : "dindin133",
          "comment" : "i really like this lawyer, he is thoughtful and wise"
        },
        {
          "username" : "user890",
          "comment" : "good lawyer"
        },
        {
          "username" : "user6902",
          "comment" :"you need this lawyer in your life"
        },
        {
          "username" : "user2091",
          "comment" :"good lawyer"
        }
      ],
      "cv" : null,
    }
  ],
  disabledDays : [new Date(2024,0,28), new Date(2024,4,13)]
}
export default function Page({ params }: { params: { id: string } }) {
  const lawyer = mockupdata.lawyers.find((lawyer) => String(lawyer.id) === params.id)
  const [formData, setFormData] = useState({
    category: '',
    description: '',
    budget: '',
    time: '',
    appointment: '',
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date) => {
    const dateS = date.toLocaleDateString();
    setFormData((prevFormData) => ({
      ...prevFormData,
      appointment: dateS,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);

    // const apiUrl = '';

    // try {
    //   const response = await fetch(apiUrl, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     console.log('Appointment submitted successfully!');
    //   } else {
    //     console.error('Error submitting appointment:', response.statusText);
    //   }
    // } catch (error) {
    //   console.error('Network error:');
    // }
  };
  const [ratingPopup ,setRatingPopup] = useState(false)
  const [popup, setPopup] = useState(false)
  if (!lawyer) {
    return null;
  }

  function capitalizeFirstLetter(i : string) {
    return i.charAt(0).toUpperCase() + i.slice(1).toLowerCase();
  }

  const tileDisabled = ({ date, view }: { date: Date; view: string }) => {
    const currentDate = new Date();
  
    if (view === 'month' && (date.getDay() === 5 || date.getDay() === 6)) {
      return true;
    }
  
    if (view === 'month' && date < currentDate) {
      return true;
    }
  
    if (mockupdata.disabledDays.some((disabledDate) => {
          return disabledDate.toLocaleDateString() === date.toLocaleDateString();
        })) {
        return true;
      }
    return false;
  };
  
    const handleCalendarClick = (selectedDate: Date) =>  {
      setPopup(true);
      setFormData((prevFormData) => ({
        ...prevFormData,
        appointment: selectedDate.toLocaleDateString(),
      }));
    };
  
  
  
  const handleRatingChange = (newRating: number) => {
    console.log(`Selected Rating: ${newRating}`);
  };

  return (
    <div>
      <div
        className="flex flex-col items-center xl:px-[100px] sm:px-[50px] px-[20px] rounded-md pt-28  shadow md:flex-row  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"> 
          <img
            className="object-cover shadow-lg rounded-t-sm  h-[400px] sm:scale-[0.9] transition ease-in-out delay-200 duration-300 scale-100  hover:scale-100  sm:rounded-md"
            src={lawyer.imageURL || "/law7.jpg"}
            alt="Sample Image"
          ></img>
          <div className="flex-col items-start justify-start p-4 leading-normal text-white">
              <h5 className="mb-2 text-2xl font-bold">
                {capitalizeFirstLetter(lawyer.firstName) + ' ' + capitalizeFirstLetter(lawyer.lastName)}
              </h5>
              <span className='flex gap-6'>
                <StarRating rating={lawyer.rating} />
                <button onClick={()=>setRatingPopup(true)}><Edit size={15}/></button>
              </span>
              <div className="mt-2">
                <h5 className="text-md font-bold mb-1">
                  Categories:
                </h5>
                <p className="font-normal text-sm mb-2">
                  {lawyer.categorie.map((category, index) => (
                    <span key={index}>
                      {category}
                      {index < lawyer.categorie.length - 1 && ', '}
                    </span>
                  ))}
                </p>
              </div>
              <div className="mt-2">
                <h5 className="text-md font-bold mb-1">Email:</h5>
                <p className="font-normal text-sm mb-2">{lawyer.email}</p>
              </div>
              <div className="mt-2">
                <h5 className="text-md font-bold mb-1">Tel/Fax:</h5>
                <p className="font-normal text-sm mb-2">
                  {lawyer.phone.map((number, index) => (
                    <span key={index}>
                      {number}
                      {index < lawyer.phone.length - 1 && '- '}
                    </span>
                  ))}
                </p>
              </div>
              {lawyer.website ? (
                <div className="flex flex-wrap mt-2">
                  <h5 className="text-md font-bold mb-1">
                    Website:
                  </h5>
                  <a
                    href={lawyer.website}
                    className="font-normal text-sm ml-2 underline"
                    target="_blank"
                  >
                    {lawyer.website}
                  </a>
                </div>
              ) : null}
              <button 
                onClick={() => setPopup(true)}
                className="inline-flex mt-3 rounded-md items-center px-4 py-2 text-sm font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Make an Appointment
              </button>
              {popup ? (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75'>
                  <div className='bg-white text-black relative p-10 border-2 border-gray rounded-md w-[50%]'>
                    <button className='text-black absolute top-1 right-3' onClick={()=>setPopup(false)}>&times;</button>
                    <form onSubmit={handleSubmit}>
                      <h2 className='text-center pb-5 font-semibold text-lg'>Make an Appointment</h2>
                      <div>
                        <label htmlFor="category">Category:</label>
                        <select name='category' onChange={handleChange} value={formData.category}  className='text-black rounded-md text-sm mb-4'>
                          <option value="">--</option>
                          {lawyer.categorie.map((cat: string, index: number) => (
                            <option key={index} >{cat}</option>
                          ))}
                        </select>                      
                      </div>
                      <div>
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" name="description" onChange={handleChange} value={formData.description}/>
                      </div>
                      <div>
                        <label htmlFor="budget">Budget:</label>
                        <input type="number" id="budget" name="budget"  onChange={handleChange} value={formData.budget} />
                      </div>
                      <div>
                        <label htmlFor="time">Time:</label>
                        <input type="time" id="time" name="time"  onChange={handleChange} value={formData.time} />
                      </div>
                      <div>
                        <p>Selected Date: {formData.appointment}</p>
                        <Calendar
                          calendarType='hebrew'
                          tileDisabled={tileDisabled}
                          onClickDay={handleDateChange}
                        />                      
                      </div>
                      <button type="submit">Submit</button>
                    </form>
                  </div>
                </div>
              ) : null}
              {/* {!loggedIn && popup ? (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75'>
                 <div className='bg-white text-black relative p-10 border-2 border-gray rounded-md w-[50%]'>
                  <button className='text-black absolute top-1 right-3' onClick={()=>setPopup(false)}>&times;</button>
                    <p>you should have an account to do this step</p>
                 </div>
               </div>
              ) : 
                null
              } */}
              {ratingPopup ? (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75'>
                  <div className='bg-white text-black relative flex items-center justify-center py-9 px-5 border-2 border-gray rounded-md w-fit'>
                  <button className='text-black absolute top-1 right-3 z-50' onClick={()=>setRatingPopup(false)}>x</button>
                    <StarRate  onChange={handleRatingChange} />
                </div>
              </div>
              ) : 
                null
              }
            </div>
      </div>
      <Tabscomp key={lawyer.id} cv={lawyer.cv} Reviews={lawyer.reviews} description={lawyer.Description} adress={lawyer.Adress} experiences={lawyer.experiences} onClickDay={handleCalendarClick}/>
    </div>
  );
}