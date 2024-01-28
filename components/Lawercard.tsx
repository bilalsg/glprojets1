import React from 'react';

interface Lawyer {
  id: number;
  password: string;
  username: string;
  email: string;
  date_of_birth: string | null;
  profile_picture: string | null;
  name: string;
  phone: string;
  adress: string;
  website: string | null;
  facebook: string;
  twitter: string;
  linkedin: string;
  category: string[];
  description: string;
  cv: string;
}

const Lawercard: React.FC<{ lawyer: Lawyer }> = ({ lawyer }) => {
  const personalProfileLink = `/lawyerpp/${lawyer.id}`;

  return (
    <div className="flex flex-col items-center rounded-md bg-gray-200 shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 w-full dark:hover:bg-gray-700">
     <img
    className="object-cover shadow-lg sm:w-1/2 w-full rounded-b-[0px] rounded-t-sm h-[400px] sm:scale-[0.9] transition ease-in-out delay-200 duration-300 scale-100 hover:rounded-r-[0px] hover:scale-100 sm:rounded-md"
    src={lawyer.profile_picture || "https://i.pinimg.com/564x/53/be/9f/53be9fb939c5ee370e1533150adc8332.jpg"}
    alt="Sample Image"
    />
      <div className="flex flex-col items-center justify-center p-4 leading-normal">
        <div className="">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Categories:
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {lawyer.category}
          </p>
          <div className='flex items-center gap-1 '>
            <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Name:
            </h5>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              {lawyer.name}
            </p>
          </div>
          <div className='flex items-center gap-1 '>
            <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Email:
            </h5>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              {lawyer.email}
            </p>
          </div>
          <div className='flex items-center gap-1 '>
            <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              CV:
            </h5>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              {lawyer.cv}
            </p>
          </div>
          <div className='flex items-center gap-1 '>
            <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tel/Fax:
            </h5>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              {lawyer.phone}
            </p>
          </div>
          <div className='flex items-center gap-1 '>
            <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Address:
            </h5>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              {lawyer.adress}
            </p>
          </div>
          <div className='items-center gap-1 '>
            <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Description:
            </h5>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              {lawyer.description}
            </p>
          </div>
          <a
            href={personalProfileLink}

            className="inline-flex mt-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
  En savoir plus
            <svg
              className="w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Lawercard;
