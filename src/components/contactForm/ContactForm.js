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
      <input type='text' id='name' onChange={setName}/>
      <input type='tel' id='phone' onChange={setPhone}/>
      <input type='email' id='email' onChange={setEmail}/>
      <button type='submit' id='submit' />
    </form>
  );
};
