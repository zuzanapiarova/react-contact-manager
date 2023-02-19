import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import userImg from '../images/user-image-woman.jpeg';


const ContactDetails = (props) => {
    const location = useLocation();
    console.log(location)
    const {email, name} = location.state;

    return (
        <div>
            <img src={userImg} alt='user'></img>
            <div className='content'>
                <h2 className='name'>{name}</h2>
                <p className='email'>{email}</p>
            </div>
            <Link to='/'>
                <button>Back to Contact list</button>
            </Link>
            
        </div>
    )
};

export default ContactDetails;

