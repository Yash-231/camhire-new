import React from 'react';
import "./css/Gallery.css";
import img1 from "../images/gallery-img-1.jpg";
import img2 from "../images/gallery-img-2.jpg";
import img3 from "../images/gallery-img-3.jpg";
import img4 from "../images/gallery-img-4.jpg";
import img5 from "../images/gallery-img-5.jpg";
import img6 from "../images/gallery-img-6.jpg";
import img7 from "../images/gallery-img-7.jpg";

const Gallery = () => {
  
    return (
        <div id='gallery'>
          <div className='gallery-title'>
            <h1>Gallery</h1>
          </div>
          <div className="gallery-container">
            <div className='row'>
              <img src={img1} alt="gallery tile" style={{ width: "40%" }} />
              <img src={img2} alt="gallery tile" style={{ width: "60%" }} />
            </div>
            <div className="row">
              <span>Welcome</span>
              <img src={img3} alt="gallery tile" />
              <img src={img4} alt="gallery tile" />
              <span>to a larger-than-life experience with us</span>
            </div>
            <div className='row'>
              <img src={img5} alt="gallery tile" style={{ width: "40%" }} />
              <img src={img6} alt="gallery tile" style={{ width: "60%" }} />
            </div>
            <div className="row">
              <img src={img7} alt="gallery tile" />
            </div>
          </div>
        </div>
    )
}

export default Gallery