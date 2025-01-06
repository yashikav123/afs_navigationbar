import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const Navigate = useNavigate();
    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/api/user/createss", { name, email, address })
            .then(result => {
                console.log(result.data);
                Navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={submit}>
                <label>Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <br />
                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Address</label>
                <input type="text" onChange={(e) => setAddress(e.target.value)} />
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateUser;
