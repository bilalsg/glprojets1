'use client'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Googlemap from '@/components/Googlemap';
import React, { useState } from 'react';

const coordinates = {
  lat: 40.7128,
  lng: -74.0060,
};
type Review = {
  username: string;
  comment: string;
};

interface tabsCompProps {
  description : string;
  adress: string;
  experiences : string[];
  cv : string | null;
  Reviews : Review[];
}

const Tabscomp :React.FC<tabsCompProps> = (props) => {
  const {adress,cv, description, experiences, Reviews} = props
  const [forceRender, setForceRender] = useState(false);

  const handleTabSelect = () => {
    setForceRender(true);
  };

  return (
    <div className='xl:px-[100px] h-[500px] sm:px-[50px] px-[20px] mt-5'>
      <Tabs forceRenderTabPanel={forceRender} onSelect={handleTabSelect}>
        <TabList className="flex">
          <Tab className="bg-gray-200 p-3 cursor-pointer">Description</Tab>
          <Tab className="bg-gray-200 p-3 cursor-pointer">Adress</Tab>
          <Tab className="bg-gray-200 p-3 cursor-pointer">Monthly Calendar</Tab>
          <Tab className="bg-gray-200 p-3 cursor-pointer">Reviews </Tab>
        </TabList>
        <div className='border-2 rounded-md rounded-tl-none'>

          <TabPanel >
            <div className='p-6 sm:w-3/4'>
              <p className='text-white'>{description}</p>
              <a href={cv} className='text-white'>click here to see CV</a>
              <h2 className='text-white'>Experiences</h2>
              <ul className='text-white'>{
                experiences.map((exp)=>(
                  <li>{exp}</li>
                ))
              }</ul>
            </div>
          </TabPanel>

          <TabPanel>
            <h5 className='text-white'>Adress : </h5>
            <p className='text-white'>{adress}</p>
            <Googlemap coordinates={coordinates} />
          </TabPanel>

          <TabPanel>
          </TabPanel>

          <TabPanel>
                {Reviews.map((review)=>(
                  <div className="py-3 px-4" >
                    <h1 className='text-gray-400'>{review.username}</h1>
                    <p className='text-white'>{review.comment}</p>
                  </div>
                ))}
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Tabscomp;
