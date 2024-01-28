import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

interface AppointmentData {
  time: string;
  empty_waiting: boolean;
  occupied_inavailable: boolean;
  law: number;
  date_created: string;
  google_user: null | any;
}

const AppointmentSystem: React.FC = () => {
  // State to store fetched appointments
  const [appointments, setAppointments] = useState<AppointmentData[]>([]);

  // State to store user-selected appointments
  const [userAppointments, setUserAppointments] = useState<{ [key: string]: string | null }>({});

  // State to store details of the selected appointment
  const [selectedAppointmentDetails, setSelectedAppointmentDetails] = useState<{
    date: string | null;
    time: string | null;
  }>({
    date: null,
    time: null,
  });

  // Session information
  const { data: session, status } = useSession();

  // Define time slots
  const timeSlots = [
    '7:00 - 8:00',
    '8:00 - 9:00',
    '9:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 13:00',
    '13:00 - 14:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00',
    '17:00 - 18:00',
  ];

  // Function to fetch appointments from the API
  const fetchAppointments = async (id: number) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/cal/${id}/`);
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  // Fetch appointments on component mount
  useEffect(() => {
    const lawyerId = 528; // Replace with your actual logic to get the lawyer ID
    fetchAppointments(lawyerId);
  }, []);

  // Function to handle booking an appointment
  const handleBookAppointment = async (date: string, time: string) => {
    if (status === 'authenticated' && session) {
      // Find the selected appointment
      const selectedAppointment = appointments.find(
        (appointment) => appointment.date_created === date && appointment.time === time
      );

      if (selectedAppointment) {
        // Handle the case when the appointment is available for booking
        if (selectedAppointment.empty_waiting) {
          // Update the Django API for the change
          await updateAppointmentStatus(date, time, false, true);

          setUserAppointments((prevUserAppointments) => ({
            ...prevUserAppointments,
            [date]: `${date} ${time}`,
          }));

          setAppointments((prevAppointments) =>
            prevAppointments.map((appointment) =>
              appointment.date_created === date && appointment.time === time
                ? { ...appointment, empty_waiting: false, occupied_inavailable: true }
                : appointment
            )
          );

          // Set the selected appointment details
          setSelectedAppointmentDetails({
            date: date,
            time: time,
          });
        } else if (selectedAppointment.occupied_inavailable) {
          // Handle the case when the appointment is waiting
          // Update the Django API for the change
          await updateAppointmentStatus(date, time, true, false);

          setUserAppointments((prevUserAppointments) => ({
            ...prevUserAppointments,
            [date]: `${date} ${time}`,
          }));

          setAppointments((prevAppointments) =>
            prevAppointments.map((appointment) =>
              appointment.date_created === date && appointment.time === time
                ? { ...appointment, empty_waiting: true, occupied_inavailable: false }
                : appointment
            )
          );

          // Set the selected appointment details
          setSelectedAppointmentDetails({
            date: date,
            time: time,
          });
        }
        // Handle other cases (empty: false, waiting: false, occupied: false, inavailable: true)
      }
    }
  };

  // Function to update appointment status in Django API
  const updateAppointmentStatus = async (date: string, time: string, empty_waiting: boolean, occupied_inavailable: boolean) => {
    try {
      const response = await axios.patch(`http://127.0.0.1:8000/calender/update`, {
        date_created: date,
        time: time,
        empty_waiting: empty_waiting,
        occupied_inavailable: occupied_inavailable,
      });

      console.log('Appointment status updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating appointment status:', error);
    }
  };

  return (
    <div className="container mx-auto p-8 dark:bg-gray-800">
      <h2 className="text-2xl font-semibold mb-4 text-white">Appointment System</h2>
      <table className="table-auto w-full text-white">
        <thead>
          <tr className="bg-gray-700">
            <th className="border p-2">Date</th>
            {timeSlots.map((slot) => (
              <th key={slot} className="border p-2">
                {slot}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => {
            const userSelectedAppointment = userAppointments[appointment.date_created];

            return (
              <tr key={appointment.date_created}>
                <td className="border p-2 text-center">{appointment.date_created}</td>
                {timeSlots.map((slot) => {
                  const isSelected = userSelectedAppointment === `${appointment.date_created} ${slot}`;

                  return (
                    <td
                      key={slot}
                      className={`border text-black p-2 ${
                        appointment.occupied_inavailable
                          ? 'bg-gray-300'
                          : isSelected
                          ? 'bg-blue-200'
                          : 'bg-white cursor-pointer hover:bg-blue-200'
                      }`}
                      onClick={status === 'authenticated' && !appointment.occupied_inavailable ? () => handleBookAppointment(appointment.date_created, slot) : undefined}
                    >
                      {appointment.occupied_inavailable ? 'Occupied' : isSelected ? 'Selected' : 'Available'}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Display selected appointment details */}
      {selectedAppointmentDetails.date && selectedAppointmentDetails.time && (
        <div className="mt-4 text-white">
          Selected Appointment: {selectedAppointmentDetails.date} {selectedAppointmentDetails.time}
        </div>
      )}
    </div>
  );
};

export default AppointmentSystem;
