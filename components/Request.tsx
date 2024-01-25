import React from 'react';

interface RequestProps {
    id: number;
    category : string;
    description: string;
    budget: number;
    appointment: {
      date: Date;
      time: string;
    };
    userfname: string;
    userlname: string;
    email: string;
    phone: string;
}

const WorkRequestDetails: React.FC<RequestProps> = ({id, category, description, budget, appointment, userfname, userlname, email, phone}) => {
  return (
      <div className="self-start bg-gray-100 w-fit p-6 rounded-md shadow-lg text-sm">
        <h2 className="text-lg text-center font-bold mb-4">Work Request</h2>
        <div className=" mb-3 flex gap-2">
          <h5 className=" font-bold">Category:</h5>
          <p>{category}</p>
        </div>
        <div className="mb-3 flex gap-2">
          <h5 className="font-bold">Description:</h5>
          <p>{description}</p>
        </div>
        <div className="mb-3 flex gap-2">
          <h5 className="font-bold">Budget:</h5>
          <p>{budget}</p>
        </div>
        <div className="mb-3 flex gap-2">
          <h5 className="font-bold">Appointment Date:</h5>
          <p>{appointment.date.getDate()} {appointment.date.getMonth() + 1} {appointment.date.getFullYear()} </p>
        </div>
        <div className="mb-3 flex gap-2">
          <h5 className="font-bold">Name:</h5>
          <p>{userfname} {userlname}</p>
        </div>
        <div className="mb-3 flex gap-2">
          <h5 className="font-bold">Email:</h5>
          <p>{email}</p>
        </div>
        <div className="mb-3 flex gap-2">
          <h5 className="font-bold">Phone:</h5>
          <p>{phone}</p>
        </div>
        <div className='text-xs self-center'>
          <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md mr-2 hover:bg-green-600">
            Accept
          </button>
          <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600">
            Refuse
          </button>
        </div>
      </div>
  )
};

export default WorkRequestDetails;
