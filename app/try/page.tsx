import React from 'react';
import Link from 'next/link';
import LawyersPage from '../(userside)/(lawerdashboard)/lawdash/lawerrequest/page';

const ModernSidebar: React.FC = () => {
  return (
    <div className="relative flex h-screen   text-white">
      {/* Sidebar */}
      <nav className="w-1/2 mt-8 z-10 h-screen fixed backdrop-blur-lg border-r-[1px] border-white  bg-black/10 p2">
        <ul className='pt-[100px]'>
          <li>
            <Link href="/">
              <div className="block p-3 hover:bg-gray-700 cursor-pointer">Requests</div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="block p-3 hover:bg-gray-700 cursor-pointer">Settings</div>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <div className="block p-3 hover:bg-gray-700 cursor-pointer">Others</div>
            </Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>

    </div>
  );
};

export default ModernSidebar;
