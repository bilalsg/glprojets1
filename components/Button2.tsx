import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import { useAuth } from '@/providers/AuthContext';
const Button2 = () => {
  const { data: session } = useSession();

  const {setLoggedIn,setUserId}=useAuth()
  const handleSignIn = () => {
    signIn('google', { callbackUrl: '/lawyers' });
    setLoggedIn(false)
    
    
  };
  
  return (
    <button
      onClick={handleSignIn}
      className='bg-red-700 z-20 hover:bg-gray-900 sm:block hidden w-[250px] group relative font-medium my-6 py-3 text-white'
    >
      <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-white transition-all duration-200 group-hover:w-full"></span>
      <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-white transition-all duration-200 group-hover:h-full"></span>
      <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-white transition-all duration-200 group-hover:w-full"></span>
      <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-white transition-all duration-200 group-hover:h-full"></span>

      Se connecter avec Google

    </button>
  );
};

export default Button2;
