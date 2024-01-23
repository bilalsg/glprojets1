"use client"

import Lawercard from '@/app/(userside)/(clientsideafterlogin)/lawyerpersonalprofile/Lawercard'
import { url } from 'inspector'
import React from 'react'
import Footer from '@/app/components/Footer'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const page = () => {
  const [t, i18n] = useTranslation("global")
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
    <div className='h-full pt-28 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32' >
      <div className='text-gray-200'>
        <h1 className='pb-4 pt-7 flex border-b-2 font-semibold text-xl'>{t("lawyers.ourLawyers")}</h1>
        <div className='flex gap-1 md:gap-5 flex-wrap justify-end'>
          <button onClick={toggleOrder} className={`bg-[#ADA9A7] hover:bg-red-700 relative rounded-md font-medium my-6 py-3 px-10 text-white text-xs ${order ? 'bg-red-700' : ''}`}> {t("lawyers.orderBy")} </button>
          <button onClick={toggleFilter}  className={`bg-[#ADA9A7] hover:bg-red-700  rounded-md font-medium my-6 py-3 px-10 text-white text-xs ${filter ? 'bg-red-700': ''}`}> {t("lawyers.filter")} </button>
          <input type='text' onChange={handleNameChange} placeholder={t("lawyers.searchByName")} className='font-medium text-black rounded-md my-6 py-3 px-10 text-xs'/>
        </div>
      </div>
      {filter ? (
        <div className='flex gap-9 flex-wrap border-y-2 py-6 text-white text-xs'>
          <div className='flex gap-2 items-center'>
            <span> {t("lawyers.region")} </span>
            <select value={selectedRegion} onChange={handleRegionChange} className='text-black rounded-md px-2 py-1'>
              <option value=""> {t("lawyers.all")} </option>
              <option value="annaba">Annaba</option>
              <option value="khanchela">Khanchela</option>
            </select>
          </div>
          <div className='flex gap-2 items-center'>
            <span> {t("lawyers.category")} </span>
            <select value={selectedCategory} onChange={handleCategoryChange} className='text-black rounded-md px-2 py-1'>
              <option value="">{t("lawyers.all")}</option>
              {categoryMockUpData.data.map((category: string, index: number) => (
                <option key={index}>{category}</option>
              ))}
            </select>
          </div>
          <div className='flex gap-2 items-center'>
            <span> {t("lawyers.rating")} </span>
            <select value={selectedRating} onChange={handleRatingChange} className='text-black rounded-md px-2 py-1'>
              <option value="">{t("lawyers.all")}</option>
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
        <div className='flex text-white flex-wrap text-xs gap-9 border-y-2 py-6'>
          <input type='radio' id='e1' value='default' className='hidden' onClick={()=>(setAlphaFN(false), setAlphaLN(false), setRating(false))}/>
          <label htmlFor="e1" className={`cursor-pointer py-1 px-4 inline-block ${ !alphaFN && !alphaLN && !rating ? 'border-b-2' : ''}`}>Default</label>

          <input type='radio' id='e2' value='f-name' className='hidden' onClick={toggleAlphaFN}/>
          <label htmlFor="e2" className={`cursor-pointer py-1 px-4 inline-block ${alphaFN ? 'border-b-2' : ''}`}>{t("lawyers.firstName")}</label>

          <input type='radio' id='e3' value='l-name' className='hidden'  onClick={toggleAlphaLN}/>
          <label htmlFor="e3" className={`cursor-pointer py-1 px-4 inline-block ${alphaLN ? 'border-b-2' : ''}`}>{t("lawyers.lastName")}</label>
          
          <input type='radio' id='e4' value='rating' className='hidden'  onClick={toggleRating} />
          <label htmlFor="e4" className={`cursor-pointer py-1 px-4 inline-block ${rating ? 'border-b-2' : ''}`}>{t("lawyers.rating")}</label>
        </div>
      ) : null}
      
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between py-10'>
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

export default page;