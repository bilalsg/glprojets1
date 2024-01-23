"use client"
import React from 'react';
import { useState } from 'react';
import { LogOutIcon } from 'lucide-react';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'lucide-react';

const page = () => {
  const [selectedName, setSelectedName] = useState("")
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedName(event.target.value);
      };const lawyers = [
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
  const filteredLawyers = lawyers.filter((lawyer) => {
    return (
        selectedName === "" || ( lawyer.firstName.toLowerCase().includes(selectedName.toLowerCase()) ||(
          lawyer.lastName.toLowerCase().includes(selectedName.trim().toLowerCase()) || ((lawyer.firstName + ' ' + lawyer.lastName)
          .toLowerCase()
          .includes(selectedName.trim().toLowerCase()) ||(lawyer.lastName + ' ' + lawyer.firstName)
          .toLowerCase()
          .includes(selectedName.trim().toLowerCase())
        )))
    )
  });
  return (
    <div className={`h-screen flex items-end justify-center relative `}>
      <div className={` absolute top-10 right-10 py-2 px-3 rounded-lg bg-gray-100`}>
        <ul className={`flex gap-5 `}>
          <li className={`text-center `}></li>
          <li className={`text-center`}><button> <LogOutIcon /> </button></li>
        </ul>
      </div>
      <div className={`absolute border-2  top-10 left-10 rounded-lg bg-gray-100  `}>
        <input type="text" onChange={handleNameChange}
          className={`p-2 self-start rounded-md`}
          placeholder='search for a lawyer...'
        />
      </div>
      <div className={`flex justify-center mb-10 items-start w-full lg:w-[95vw] lg:h-[85vh] h-[80vh] p-10 bg-gray-100 rounded-lg overflow-scroll`}>
  <div className="overflow-x-auto">
    <table className={`min-w-full table-auto border-collapse border-0`}>
      <thead>
        <tr className='text-gray-400 text-md'>
          <th className='font-normal py-2 px-4 lg:px-8 text-left'>nom</th>
          <th className='font-normal py-2 px-4 lg:px-8 text-left'>prénom</th>
          <th className='font-normal py-2 px-4 lg:px-8 text-left'>email</th>
          <th className='font-normal py-2 px-4 lg:px-8 text-left'>numéro</th>
          <th className='font-normal py-2 px-4 lg:px-8 text-left'>Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredLawyers.map((lawyer) => (
          <tr key={lawyer.id} className='hover:bg-gray-200'>
            <td className={`py-2 px-4 lg:px-8 text-left border-collapse border-0`}>{lawyer.lastName}</td>
            <td className={`py-2 px-4 lg:px-8 text-left border-collapse border-0`}>{lawyer.firstName}</td>
            <td className={`py-2 px-4 lg:px-8 text-left border-collapse border-0`}>{lawyer.email}</td>
            <td className={`py-2 px-4 lg:px-8 text-left border-collapse border-0`}>{lawyer.phone[0]}</td>
            <td className={`py-2 px-4 lg:px-8 text-left border-collapse border-0`}>
              <a href={`lawyercontrol/${lawyer.id}`} className='flex gap-1'>
                voir plus <Link size={15}/>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
   );
}
 
export default page;