import React from 'react';
import './css/Blogposts.css';
import { useLocation } from 'react-router-dom';

const Blogposts = () => {
  
  const location = useLocation();

  return (
    <div id="blogposts">
      <h1>Blogs</h1>
      <div className="container-outer">
        <img src={location.state.imageUrl} alt="blog" />
        <div className="container-inner">
          <h2>{location.state.title}</h2>
          <p>{location.state.body}</p>
        </div>
        <img src={location.state.imageUrl} alt="blog" />
      </div>
    </div>
  )
}

export default Blogposts