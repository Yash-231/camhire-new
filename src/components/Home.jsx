import React, { useState, useEffect } from 'react';
import mainLogo from '../images/camhire_logo.png';
import shortVid from '../video/CamHire_vid.mp4';
import data from '../data/data.json';
import about_photo from '../images/landing_page.jpg';
import Pagination from './Pagination';


import "./Home.css";
import {
    BrowserRouter,
    Link,
    Routes,
    Route,
} from "react-router-dom";
import Blogs from './Blogs';

console.log(data.Photographers);
const Home = () => {

    const [showing, setIsShowing] = useState(true);
    const [photographerIndex, setPhotographerIndex] = useState(-1);
    const [productDataList, setProductDataList] = useState([]);
    const resetStatus = () => {
        setIsShowing(true);
        setPhotographerIndex(-1)
    }
    const onChangePage = (pageOfItems) => {
        setProductDataList(pageOfItems)
    }

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
                                <i className={d.icon}></i>
                                <p >{d.text}</p>
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
                <>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-12"></div>
                            <div className="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-12">
                                

                                <Pagination className="pg-style"
                                    pageSize={3}
                                    items={data.Photographers.data}
                                    onChangePage={onChangePage}
                                />
                            </div>
                            <div className="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-12"></div>

                        </div>
                    </div>
                </>
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
                <h1>Gallery</h1>

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