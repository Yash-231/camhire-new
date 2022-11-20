import React from "react";
// import mainLogo from '../images/camhire_logo.png';
//  import icon1 from "../images/icon1.png";
import icon3 from "../images/cam_icon.jpg";
// import mainLogo from "../images/camhire_logo.png";
import shortVid from "../video/CamHire_vid.mp4";
import data from "../data/data.json";
import about_photo from "../images/landing_page.jpg";
import "./Home.css";
// import Pagination from './Pagination';
// import Card from './Card';
// import Slider from 'react-slick';

import Slider from './Slider';
import Blogs from './Blogs'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../images/gallery-img-1.jpg";
import img2 from "../images/gallery-img-2.jpg";
import img3 from "../images/gallery-img-3.jpg";
import img4 from "../images/gallery-img-4.jpg";
import img5 from "../images/gallery-img-5.jpg";
import img6 from "../images/gallery-img-6.jpg";
import img7 from "../images/gallery-img-7.jpg";

import "./Home.css";
// import {
//     BrowserRouter,
//     Link,
//     Routes,
//     Route,
// } from "react-router-dom";
// import Blogs from './Blogs';




import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faCheck,
  faCamera,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";
console.log(data.Photographers);
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
        </div>
        <div className="back"></div>
        <div className="features__container">
          <h1 className="features__heading">WHAT WE HAVE TO OFFER</h1>

          <div className="features">
            {data.Features
              ? data.Features.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="feature">
                    <h4 className="feature__title">{d.title}</h4>
                    <div className="icon">
                      <div
                        style={{
                          borderRadius: "100%",
                          background: "#373737",
                          width: "2em",
                          height: "2em",
                          margin: "auto",
                          marginBottom: "-20px",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={
                            i === 0
                              ? faDollarSign
                              : i === 1
                              ? faCheck
                              : i === 2
                              ? faCamera
                              : faMugHot
                          }
                          style={{ verticalAlign: "-0.34em" }}
                        />
                      </div>
                    </div>

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
        
            <div className='photographers' >
                <h1 className='heading'>Our Photographers</h1>
                <Slider />
            </div>
            <hr />
            <Blogs />
            <hr />
            <div id='gallery'>
                <div className='gallery-title'>
                    <h1>Gallery</h1>
                </div>
                <div className="gallery-container">
                    <div className='row'>
                        <img src={img1} alt="" style={{ width: "40%" }} />
                        <img src={img2} alt="" style={{ width: "60%" }} />
                    </div>
                    <div className="row">
                        <span>Welcome</span>
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <span>to a larger-than-life experience with us</span>
                    </div>
                    <div className='row'>
                        <img src={img5} alt="" style={{ width: "40%" }} />
                        <img src={img6} alt="" style={{ width: "60%" }} />
                    </div>
                    <div className="row">
                        <img src={img7} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
  );

}

export default Home;
