import React from 'react';
import StarRating from '../../../../components/StarRating';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

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

const Lawercard : React.FC<LawercardProps> = (props) => {
  const { id, fname, lname, categorie, phone, adress, description, rating, website, imgURL } = props;
  const cutDescription = (text: string, words: number): string => {
    const wordArray: string[] = text.split(' ');
    const cutText: string = wordArray.slice(0, words).join(' ');
    return `${cutText}${wordArray.length > words ? '...' : ''}`;
  };
  const profileLink =`lawyerpersonalprofile/${id}`;
  const newDescription = cutDescription(description, 10)
  
  function capitalizeFirstLetter(i : string) {
    return i.charAt(0).toUpperCase() + i.slice(1).toLowerCase();
  }

  return(
    <div className='bg-gray-100 p-2 flex flex-col items-center justify-center rounded-md'>
      <div className='relative w-fit flex'>
        <img
          className="rounded-md max-h-72"
          src={imgURL || "/law7.jpg"}
          alt="Sample Image"
        />
        <div className='flex flex-col text-sm items-start rounded-md absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4'>
          <p>
            {capitalizeFirstLetter(fname)} {capitalizeFirstLetter(lname)}
          </p>
          <p className='py-1 flex gap-1'>
            <MapPin size={15}/> region
          </p>
          <StarRating rating={rating} />
        </div>
      </div>

      <div className='pt-2 max-w-52 flex flex-col'>
        <div className='flex gap-1'>
          <h5 className='text-sm font-semibold'>Categories:</h5>
          <p className="text-xs">
            {categorie[0]+ ', ' + categorie[1]  + '...'}
          </p>
        </div>

        <div>
          <h5 className='text-sm font-semibold'>
            Description:
          </h5>
          <p className="text-xs">
            {newDescription}
          </p>
        </div>
        <Link href={profileLink} className="self-end text-xs rounded-md mt-2 p-2 text-white bg-red-700 hover:bg-red-800 ">
          Read more
        </Link>
      </div>
    </div>
  )
}
export default Lawercard;
