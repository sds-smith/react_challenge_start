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
      <input type='text' id='name' value={name} onChange={({target}) => {setName(target.value)}}/>
      <input type='tel' id='phone' value={phone} onChange={({target}) => {setPhone(target.value)}}/>
      <input type='email' id='email' value={email} onChange={({target}) => {setEmail(target.value)}}/>
      <button type='submit' id='submit' />
    </form>
  );
};
