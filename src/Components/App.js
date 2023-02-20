import React, {useState, useEffect} from 'react';
import './App.css';
import {uuid} from 'uuidv4';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header.js';
import ContactList from './ContactList.js';
import AddContact from './AddContact.js';
import ContactDetails from './ContactDetails.js';
import api from './api/contacts.js'
import EditContact from './EditContact.js';

function App() {

  const [contacts, setContact] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([])

// A. doing all in local storage 
  /*
  const LOCAL_STORAGE_KEY = 'contacts';
  const addContactHandler = (contact) => {
    setContact([...contacts, {id: uuid(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter(contact=> {
      return contact.id !== id;
    });
    setContact(newContactList)
  }

  //get and set data ( = fetch data) to a local storage
 
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) {setContact(retrieveContacts)}
  }, []);
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);
  */

//B. doing all in fake backend
  //retrieving contacts with axios GET CALL
  const retrieveContacts = async () => {
    const response = await api.get('/contacts'); 
    return response.data;
  }

  //get and set data (= fetch the data) to a fake backend with json-server and axios
  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if(allContacts) setContact(allContacts)
    };
    getAllContacts()
  }, []);

  useEffect(() => {}, [contacts]);

  //so add contact button saves the new data also to our fake backend
  const addContactHandler = async (contact) => {
    const request = { //same as this: setContact([...contacts, {id: uuid(), ...contact}]);
      id: uuid(), 
      ...contact
    }
    const response = await api.post('/contacts', request)  //creating a request with axios POST CALL
    setContact([...contacts, response.data]); // once we get the response, set the response it into our state -> so new contact is added to the previous contacts
  };

  const updateContactHandler = async (contact) => { //updating data with axios PUT CALL
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const {id, name, email} = response.data;
    setContact(contacts.map(contact => {
      return contact.id === id ? {...response.data} : contact;
    }))
  }

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm)
    if(searchTerm !== ''){
      const newContactList = contacts.filter(contact => {
        return Object.values(contact).join(' ').toLocaleLowerCase().includes(searchTerm.toLowerCase())
      })
      setSearchResults(newContactList)
    } else {
      setSearchResults(contacts)
    }
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter(contact=> {
      return contact.id !== id;
    });
    setContact(newContactList)
  }

  return (
    <div>
      <Router>
        <Header />
        <Routes> {/*switch makes the browser render only the first match, not every route that matches - because now at www.website.com/add we get both add and contact list because /add matches also /*/}
          <Route path='/add' element={<AddContact addContactHandler={addContactHandler}/>} />
          <Route path='/' element={<ContactList contacts={searchTerm.length < 1 ? contacts : searchResults} term={searchTerm} searchKeyword={searchHandler} getContactId={removeContactHandler}/>}/>
          <Route path='/edit' element={<EditContact updateContactHandler={updateContactHandler}/>} />
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
