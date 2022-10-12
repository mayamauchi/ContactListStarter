import React, {useState} from "react";
import ContactList from './ContactList';

  const dummyContacts = [
    {"id": 1, "name": "R2-D2", "phone": "222-222-2222", "email": "r2d2@droids.com"},
    {"id": 2, "name": "C-3PO", "phone": "333-333-3333", "email": "c3po@droids.com"},
    {"id": 3, "name": "BB-8", "phone": "888-888-8888", "email": "bb8@droids.com"}
  ]

  const Main = () => {
  const [contacts, setContacts] = useState(dummyContacts);

  return (
   
    <div id="main">
    <div id="navbar">
      <div>Contact List</div>
    </div>
      <div id="container">
        <ContactList contacts={contacts}/>
      </div>
    </div>
  );
  }
    

export default Main;
