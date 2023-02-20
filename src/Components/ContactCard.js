import React from 'react';
import user from '../images/user.png';
import trashcan from '../images/delete.png';
import edit from '../images/editing.png'
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
    const {id, name, email} = props.contact;

    return(
        <div className='item'>
            <img src={user} height='50' width='50' alt='user'></img>
            <div className='content'>
                <Link to={`/contact/${id}`} state={props.contact}>
                    <div>{name}</div>
                    <div>{email}</div>
                </Link>
               
            </div>
        <img src={trashcan} height='20' width='20' alt='trash can' onClick={() => props.clickHandler(id)}></img>
        <Link to={`/edit`} state={props.contact}>
            <img src={edit} height='20' width='20' alt='edit'></img>
        </Link> 
    </div>
    )
}

export default ContactCard;