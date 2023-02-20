import React, {useRef} from 'react';
import ContactCard from './ContactCard.js';
import { Link } from 'react-router-dom';

const ContactList = (props) => {
    const inputEl = useRef('')
    const deleteContactHandler = (id) => {
        props.getContactId(id)
    };

    const renderContactList = props.contacts.map(contact => {
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
   
        )
    })

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value)
    }

    return (
        <div>
            <h2>Contact List</h2>
            <Link to='/add'>
                <button>Add Contact</button>
            </Link>
            <input ref={inputEl} type='text' placeholder='Search contacts' value={props.term} onChange={getSearchTerm}/>
            <div>{renderContactList.length > 0 ? renderContactList : 'No contacts available'}</div>
        </div>
    )
}

export default ContactList;