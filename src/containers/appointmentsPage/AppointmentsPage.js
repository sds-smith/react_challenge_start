import React, { useState } from "react";

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
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};
