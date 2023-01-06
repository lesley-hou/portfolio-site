import React from 'react';
import './Styles/Contact.css';
import ContactForm from '../Components/ContactForm';

const Contact = () => {
    return ( 
        <div className="Contact">
            <div className="form_description">
                <h1 className="header">Let's get in touch!</h1>
                <p className="description">I'm always looking to meet new people or chat about new opportunities. Feel free to drop a message and say hi!</p>
            </div>
            <ContactForm/>
        </div>
    );
}
 
export default Contact;
