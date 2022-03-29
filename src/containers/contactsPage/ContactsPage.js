import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {

  const contacts = props.contacts
  const addContact = props.addContact

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [isDup, setIsDup] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDup) {
      addContact(name, phone, email)
    }
    document.getElementById('name').value = ''
    document.getElementById('phone').value = ''
    document.getElementById('email').value = ''
    setName('')
    setPhone('')
    setEmail('')
    setIsDup(false)
  };

  useEffect(name => {
    contacts.forEach(cont => {
      if (cont.name === name) {
        setIsDup(true)
        window.alert('There is already a contact with that name.')
      }
    })
  })

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}   
          handleSubmit={handleSubmit}       
          />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={props.contacts} />
      </section>
    </div>
  );
};
