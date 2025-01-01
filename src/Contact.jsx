import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>
                Take a minute to see the FAQ section below, we hope it will answer some of your common queries. 
                In case you still haven't found your answer, here's how you can contact us:
            </p>
            <div className="contact-info">
                <p><strong>Call us at:</strong> 011-40845122</p>
                <p><strong>Working Hours:</strong> Monday-Saturday, 9am to 9pm</p>
                <p><strong>Email for Support and Queries:</strong> hello@headsupfortails.com</p>
            </div>
            <h2>Send us a Message</h2>
            <form className="contact-form">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" required />
                <input type="text" placeholder="Subject" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
