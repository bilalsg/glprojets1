"use client"
import { useEffect } from 'react'

import Lawercard from '@/app/(userside)/(clientsideafterlogin)/lawyerpersonalprofile/Lawercard'
import { url } from 'inspector'
import React from 'react'
import Footer from '@/app/components/Footer'
import { useState } from 'react'

const page = () => {
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
          "rating" : 3,
          "website" : "https://www.google.com",
          "imageURL": null,
          "wilaya" : "khanchela",
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
        }
      ]
    }
    const categoryMockUpData = {
      data : ["Droit administratif", "Droit commercial", "Droit de l'environnement", "Droit de l'immobilier"]
    }

    const [filter, setFilter] = useState(false)
    const [order, setOrder] = useState(false)
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedRating, setSelectedRating] = useState("")
    const [selectedName, setSelectedName] = useState("")
    const [alphaFN, setAlphaFN] = useState(false)
    const [alphaLN, setAlphaLN] = useState(false)
    const [rating, setRating] = useState(false)

    const toggleFilter = () =>{
      setFilter(!filter);
    }
    
    const toggleOrder = () => {
      setOrder(!order);
    };

    const toggleAlphaFN = () => {
      setAlphaFN(!alphaFN)
      setAlphaLN(false)
      setRating(false)
    }
    const toggleAlphaLN = () => {
      setAlphaLN(!alphaLN)
      setAlphaFN(false)
      setRating(false)
    }
    const toggleRating = () => {
      setRating(!rating)
      setAlphaFN(false)
      setAlphaLN(false)
    } 

    const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedRegion(event.target.value);
    };
    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedCategory(event.target.value);
    };
    const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedRating(event.target.value);
    };
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedName(event.target.value);
    };

    const filteredLawyers = mockupdata.lawyers.filter((lawyer) => {
      return (
        (selectedRegion === "" || lawyer.wilaya === selectedRegion) &&
        (selectedCategory === "" || lawyer.categorie.includes(selectedCategory)) &&

        (
          selectedName === "" || ( lawyer.firstName.toLowerCase().includes(selectedName.toLowerCase()) ||(
            lawyer.lastName.toLowerCase().includes(selectedName.trim().toLowerCase()) || ((lawyer.firstName + ' ' + lawyer.lastName)
            .toLowerCase()
            .includes(selectedName.trim().toLowerCase()) ||(lawyer.lastName + ' ' + lawyer.firstName)
            .toLowerCase()
            .includes(selectedName.trim().toLowerCase())
            )
          )
          )
        ) &&
        (selectedRating === "" || lawyer.rating.toString() === selectedRating)
      )
    });

    const sortedLawyers = filteredLawyers.sort((a, b) => {
      const sortByFirstName = () => a.firstName.localeCompare(b.firstName);
      const sortByLastName = () => a.lastName.localeCompare(b.lastName);
      const sortByRating = () => b.rating - a.rating;
    
      return (
        (rating && sortByRating()) ||
        (alphaFN && sortByFirstName()) ||
        (alphaLN && sortByLastName()) ||
        0
      );
    });
    
  return (
    <div className='h-full pt-28 sm:px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 w-full bg-black' >
      <div>
        <h1 className='pb-5 pt-7 flex border-b-2 text-white font-semibold text-3xl'>Our lawyers</h1>
        <div className='flex gap-5 justify-end'>
          <button onClick={toggleOrder} className='bg-[#ADA9A7] hover:bg-red-700 relative rounded-md font-medium my-6 py-3 px-10 text-white text-sm'>Order By</button>
          <button onClick={toggleFilter}  className='bg-[#ADA9A7] hover:bg-red-700  rounded-md font-medium my-6 py-3 px-10 text-white text-sm'>Filter
          </button>
          <input type='text' onChange={handleNameChange} placeholder='search by name...' className='font-medium rounded-md my-6 py-3 px-10 text-sm'/>
        </div>
      </div>
      {filter ? (
        <div className='flex gap-9 border-y-2 py-6'>
          <div className='text-white flex gap-3 '>
            <span> Region </span>
            <select value={selectedRegion} onChange={handleRegionChange} className='text-black rounded-md text-sm'>
              <option value="">All</option>
              <option value="annaba">Annaba</option>
              <option value="khanchela">Khanchela</option>
            </select>
          </div>
          <div className='text-white flex gap-3 '>
            <span> Category </span>
            <select value={selectedCategory} onChange={handleCategoryChange} className='text-black rounded-md text-sm'>
              <option value="">All</option>
              {categoryMockUpData.data.map((category: string, index: number) => (
                <option key={index}>{category}</option>
              ))}
            </select>
          </div>
          <div className='text-white flex gap-3 '>
            <span> Rating </span>
            <select value={selectedRating} onChange={handleRatingChange} className='text-black rounded-md text-sm'>
              <option value="">All</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      ) : null}
      {order ? (
        <div className='flex gap-9 border-y-2 py-6 text-white'>
          <input type='radio' id='e1' value='default' className='hidden' onClick={()=>(setAlphaFN(false), setAlphaLN(false), setRating(false))}/>
          <label htmlFor="e1" className={`cursor-pointer py-1 px-4 inline-block ${ !alphaFN && !alphaLN && !rating ? 'border-b-2' : ''}`}>Default</label>

          <input type='radio' id='e2' value='f-name' className='hidden' onClick={toggleAlphaFN}/>
          <label htmlFor="e2" className={`cursor-pointer py-1 px-4 inline-block ${alphaFN ? 'border-b-2' : ''}`}>First Name</label>

          <input type='radio' id='e3' value='l-name' className='hidden' onClick={toggleAlphaLN}/>
          <label htmlFor="e3" className={`cursor-pointer py-1 px-4 inline-block ${alphaLN ? 'border-b-2' : ''}`}>Last Name</label>
          
          <input type='radio' id='e4' value='rating' className='hidden' onClick={toggleRating} />
          <label htmlFor="e4" className={`cursor-pointer py-1 px-4 inline-block ${rating ? 'border-b-2' : ''}`}>Rating</label>
        </div>
      ) : null}
      
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 pt-12'>
        {sortedLawyers.map(lawyer => (
          <Lawercard
            key={lawyer.id}
            id={lawyer.id}
            fname={lawyer.firstName}
            lname={lawyer.lastName}
            categorie={lawyer.categorie}
            phone={lawyer.phone}
            adress={lawyer.Adress}
            description={lawyer.Description}
            rating={lawyer.rating}
            website={lawyer.website}
            imgURL={lawyer.imageURL}
          />
        ))}
      </div>
      <Footer/>
    </div>
    
  )
}

export default page