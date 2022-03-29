import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {



  return (
    <form onSubmit={handleSubmit}>
      <input type='text' id='name'>Contact Name</input>
      <input type='tel' id='phone'>Contact Phone Number</input>
      <input type='email' id='email' >Contact Email Address</input>
      <button type='submit' id='submit' />
    </form>
  );
};
