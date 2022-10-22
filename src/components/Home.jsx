import React from "react";
//  import icon1 from "../images/icon1.png";
// import mainLogo from "../images/camhire_logo.png";
import shortVid from "../video/CamHire_vid.mp4";
import data from "../data/data.json";
import about_photo from "../images/landing_page.jpg";
import "./Home.css";
import { FaCheck } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="Home-container">
      <div className="wrapper">
        <div className="join-us">
          <div>
            <button className="join-us-button">Join Us</button>
            <button className="close-button" type="button">
              X
            </button>
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
              <video autoPlay loop muted className="video__player">
                <source src={shortVid} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="back"></div>
        <div className="features__container">
          <h1 className="features__heading">WHAT WE HAVE TO OFFER</h1>
          <div className="features">
            {data.Features
              ? data.Features.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="feature">
                    <h4 className="feature__title">{d.title}</h4>
                    {/* <img src="Ellipse7.png" alt=""></img> */}
                    {/* <FontAwesomeIcon icon= /> */}
                  {d.icon}
        
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading"}
          </div>
        </div>
        <div className="about">
          <h1 className="features__heading">ABOUT US</h1>
        </div>
        <div className="about-us">
          <p className="about-us__para">{data.About.paragraph}</p>
          <div className="about-us__image">
            <img
              src={about_photo}
              style={{ width: "600px", height: "450px" }}
              alt="/"
            />
          </div>
        </div>

        <div className="photographers">
          <h1 className="photographers__image">Our Photographers</h1>
          <div className="photographers__images"></div>
        </div>
        <div className="blogs">
          <h1>Blogs</h1>
          <div className="row1"></div>
          <div className="row2">
            <div className="left2"></div>
            <div className="right2"></div>
          </div>
          <div className="row3"></div>
        </div>
        <div className="gallery">
          <h1>Gallery</h1>
        </div>
        <div className="contact">
          <div className="contact_left">
            <h1>Contact Us</h1>
          </div>
          <div className="contact right"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
