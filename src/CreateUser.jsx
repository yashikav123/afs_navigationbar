import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateUser.css';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const submit = (e) => {
        e.preventDefault();
        axios.post("https://backenddemo-wklm.onrender.com/api/user/createss", { name, email, address })
            .then(result => {
                console.log(result.data);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                setError("An error occurred while creating the user.");
            });
    };

    return (
        <div className="container">
            <div className="create-user">
                <h1>Create User</h1>
                {error && <p className="error-message">{error}</p>}
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
        </div>
    );
};

export default CreateUser;
