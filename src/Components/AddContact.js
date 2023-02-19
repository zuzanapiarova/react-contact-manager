import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
//import { redirect } from 'react-router-dom';

const AddContact = (props) => {
 
    const [state, setState] = useState(
        {
        name:'', 
        email:''
        }
    )

    const navigate = useNavigate();

    const add = (e) => {
        e.preventDefault();
        if(state.email === '' || state.name === ''){
            alert('All fields are mandatory');
            return
        }
 
        props.addContactHandler(state)
        setState({name:'', email:''})
        //return redirect("/")
        navigate('/')
    }

        return(
            <div>
                <h2>Add Contact</h2>
                <form onSubmit={add}>
                    <div className='field'> 
                        <label>Name</label>
                        <input type='text' name='name' placeholder='Enter your name' value={state.name} onChange={ (e) => setState({name: e.currentTarget.value, email: state.email})}></input>
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type='email' name='email' placeholder='Enter your email'  value={state.email} onChange={ (e) => setState({email: e.currentTarget.value, name:state.name})}></input>
                    </div>
                    <button>Add</button>
                </form>
            </div>

        )
}

export default AddContact;

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