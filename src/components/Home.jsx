import React, { useState } from "react";
import "./css/Home.css";
import Features from "./Features";
import Slider from './Slider';
import Blogs from './Blogs';
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import { Link } from 'react-router-dom';
import shortVideo from "../videos/CamHire_vid.mp4";
import aboutUSPicture from "../images/landing_page.jpg";
import photographerBackground from "../images/camera.png";

const Home = () => {

  const [active, setActive] = useState(true);

  const handleClose = () => {
    setActive(false);
  }

  return (
    <>
      <div id="wrapper">
        <div className="button-wrapper" style={!active ? { display: "none" } : { display: "flex" }}>
          <span>
            <button className="main-button">Join Us</button>
            <button className="dismiss" onClick={handleClose}>X</button>
          </span>
        </div>
        <div className="rest-content">
          <div className="left-block">
            <div className="text-content">
              <h1>Endless Possibilities with <span className="camera-text">Camera</span> just a Click Away</h1>
              <span>We are the string which enables you to  connects the best photographers in easiest way possible</span>
            </div>
            <div className="learn-more-wrapper">
              <button>Learn more</button>
            </div>
          </div>
          <div className="video-wrapper">
            <video autoPlay loop muted>
              <source src={shortVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <Features />
      <hr />
      <div id="about-us">
        <h1>About Us</h1>
        <div className="about-us-content">
          <div className="about-us-paragraph">
            <p>Three years back, five mavericks saw a dream to take a journey off-beat from what they were doing and jumped into a pool of creating stories by capturing moments. One day while sitting in the backyard, one of the stakeholders, also a passionate photographer, pondered the endless hurdles in the business world of photography. Whether it was about finding the best photographers from different corners of the country or picking the apt one according to your style. CamHire is an endeavour to overcome all those barriers and fulfil that very motive of photography. We help photographers and freelancers connect with clients all over Indiato provide desired services. CamHire started off as an expression of Suraj’s hunger for creativity to build photographic content by using different lenses. Adding to his passion for the trueessence of photography, Kuldeep and Yash brought their technical and financial minds,respectively. The marketing brain behind the lenses came forward with the emerging entrepreneur, Simar, who lent all his wisdom to turn a vision into a brand. CamHire became a perfect amalgamation of all the business skills and creative interests.Inspired to look at the world through camera lenses, a venture was born that aims to capture the beauty of human emotions in their truest form.</p>
            <Link to="/about">...ReadMore</Link>
          </div>
          <img src={aboutUSPicture} alt="about us" />
        </div>
      </div>
      <hr />
      <div id='photographers' style={{ backgroundImage: `url(${photographerBackground})` }}>
        <h1 className='heading'>Our Photographers</h1>
        <Slider />
      </div>
      <hr />
      <Blogs />
      <hr />
      <Gallery />
      <hr />
      <ContactUs />
    </>
  );
}

export default Home;