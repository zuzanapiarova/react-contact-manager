import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EditContact = (props) => {

    const location = useLocation();

    const [info, setInfo] = useState(location.state);

    const navigate = useNavigate();
    const update = (e) => {
        e.preventDefault();
        if(info.email === '' || info.name === ''){
            alert('All fields are mandatory');
            return
        }
        props.updateContactHandler(info)
        setInfo({name:'', email:''})
        navigate('/')
    }

        return(
            <div>
                <h2>Edit Contact</h2>
                <form onSubmit={update}>
                    <div className='field'> 
                        <label>Name</label>
                        <input type='text' name='name' placeholder='Enter your name' value={info.name} onChange={ (e) => setInfo({name: e.currentTarget.value, email:info.email, id:info.id})}></input>
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type='email' name='email' placeholder='Enter your email'  value={info.email} onChange={ (e) => setInfo({email: e.currentTarget.value, name:info.name, id:info.id})}></input>
                    </div>
                    <button>Update</button>
                </form>
            </div>
        )
}

export default EditContact;

/*  correct class component
import React from 'react';
import { useNavigate } from 'react-router-dom'

class AddContact extends React.Component{
    state = {
        name:'', 
        email:''
    }

    add = (e) => {
        e.preventDefault();
        if(this.state.email === '' || this.state.name === ''){
            alert('All fields are mandatory');
            return
        }
        this.props.addContactHandler(this.state)
        this.setState({name:'', email:''})
        let navigate = useNavigate();
        navigate('/') //hooks can only be used inside function component so at home remake class to unction component!!!!

    }

    render(){
        return(
            <div>
                <h2>Add Contact</h2>
                <form onSubmit={this.add}>
                    <div className='field'> 
                        <label>Name</label>
                        <input type='text' name='name' placeholder='Enter your name' value={this.state.name} onChange={ (e) => this.setState({name: e.target.value})}></input>
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type='email' name='email' placeholder='Enter your email'  value={this.state.email} onChange={ (e) => this.setState({email: e.target.value})}></input>
                    </div>
                    <button>Add</button>
                </form>
            </div>

        )
    }
}

export default AddContact;
*/