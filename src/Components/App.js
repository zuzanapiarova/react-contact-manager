import React, {useState, useEffect} from 'react';
import './App.css';
import {uuid} from 'uuidv4';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header.js';
import ContactList from './ContactList.js';
import AddContact from './AddContact.js';
import ContactDetails from './ContactDetails.js'

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContact] = useState([]);

  const addContactHandler = (contact) => {
    setContact([...contacts, {id: uuid(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter(contact=> {
      return contact.id !== id;
    });
    setContact(newContactList)
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) {setContact(retrieveContacts)}
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);

  return (
    <div>
      <Router>
        <Header />
        <Routes> {/*switch makes the browser render only the first match, not every route that matches - because now at www.website.com/add we get both add and contact list because /add matches also /*/}
          <Route path='/add' element={<AddContact addContactHandler={addContactHandler}/>} />
          <Route path='/' element={<ContactList contacts={contacts} getContactId={removeContactHandler}/>}/>
          <Route path='/contact/:id' element={<ContactDetails />}></Route>
        </Routes>
       
          {/*
          
          <Route path='/add' element={<AddContact addContactHandler={addContactHandler}/>} />
          <Route path='/' element={<ContactList contacts={contacts} getContactId={removeContactHandler}/>}/>
          
          
          <AddContact addContactHandler={addContactHandler}/>
          <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
      </Router>
    </div>
  );
}

export default App;
