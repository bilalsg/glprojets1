import React, { ReactNode } from 'react';
import ModernSidebar1 from '@/components/sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className='w-1/2'>
        <ModernSidebar1 />
      </div>
      <main className="w-full flex items-center bg-black">
        <div className="w-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
