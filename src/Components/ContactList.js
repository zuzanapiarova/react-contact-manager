import React from 'react';
import ContactCard from './ContactCard.js';
import {Link} from 'react-router-dom';

const ContactList = (props) => {
    
    const deleteContactHandler = (id) => {
        props.getContactId(id)
    };

    const renderContactList = props.contacts.map(contact => {
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
   
        )
    })
    return (
        <div>
            <h2>Contact List</h2>
            <Link to='/add'>
                <button>Add Contact</button>
            </Link>
            <div>{renderContactList}</div>
        </div>
    )
}

export default ContactList;