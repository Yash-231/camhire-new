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
import 'bootstrap/dist/css/bootstrap.min.css'

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
        <div classname="wrapper">
            <div classname='header'>
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

            <div className='photographers' >
                <h1>Our Photographers</h1>



                <Slider />


            </div>
            <div className='blogs' >
                <h1> Blogs</h1>


                {/* <div className='row1' ></div>
                <div className='row2' >
                    <div className='left2'></div>
                    <div className='right2'></div>
                </div>
                <div className='row3'>

                </div> */}

            </div>
            <div className='gallery'>
                <h1 id='gallery' >Gallery</h1>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row row justify-content-start ">


                            <img className="col-5" id='gphoto1' src={data.Photographers[0].imageUrl} alt="" />



                            <img className='col-7' id='gphoto2' src={data.Photographers[1].imageUrl} alt="" />

                        </div>
                        <div className="row">
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-8">
                                        <h2 id='welcome' >welcome</h2>
                                    </div>
                                    <img className="col-4  " id='gphoto3' src={data.Photographers[2].imageUrl} alt="" />
                                    <div id='quotecol' className="col-12 ">
                                        <p id='quote'>to a larger-than-life experience with us</p>                                    </div>
                                </div>
                            </div>
                            <img className="col-4" id='gphoto4' src={data.Photographers[3].imageUrl} alt="" />

                        </div>


                        <div className="row justify-content-end">

                            <img className="col-7 " id='gphoto5' src={data.Photographers[4].imageUrl} alt="" />
                        </div>
                        <div className="row row justify-content-start">
                            <img className="col-12 " id='gphoto6' src={data.Photographers[6].imageUrl} alt="" />

                        </div>
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