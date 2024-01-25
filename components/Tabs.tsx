import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Googlemap from '@/components/Googlemap';
import React, { useState } from 'react';
import Comment from '@/components/Comment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Divide } from 'lucide-react';



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
  Reviews : Review[];
  cv?: string | null;
  onClickDay: (date: Date) => void;
}

const disabledDays = [new Date(2024,1,1), new Date(2024,4,13)]
const Tabscomp :React.FC<tabsCompProps>  = (props) => {
  const { adress,cv, description, experiences, Reviews} = props
  const [forceRender, setForceRender] = useState(false);
  const [comment, setComment] = useState('')
  const [date, setDate] = useState(new Date());
  const handleTabSelect = () => {
    setForceRender(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setComment(event.target.value);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(comment);
    setComment('')

    // const apiUrl = '';

    // try {
    //   const response = await fetch(apiUrl, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     console.log('Appointment submitted successfully!');
    //   } else {
    //     console.error('Error submitting appointment:', response.statusText);
    //   }
    // } catch (error) {
    //   console.error('Network error:');
    // }
  };

  const tileDisabled = ({ date, view }: { date: Date; view: string }) => {
    const currentDate = new Date();
  
    if (view === 'month' && (date.getDay() === 5 || date.getDay() === 6)) {
      return true;
    }
  
    if (view === 'month' && date < currentDate) {
      return true;
    }
  
    if (disabledDays.some((disabledDate) => {
          return disabledDate.toLocaleDateString() === date.toLocaleDateString();
        })) {
        return true;
      }
  
    return false;
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

        <TabPanel>
          <div className='p-10 bg-white'>
            <p className='text-black  w-fit'>{description}</p>
            {cv ? (
              <a href={cv} target='_blank' className='block text-black w-fit underline mt-4'>
                Click here to see CV
              </a>
            ) : null}
            <h2 className='text-black mt-4 text-lg'>Experiences :</h2>
            <ul className='text-black list-disc ml-6'>
              {experiences.map((exp, index) => (
                <li key={index} className='mb-2'>
                  {exp}
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>

          <TabPanel>
            <div className='p-10 bg-white'>
              <h5 className='text-black'>Adress : </h5>
              <p className='text-black'>{adress}</p>
              <Googlemap coordinates={coordinates} />
            </div>
          </TabPanel>

          <TabPanel>
            <Calendar
              calendarType='hebrew'
              tileDisabled={tileDisabled}
              onClickDay={(date) => {
                setDate(date);
                props.onClickDay(date);
              }}
            />
          </TabPanel>

          <TabPanel>
            <div className='p-10 bg-white'>
                  <form onSubmit={handleSubmit}>
                    <input type="text" name="comment" value={comment} onChange={handleChange} id="comment" placeholder='comment here'/>
                    <button type='submit'>add</button>
                  </form>
                {Reviews.map((review, index)=>(
                  <Comment key={index} username={review.username} comment={review.comment}/>
                ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Tabscomp;
