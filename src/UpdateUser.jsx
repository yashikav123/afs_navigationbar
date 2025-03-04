import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateUser = () => {
    const {id}=useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    

    const update = (e) => {
        e.preventDefault();  
        
        
        axios.put(`https://backenddemo-wklm.onrender.com/api/user/update/${id}`, { name, email, address })
            .then((result) => {
               
                navigate('/');  
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h1>Update User</h1>
            <form onSubmit={update}>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
                
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                
                <label>Address</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /><br />
                
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateUser;
