"use client"
import React from 'react';
import StarRating from '../../../../components/StarRating';
import Link from 'next/link';

interface LawercardProps {
  key: number;
  id: number;
  fname: string;
  lname: string;
  categorie: string[];
  phone: string[];
  adress: string;
  description: string;
  rating: number;
  website?: string | null;
  imgURL?: string | null; 
  cv?: string | null
}

const cutDescription = (text: string, words: number): string => {
  const wordArray: string[] = text.split(' ');
  const cutText: string = wordArray.slice(0, words).join(' ');
  return `${cutText}${wordArray.length > words ? '...' : ''}`;
};
function capitalizeFirstLetter(i : string) {
  return i.charAt(0).toUpperCase() + i.slice(1).toLowerCase();
}



const Lawercard : React.FC<LawercardProps> = (props) => {

  const { id, fname, lname, categorie, phone, adress, description, rating, website, imgURL } = props;
  const profileLink =`lawyerpersonalprofile/${id}`;
  const newDescription = cutDescription(description, 10)
  return (
      <div
        className="flex items-center rounded-md  bg-gray-200   shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      > 
       <div className="relative flex m-3">
          <img
              className="h-full object-fit rounded-md"
              src={imgURL || "/law7.jpg"}
              alt="Sample Image"
            />
            <div className="flex flex-col items-start rounded-md absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4">
              <p className="text-lg font-semibold mb-2">
                {capitalizeFirstLetter(fname)} {capitalizeFirstLetter(lname)}
              </p>
              <StarRating initialRating={rating} />
            </div>
        </div>
        <div className="flex flex-col items-center  justify-center py-4 pr-3 pl-0 leading-normal ">
          <div className=''>
            <div>
              <h5 className=" text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                Categories:
              </h5>
              <p className=" font-normal text-xs text-gray-700 dark:text-gray-400">
                {/* {categorie.map((category : string, index : number) => (
                  <span key={index}>
                    {category}
                    {index < categorie.length - 1 && ', '}
                  </span>
                ))}   */}
                  {categorie[0]+ ', ' + categorie[1]  + '...'}
              </p>
            </div>
            <div className='flex items-start gap-2 '>
              <h5 className=" text-sm font-bold tracking-tight text-gray-900 dark:text-white">
              Tel/Fax:
              </h5>
              <p className=" font-normal text-xs  text-gray-700 dark:text-gray-400">
                {phone.map((number : string, index : number) => (
                    <span key={index}>
                      {number}
                      {index < phone.length - 1 && '- '}
                    </span>
                  ))} 
              </p>
            </div>
            <div className='flex items-start gap-2 '>
              <h5 className=" text-sm font-bold tracking-tight text-gray-900 dark:text-white">
              Adress:
              </h5>
              <p className="font-normal  text-xs text-gray-700 dark:text-gray-400">
                {adress}
              </p>
            </div>
            {website ? (
              <div className="flex flex-wrap">
                <h5 className=" text-sm mr-2 font-bold tracking-tight text-gray-900 dark:text-white">
                  Website: 
                </h5>
                <a
                  href={website}
                  className="font-normal text-xs underline text-gray-900 dark:text-white"
                  target="_blank"
                >
                  {website}
                </a>
              </div>
            ) : null}
              
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  Description:
                </h5>
                <p className="font-normal text-xs text-gray-700 dark:text-gray-400 ">
                  {newDescription}
                </p>
              </div>

              <Link href={profileLink}  className="inline-flex mt-1 rounded-md items-center px-2 py-2 text-xs font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more
  {/* <a>
    <svg
      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
    </svg>
  </a> */}
              </Link>

         </div>
        </div>
      </div>
   
  );
};

export default Lawercard;
