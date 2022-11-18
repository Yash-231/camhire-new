import React from 'react';
// import mainLogo from '../images/camhire_logo.png';
import shortVid from '../video/CamHire_vid.mp4';
import data from '../data/data.json';
import about_photo from '../images/landing_page.jpg';
// import Pagination from './Pagination';
// import Card from './Card';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick';
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




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faCheck, faCamera, faMugHot } from '@fortawesome/free-solid-svg-icons';

console.log(data.Photographers);
const Home = () => {




    return (
        <div className="wrapper">
            <div className='header'>
                <div className='left_quote'>
                    <h2>Endless Possibilities with Camera just a Click Away</h2>
                    <h3>We are the string which enables you to  connects the best photographers in easiest way possible</h3>
                    <button >Load more</button>

                </div>
                <div className='right'>
                    <div className='join_button'>
                        <button>join us</button>
                    </div>
                    <div className='video'>
                        <video autoPlay loop muted className='video'>
                            <source src={shortVid} type="video/mp4" />
                        </video>

                    </div>
                </div>

            </div>
            <div className='features' >
                <div className='heading'>
                    <h1> WHAT WE HAVE TO OFFER</h1>
                </div>
                <div className='row' >
                    {data.Features
                        ? data.Features.map((d, i) => (
                            <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                                {' '}
                                <h3 className="features-title" >{d.title}</h3>
                                {' '}
                                <div style={{ borderRadius: "100%", background: "#373737", width: "2em", height: "2em", margin: "auto" }}>
                                    <FontAwesomeIcon icon={i === 0 ? faDollarSign : i === 1 ? faCheck : i === 2 ? faCamera : faMugHot} style={{ verticalAlign: "-0.34em" }} />
                                </div>
                                <p>{d.text}</p>
                            </div>
                        ))
                        :
                        'loading'
                    }
                </div>
            </div>
            <hr />
            <div className='about_us' >
                <h1> ABOUT US</h1>
                <div className='about_para' >
                    <h6> {
                        data.About.paragraph
                    }</h6>

                </div>
                <div className='about_image' >

                    <img src={about_photo} style={{ height: '250px' }} alt="/" />
                </div>
            </div>
            <hr />
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
            <div className='contact'>
                {/* <div className='contact_left'>
                    <h1>Contact Us</h1>
                </div>
                <div className='contact right'></div> */}
            </div>
        </div>

    )
}

export default Home