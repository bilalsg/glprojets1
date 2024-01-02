import { useRouter } from 'next/router';
import Tabscomp from '@/components/Tabs';
import StarRating from '@/components/StarRating';

const mockupdata = {
//   const coordinates = {
//     lat: 40.7128,
//     lng: -74.0060,
//   };
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
      "cv" : "/ACFrOgB-KCROxhFaiSMwGfxkDboMVVZ0l1YW7CIURaDVxskb091J6_8oDGNYiCvG5_RuAC8M6uRsryMzbj7PfMwHdvcJ_f7R_SNvBnAPxSqI-a3Zv1EoQFmJqHeCecVCmdH5yNvCk0Phx9HntHSk.pdf",
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
      "cv" : null,
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
}

export default function Page({ params }: { params: { id: string } }) {
  // const router = useRouter();
  const lawyer = mockupdata.lawyers.find((lawyer) => String(lawyer.id) === params.id);
  if (!lawyer) {
    // router.push('/404');
    return null;
  }
  function capitalizeFirstLetter(i : string) {
    return i.charAt(0).toUpperCase() + i.slice(1).toLowerCase();
  }

  return (
    <div>
      <div
        className="flex flex-col items-center xl:px-[100px] sm:px-[50px] px-[20px] rounded-md pt-28  shadow md:flex-row  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"> 
          <img
            className="object-cover shadow-lg rounded-t-sm  h-[400px] sm:scale-[0.9] transition ease-in-out delay-200 duration-300 scale-100  hover:scale-100  sm:rounded-md"
            src={lawyer.imageURL || "/law7.jpg"}
            alt="Sample Image"
          ></img>
          <div className="flex flex-col items-center  justify-center p-4 leading-normal">
            <div className=''>
              <h5 className="mb-2 text-xl font-bold tracking-tight  text-white">
                {capitalizeFirstLetter(lawyer.firstName) + ' ' + capitalizeFirstLetter(lawyer.lastName)}
              </h5>
              <StarRating initialRating={lawyer.rating} />
              <div>
                <h5 className=" text-sm font-bold tracking-tight text-white">
                  Categories:
                </h5>
                <p className=" font-normal text-xs text-white">
                  {lawyer.categorie.map((category : string, index : number) => (
                    <span key={index}>
                      {category}
                      {index < lawyer.categorie.length - 1 && ', '}
                    </span>
                  ))}  
                </p>
                <div>
                  <h5 className="mb-2 text-xl font-bold tracking-tight  text-white">Email</h5>
                  <p className=" font-normal text-xs text-white"> {lawyer.email} </p>
                </div>
                <div>
                  <h5 className="mb-2 text-xl font-bold tracking-tight  text-white">Tel/Fax:</h5>
                  <p className=" font-normal text-xs text-white">{lawyer.phone.map((number : string, index : number) => (
                      <span key={index}>
                        {number}
                        {index < lawyer.phone.length - 1 && '- '}
                      </span>
                    ))} 
                  </p>
                </div>
                {lawyer.website ? (
                  <div className="flex flex-wrap">
                    <h5 className=" text-sm mr-2 font-bold tracking-tight text-white">
                      Website: 
                    </h5>
                    <a
                      href={lawyer.website}
                      className="font-normal text-xs underline text-white"
                      target="_blank"
                    >
                      {lawyer.website}
                    </a>
                  </div>
                ) : null}
                <button className="inline-flex mt-1 rounded-md items-center px-2 py-2 text-xs font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">make an appointment</button>
              </div>
            </div>
          </div>
      </div>
      <Tabscomp cv={lawyer.cv} Reviews={lawyer.reviews} description={lawyer.Description} adress={lawyer.Adress} experiences={lawyer.experiences}/>
    </div>
  );
}