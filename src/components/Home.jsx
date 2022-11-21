import React from "react";
import shortVideo from "../video/CamHire_vid.mp4";
import aboutUSPicture from "../images/landing_page.jpg";
import photographerBackground from "../images/pngwing.png";
import "./Home.css";
import Slider from './Slider';
import Blogs from './Blogs';
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import { Link } from 'react-router-dom';
import Features from "./Features";

const Home = () => {

  return (
    <div className="Home-container">
      {/* <div className="wrapper">
        <div className="join-us">
          <div>
            <button className="join-us-button">Join Us</button>
            <button className="close-button" type="button">X</button>
          </div>
        </div>
        <div className="header">
          <div className="header__left">
            <h3 className="header__h3">
              Endless Possibilities with <b className="cam__text">Camera</b>{" "}
              just a Click Away
            </h3>
            <h4 className="header__h4">
              We are the string which enables you to connects the best
              photographers in easiest way possible
            </h4>
            <button className="learn-more__button">Learn more</button>
          </div>
          <div className="header__right">
            <div className="video__container">
              <div className="video video__player"></div>
              <video
                autoPlay
                loop
                muted
                className="video__player"
              >
                <source src={shortVid} type="video/mp4" />
              </video>
            </div>
          </div>
        </div> */}
      <div id="wrapper">
        <div className="button-wrapper">
          <button>
            <span>Join Us</span>
            <span>X</span>
          </button>
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
            <p>Three years back, five mavericks saw a dream to take a journey off-beat from what they were doing and jumped into a pool of creating stories by capturing moments. One day while sitting in the backyard, one of the stakeholders, also a passionate photographer, pondered the endless hurdles in the business world of photography. Whether it was about finding the best photographers from different corners of the country or picking the apt one according to your style. CamHire is an endeavour to overcome all those barriers and fulfil that very motive of photography. We help photographers and freelancers connect with clients all over Indiato provide desired services. CamHire started off as an expression of...</p>
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
    </div>
  );

}

export default Home;
