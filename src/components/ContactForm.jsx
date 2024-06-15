import React from 'react';
import './contact.css';
const ContactForm = () => {
    return (
        <div className="contact-form">
     
            <form>
                <div className="form-group">
                    <label htmlFor="name" className="name_label">Name:</label>
                    <input type="text" id="name_touch" name="name" placeholder="enter your name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="email_label">Email:</label>
                    <input type="email" id="email_touch" name="email" placeholder="enter your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="message_label">Message:</label>
                    <textarea id="message_touch" name="message" placeholder="enter the message" required></textarea>
                </div>
                <button type="submit" className='send_message'>Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;
