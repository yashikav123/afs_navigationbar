//import usermodel from "../../backend/model/usermodel"
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const User=()=>
{
 const[user1,setUser]=useState([
    {name:"Yashia",email:"yashia@123",address:"ramnad"}
 ]);
 useEffect(() => {
    axios
    .get("http://localhost:3000/api/user/createUser")
    .then((res)=>
    {   console.log(res.data);
        setUser(res.data.users);
    })
    .catch((err)=>
    {console.log(err)})
 },[]);
 return(
    <div>
        <h1>user</h1>
        <Link to="/createuser">Create User</Link>
        <table>
            
            <tr>
            <th>name</th>
            <th>email</th>
            <th>address</th>
            </tr>
            
            
            {
                user1.map((users)=>
                (
                    
                        <tr>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.address}</td>
                            <td>
                                <Link to='updateuser'>Update</Link>
                                <button>Delete</button>
                            </td>
                        </tr>
                    
                ))
            }
            
        </table>
    </div>
 )
}

export default User;