"use client"
import { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Request from '@/components/Request';
import { LogOutIcon } from 'lucide-react';
import { Moon, Sun } from 'lucide-react';

const LawyerDashboard = () => {
    const [page1, setPage1] = useState(true)
    const [page2, setPage2] = useState(false)
    const [date, setDate] = useState(new Date());
    const tileDisabled= ({ date, view }: { date: Date; view: string }) => {
        if (view === 'month' && (date.getDay() === 5 || date.getDay() === 6)) {
          return true;
        }
      return false;
    };
    const requests = [
        {
            id: 1,
            category : "droit",
            description: "string",
            budget: 1000,
            appointment: new Date(1, 3, 2024),
            userfname: "houssem",
            userlname: "mechraoui",
            email: "d.mechraoui8@gmail.com",
            phoneNumber: "0549412832",
        },
        {
            id: 2,
            category : "droit",
            description: "string",
            budget: 1000,
            appointment: new Date(1, 3, 2024),
            userfname: "houssem",
            userlname: "mechraoui",
            email: "d.mechraoui8@gmail.com",
            phoneNumber: "0549412832",
        },
        {
            id: 3,
            category : "droit",
            description: "string",
            budget: 1000,
            appointment: new Date(1, 3, 2024),
            userfname: "houssem",
            userlname: "mechraoui",
            email: "d.mechraoui8@gmail.com",
            phoneNumber: "0549412832",
        },
        {
            id: 4,
            category : "droit",
            description: "string",
            budget: 1000,
            appointment: new Date(1, 3, 2024),
            userfname: "houssem",
            userlname: "mechraoui",
            email: "d.mechraoui8@gmail.com",
            phoneNumber: "0549412832",
        },
        {
            id: 5,
            category : "droit",
            description: "string",
            budget: 1000,
            appointment: new Date(1, 3, 2024),
            userfname: "houssem",
            userlname: "mechraoui",
            email: "d.mechraoui8@gmail.com",
            phoneNumber: "0549412832",
        },
        {
            id: 6,
            category : "droit",
            description: "string",
            budget: 1000,
            appointment: new Date(1, 3, 2024),
            userfname: "houssem",
            userlname: "mechraoui",
            email: "d.mechraoui8@gmail.com",
            phoneNumber: "0549412832",
        }
    ]

    return ( 
        <div className={`h-full flex flex-col px-6 md:px-8 lg:px-10  2xl:px-32 items-center justify-center`}>
            <div className='flex justify-center '>
                <ul className='text-md absolute top-10 flex gap-10 bg-gray-200 px-5 rounded-xl pt-3 pb-0 font-normal'>
                    <li className={`mb-4 ${page1 ? 'font-bold' : ''}`}> <button onClick={()=>( setPage1(true), setPage2(false))}>Calendar</button> </li>
                    <li className={`mb-4 ${page2 ? 'font-bold' : ''}`}> <button onClick={()=>( setPage1(false), setPage2(true))}>Incoming Requests</button> </li>
                    <li className={`text-center`}><button> <LogOutIcon /> </button></li>
                </ul>
            </div>
            {page1 ? (
                <div className='text-black'>
                    <Calendar
                    calendarType='hebrew'
                    tileDisabled={tileDisabled}
                    onClickDay={setDate}
                    />
                </div>
            ) :
            page2 ? (
                <div className="flex flex-wrap justify-center pt-28 pb-10 gap-9">
                    {
                        requests.map(request => (
                            <Request id={request.id}  description={request.description} budget={request.budget} category={request.category} appointment={request.appointment} userfname={request.userfname} userlname={request.userlname} email={request.email} phone={request.phoneNumber} />
                        ))
                    }
                </div>
            ): 
            null
            }
        </div>
     );
}
 
export default LawyerDashboard;