import React from 'react';
import './css/Features.css';
import data from "../data/data.json";
import centerBackground from '../images/camera.png';
import sideBackground from '../images/wing.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faCheck, faCamera, faMugHot } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <div id="features">
      <h1>What We Have To Offer</h1>
      <div className="features-content" style={{ backgroundImage: `url(${sideBackground}), url(${centerBackground}), url(${sideBackground})` }}>
        {data.Features
          ? data.Features.map((d, i) => {
            return (
              <div key={i} className='content-block'>
                <div className='icon-wrapper'>
                  <FontAwesomeIcon icon={i === 0 ? faDollarSign : i === 1 ? faCheck : i === 2 ? faCamera : faMugHot} />
                </div>
                <h2>{d.title}</h2>
                <span>{d.text}</span>
              </div>
            )
          })
          : "Loading"}
      </div>
    </div>
  )
}

export default Features