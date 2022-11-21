import React from 'react';
import { MdPhone, MdMailOutline } from "react-icons/md";
import { TbLocation } from "react-icons/tb";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "./css/ContactUs.css";

const ContactUs = () => {

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
                    <form action=''>
                        <div className='contact-right-item'>
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div className='contact-right-item'>
                            <input type="email" name="email" placeholder="E-mail" />
                        </div>
                        <div className='contact-right-item'>
                            <textarea name="message" placeholder='Type your message here' />
                        </div>
                        <div className='contact-right-item'>
                            <input type="submit" value="Send Us" />
                        </div>
                    </form>
                </div>
            </div>
            <hr />
            <div className="social-links">
                <a href="" target="_blank" className="social-icon-wrapper">
                    <FaFacebookF />
                </a>
                <a href="https://youtube.com/channel/UCpWnluYyvqgrI5_EWhrBhdg" target="_blank" className="social-icon-wrapper">
                    <FaYoutube />
                </a>
                <a href="https://instagram.com/cam_hire/" target="_blank" className="social-icon-wrapper">
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/camhirephotography/" target="_blank" className="social-icon-wrapper">
                    <FaLinkedinIn />
                </a>
            </div>
        </div>
    )
}

export default ContactUs
