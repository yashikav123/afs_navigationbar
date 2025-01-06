
import React from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import User from './User'
const Appstart = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<User />} />
                    <Route path="/createuser" element={<CreateUser />} />
                    <Route path="/updateuser/:id" element={<UpdateUser />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Appstart