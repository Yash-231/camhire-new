import React from 'react';
import './css/Navbar.css';
import { NavLink } from 'react-router-dom';
import camhireLogo from '../images/camhire_logo.png';

const Navbar = () => {

    return (
        <div id='navbar'>
            <NavLink to="/" className='logo'>
                <img src={camhireLogo} alt="Camhire" />
                <span style={{ fontWeight: 300 }}><b style={{ fontWeight: 700 }}>CAM</b>HIRE</span>
            </NavLink>
            <ul className='links'>
                <li><NavLink to="/features">Features</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/photographers">Photographers</NavLink></li>
                <li><NavLink to="/blogs">Blogs</NavLink></li>
                <li><NavLink to="/gallery">Gallery</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar