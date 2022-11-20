import React, { useState } from "react";
import data from "../data/data.json";
import './Slider.css';

const Sliders = () => {

  const [current, setCurrent] = useState([0, 1, 2]);
  const total = data.Photographers.length;

  const handlePrevious = () => {
    if (current[0] > -1) {
      setCurrent(current.map((element) => {
        return element - 1;
      }))
    }
  };

  const handleNext = () => {
    if (current[2] < total) {
      setCurrent(current.map((element) => {
        return element + 1;
      }))
    }
  };

  return (
    <div id="photographers">
      <span onClick={handlePrevious} className="material-symbols-outlined">arrow_back_ios_new</span>
      {current.map((index) => {
        return (
          (index >= 0 && index < total)
            ?
            <div key={index} className="photographer-card" style={ current[1] === index ? { height: "70vh", backgroundImage: `url(${data.Photographers[index].imageUrl})` } : { backgroundImage: `url(${data.Photographers[index].imageUrl})` }}>
              {
                (current[1] === index)
                &&
                <span className="photographer-card-title">
                  {data.Photographers[index].title.toUpperCase()}
                </span>
              }
            </div>
            :
            <div key={index} className="photographer-card"></div>
        );
      })}
      <span onClick={handleNext} className="material-symbols-outlined">arrow_forward_ios</span>
    </div>
  )
}

export default Sliders

