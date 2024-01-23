"use client"
import StarRating from '@/components/StarRating';
import Tabscomp from '@/components/Tabs';
import { useState } from 'react';
import { workerData } from 'worker_threads';


export default function Page({ params }: { params: { id: string } }) {
    const lawyers = [
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
    ]
    const [banned, setBanned] = useState(false)
    const [deleteText, setDeleteText] = useState(false)
    const [confirmation, setConfirmation] = useState(false)
    const lawyer = lawyers.find(lawyer => String(lawyer.id) === params.id)
    function capitalizeFirstLetter(i : string) {
        return i.charAt(0).toUpperCase() + i.slice(1).toLowerCase();
    }
    if (!lawyer) {
        // router.push('/404');
        return null;
    }
    function handleDelete(){
      console.log("helllo")
    }

    const [popup, setPopup] = useState(false)
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
              <button className='self-end flex' onClick={()=>setPopup(true)}>setting</button>
              <h5 className="mb-2 text-2xl font-bold">
                {capitalizeFirstLetter(lawyer.firstName) + ' ' + capitalizeFirstLetter(lawyer.lastName)}
              </h5>
              <StarRating key={lawyer.id} rating={lawyer.rating} />
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
            </div>
            {popup ? (
              <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75'>
                <div className='bg-black flex-col items-center justify-center relative p-10 border-2 border-gray rounded-md w-[25%]'>
                  <button className='text-white absolute top-1 right-3' onClick={()=>setPopup(false)}>&times;</button>
                  <div>
                    {banned ? (
                      <button onClick={()=>setBanned(false)} className='text-white w-fit p-2'>Unban Account</button>
                    ):
                    (
                      <button className='text-red-700 w-fit  p-2' onClick={()=>setBanned(true)}>Ban Account</button>
                    )}
                  </div>
                  <div>
                    <button onClick={()=>setDeleteText(true)} className='text-red-700 w-fit  p-2'>Delete Account</button>
                    {deleteText? (
                      <div className='grid grid-cols-2 gap-3'>
                        <p className='text-gray-400 col-span-2 text-sm'>are you sure you want to delete {lawyer.firstName + ' ' + lawyer.lastName}'s account? please note that you can't undo this action</p>
                        <button className='text-red-700 border-2 p-1 rounded-md' onClick={() => setConfirmation(true)}>continue</button>
                        <button className='text-white border-2 p-1 rounded-md' onClick={() => setDeleteText(false)}>cancel</button>
                      </div>
                    )
                    : null}
                  </div>
                </div>
              </div>
            ): null}
            { confirmation ? 
            (
              <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75'>
                <div className='bg-black text-white flex-col items-center justify-center relative p-10 border-2 border-gray rounded-md w-[25%]'>
                  <h5>Confirm delete</h5>
                  <form>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' placeholder='email'/>
                    <label htmlFor='pwd'></label>
                    <input id='pwd' type='password' />
                    <button onClick={handleDelete}>confirm</button>
                    <button onClick={()=>setConfirmation(false)}>cancel</button>
                  </form>
                </div>
              </div>
            ): null
            }
      </div>
      <Tabscomp key={lawyer.id} onClickDay={(date) => {
    console.log(date);
  }} cv={lawyer.cv} Reviews={lawyer.reviews} description={lawyer.Description} adress={lawyer.Adress} experiences={lawyer.experiences}/>
    </div>
    );
  }