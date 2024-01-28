import React from 'react';
import Link from 'next/link';

const ModernSidebar1: React.FC = () => {
  return (
    <div className="relative flex h-screen    text-white">
      {/* Sidebar */}
      <nav className="w-1/3 mt-8 z-10 h-screen fixed backdrop-blur-lg border-r-[1px] border-white  bg-black/10 p2">
        <ul className='pt-[100px]'>
        <li>
  <Link href="/lawdash/lawerrequest">
    <div className="block p-3 hover:bg-gray-700 cursor-pointer">Demandes</div>
  </Link>
</li>

<li>
  <Link href="/services">
    <div className="block p-3 hover:bg-gray-700 cursor-pointer">Autres</div>
  </Link>
</li>

          {/* Add more links as needed */}
        </ul>
      </nav>

    </div>
  );
};

export default ModernSidebar1;
