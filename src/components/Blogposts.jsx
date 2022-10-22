import React from 'react';
import './Blogposts.css';
import { useLocation } from 'react-router-dom';

const Blogposts = () => {
    const location = useLocation();
    
  return (
    <>
    <h1 className='heading'>Blogs</h1>
    <div className="container-outer">
        <img src={location.state.imageUrl} className="img-fluid" alt="blog"/>
        <div className="container-inner">
            <h2 className='pt-5 text-start'>{location.state.title}</h2>
            <p className='pt-4 pb-5'>{location.state.body}</p>
        </div>
        <img src={location.state.imageUrl} className="img-fluid" alt="blog"/>
    </div>
    </>
  )
}

export default Blogposts