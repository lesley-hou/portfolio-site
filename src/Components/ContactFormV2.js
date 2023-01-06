import React, {useRef} from 'react';
import './Styles/ContactForm.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jx4nflo', 'template_zi3pazn', form.current, 'G-PajkmtGMOzKIcFR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="form_questions">
                <span className="inline_question">
                    <label>NAME</label>
                    <input className="response_box_short" type="text" name="from_name" placeholder="Full Name"/>
                </span>
                <span className="vertical_divider" />
                <span className="inline_question">
                    <label>PRONOUNS</label>
                    <input className="response_box_short" type="text" name="pronouns" placeholder="e.g. she/her"/>
                </span>
                <div className="horizontal_divider" />
                <div className="row_question">
                    <label>EMAIL</label>
                    <input className="response_box_long" type="email" name="reply_to" placeholder="someone@example.com"/>
                </div>
                <div className="horizontal_divider" />
                <div className="row_question">
                    <label>MESSAGE</label>
                    <textarea className="paragraph_response" name="message"  rows="12" cols="90" placeholder="Your message here..."/>
                </div>
            </div>
            <input type="submit" value="SEND" />
        </form>
    )
}
 
export default ContactFormV2;
