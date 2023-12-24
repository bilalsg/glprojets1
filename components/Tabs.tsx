'use client'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Googlemap from '@/components/Googlemap';
import React, { useState } from 'react';

const coordinates = {
  lat: 40.7128,
  lng: -74.0060,
};

const Tabscomp = () => {
  const [forceRender, setForceRender] = useState(false);

  const handleTabSelect = () => {
    setForceRender(true);
  };

  return (
    <div className='xl:px-[100px] h-[450px] sm:px-[50px] px-[20px]'>
      <Tabs forceRenderTabPanel={forceRender} onSelect={handleTabSelect}>
        <TabList className="flex">
          <Tab className="bg-gray-200 p-4">Title 1</Tab>
          <Tab className="bg-gray-200 p-4">Title 2</Tab>
        </TabList>

        <TabPanel >
            <div className='py-4 sm:w-3/4'>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <h2 className='text-white'>Experiences</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          
        </TabPanel>
        <TabPanel>
          <Googlemap coordinates={coordinates} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Tabscomp;
