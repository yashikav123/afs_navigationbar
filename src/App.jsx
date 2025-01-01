import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import './App.css';

function App() {
    return (
        <>
            <header>
    
            </header>
            <Router>
                <nav>
                    <ul>
                        <li className="logo">
                            <img src="/photo1.svg" alt="logo" />
                        </li>
                        <li className="logo1">
                            <Link to="/">Yashika</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/ContactUs">ContactUs</Link>
                        </li>
                        <li>
                            <Link to="/AboutUs">About Us</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/AboutUs" element={<About />} />
                    <Route path="/ContactUs" element={<Contact />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/Yashika" element={<Home />} />
                </Routes>
            </Router>
            <footer className="footer">
                <strong>Copyright © 2024.</strong>
                <br />
                <strong>All Rights Reserved.</strong>
            </footer>
        </>
    );
}

export default App;
