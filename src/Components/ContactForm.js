import React, {useRef, useState} from 'react';
import './Styles/ContactForm.css';
import emailjs from '@emailjs/browser';
import minmize from '../Assets/Contact/minimize.png'
import fullscreen from '../Assets/Contact/fullscreen.png'
import close from '../Assets/Contact/close.png'

const ContactForm = () => {
    const form = useRef();
    const [showPopup, setShowPopup] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jx4nflo', 'template_zi3pazn', form.current, 'G-PajkmtGMOzKIcFR')
        .then((result) => {
            console.log(result.text);
            setShowPopup(true);
        }, (error) => {
            console.log(error.text);
        });

        form.current.reset();
    };

    return (
        <>
            {showPopup &&
                <div className="popup_overlay">
                    <div className="popup_content">
                        <h2 className="popup_title">Message Sent Successfully</h2>
                        <p className="popup_description">Thanks for your message, I'll get back to you as soon as I can!</p>
                        <button buttonid="close_popup" className="close_popup" onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            }   
            
            <form ref={form} onSubmit={sendEmail}>
                <div className="form_questions">
                    <div className="new_message_div">
                        <label className="new_message">New Message</label>
                        <div className="browser_buttons">
                            <img className="browser_button" src={minmize} width="15px" height="15px"/>
                            <img className="browser_button" src={fullscreen} width="15px" height="15px"/>
                            <img className="browser_button" src={close} width="15px" height="15px"/>
                        </div>
                    </div>
                    <div className="horizontal_divider" />
                    <div className="question">
                        <label className="email-components">TO:</label>
                        <span>Lesley Hou (lesleyhou28@gmail.com)</span>
                        <span className="cc-bcc">CC / BCC</span>
                    </div>
                    <div className="horizontal_divider" />
                    <div className="question">
                        <label className="email-components">SUBJECT:</label>
                        <input className="response-box-long" type="text" name="subject" placeholder="RE: Your subject"/>
                    </div>
                    <div className="horizontal_divider" />
                    <div className="question">
                        <label className="email-components">MESSAGE:</label>
                        <textarea className="paragraph-response" name="message" placeholder="Type your message..."/>
                    </div>
                    <div className="horizontal_divider" />
                    <div className="question">
                        <label className="email-components">FROM:</label>
                        <input className="response-box-long" type="name" name="name" placeholder="Your name"/>
                    </div>
                    <div className="horizontal_divider" />
                    <div className="question">
                        <label className="email-components">EMAIL:</label>
                        <input className="response-box-long" type="reply_to" name="reply_to" placeholder="someone@example.com"/>
                    </div>
                </div>
                <button id="submit-button" className="submit" type="submit">SEND</button>
            </form>
        </>
    )
}
 
export default ContactForm;