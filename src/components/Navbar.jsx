import React, { useState } from 'react';
import './css/Navbar.css';
import { NavLink, Link } from 'react-router-dom';
import camhireLogo from '../images/camhire_logo.png';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }

    const Tablet = ({ children }) => {
        const isTablet = useMediaQuery({ maxWidth: 991 })
        return isTablet ? children : null
    }

    return (
        <>
            <Desktop>
                <div id='navbar'>
                    <Link to="/" className='logo'>
                        <img src={camhireLogo} alt="Camhire" />
                        <span style={{ fontWeight: 300 }}><b style={{ fontWeight: 700 }}>CAM</b>HIRE</span>
                    </Link>
                    <ul className='links'>
                        <li><NavLink to="/features">Features</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/photographers">Photographers</NavLink></li>
                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                        <li><NavLink to="/gallery">Gallery</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                    </ul>
                </div>
            </Desktop>
            <Tablet>
                <div id='navbar'>
                    <div className="wrapper">
                        <Link to="/" className='logo'>
                            <img src={camhireLogo} alt="Camhire" />
                            <span style={{ fontWeight: 300 }}><b style={{ fontWeight: 700 }}>CAM</b>HIRE</span>
                        </Link>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="#FFFFFF" onClick={() => { return setOpen(!open) }}>
                            <path d="M6.05 35.8v-2.9H42v2.9Zm0-10.35V22.5H42v2.95Zm0-10.35v-2.9H42v2.9Z" />
                        </svg>
                        <ul className={open ? "links expanded" : "links"} style={{ display: open ? "flex" : "none" }}>
                            <li><svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" fill="#FFFFFF" onClick={() => setOpen(false)}><path d="m10.458 32.625-3.083-3.083L16.917 20l-9.542-9.542 3.083-3.083 9.542 9.5 9.542-9.5 3.083 3.083L23.083 20l9.542 9.542-3.083 3.083L20 23.083Z" /></svg></li>
                            <li><NavLink to="/features" onClick={() => setOpen(false)}>Features</NavLink></li>
                            <hr />
                            <li><NavLink to="/about" onClick={() => setOpen(false)}>About Us</NavLink></li>
                            <hr />
                            <li><NavLink to="/photographers" onClick={() => setOpen(false)}>Photographers</NavLink></li>
                            <hr />
                            <li><NavLink to="/blogs" onClick={() => setOpen(false)}>Blogs</NavLink></li>
                            <hr />
                            <li><NavLink to="/gallery" onClick={() => setOpen(false)}>Gallery</NavLink></li>
                            <hr />
                            <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact Us</NavLink></li>
                        </ul>
                    </div>
                </div>
            </Tablet>
        </>

    )
}

export default Navbar