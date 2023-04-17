import React, { useRef } from 'react';
import "./css/ContactUs.css";
import emailjs from '@emailjs/browser';
import { MdPhone, MdMailOutline } from "react-icons/md";
import { TbLocation } from "react-icons/tb";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY);
        form.current.reset();
    };

    return (
        <div id="contact">
            <div className='contact-main'>
                <div className='contact-left'>
                    <div className='contact-left-item'>
                        <h1>Contact Us</h1>
                    </div>
                    <div className='contact-left-item'>
                        <div className='icon-wrapper'>
                            <MdMailOutline />
                        </div>
                        <span>letsvendout@gmail.com</span>
                    </div>
                    <div className='contact-left-item'>
                        <div className='icon-wrapper'>
                            <MdPhone />
                        </div>
                        <span>+91-6378530832</span>
                    </div>
                    <div className='contact-left-item'>
                        <div className='icon-wrapper'>
                            <TbLocation />
                        </div>
                        <span>5th Floor, D Building, MIT College, Paud Road, Kothrud, Pune Maharashtra - 411038</span>
                    </div>
                </div>
                <div className='contact-right'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='contact-right-item'>
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div className='contact-right-item'>
                            <input type="email" name="email" placeholder="E-mail" required />
                        </div>
                        <div className='contact-right-item'>
                            <textarea name="message" placeholder='Type your message here' required />
                        </div>
                        <div className='contact-right-item'>
                            <button type="submit">Send Us</button>
                        </div>
                    </form>
                </div>
            </div>
            <hr />
            <div className="social-links">
                {/* <a href="/" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                    <FaFacebookF />
                </a> */}
                <a href="https://youtube.com/channel/UCpWnluYyvqgrI5_EWhrBhdg" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                    <FaYoutube />
                </a>
                <a href="https://instagram.com/cam_hire/" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/camhirephotography/" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                    <FaLinkedinIn />
                </a>
            </div>
        </div>
    )
}

export default ContactUs