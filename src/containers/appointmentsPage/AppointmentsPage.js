import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm"
import { TileList } from '../../components/tileList/TileList'

export const AppointmentsPage = (props) => {

  const appointments = props.appointments 
  const contacts = props.contacts 
  const addAppointment = props.addAppointment

  const [title, setTitle] = useState('')
  const [contact, setContact] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time)
    setTitle('')
    setContact('')
    setDate('')
    setTime('')
    document.querySelector('').value = ''
    document.querySelector('').value = ''
    document.querySelector('').value = ''
    document.querySelector('').value = ''
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
              title={title} 
              contact={contact} 
              date={date} 
              time={time}
              handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={appointments} />
      </section>
    </div>
  );
};
