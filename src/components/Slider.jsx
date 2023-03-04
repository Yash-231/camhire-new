import React, { useState } from "react";
import './css/Slider.css';
import data from "../data/data.json";

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
    // <div className="photographers">
    //   <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" onClick={handlePrevious}>
    //     <path d="M20 42.2 1.8 24 20 5.8l1.55 1.45L4.75 24l16.8 16.65Z" fill="#FFFFFF" />
    //   </svg>
    //   {current.map((index, i) => {
    //     return (
    //       (index >= 0 && index < total)
    //         ?
    //         <div key={i} className="photographer-card">
    //           <img src={data.Photographers[index].imageUrl} alt={data.Photographers[index].title} style={current[1] === index ? { height: "70vh" } : { height: "45vh" }} />
    //           {
    //             (current[1] === index)
    //             &&
    //             <span className="photographer-card-title">
    //               {data.Photographers[index].title.toUpperCase()}
    //             </span>
    //           }
    //         </div>
    //         :
    //         <div key={i} className="photographer-card"></div>
    //     );
    //   })}
    //   <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" onClick={handleNext}>
    //     <path d="m15.8 42.15-1.55-1.5 16.8-16.7L14.25 7.2l1.55-1.45L34 23.95Z" fill="#FFFFFF" />
    //   </svg>
    // </div>
    <div className="photographers">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" onClick={handlePrevious}>
        <path d="M20 42.2 1.8 24 20 5.8l1.55 1.45L4.75 24l16.8 16.65Z" fill="#FFFFFF" />
      </svg>
      <div className="photographer-card" style={{ display: current[0] < 0 ? "block" : "none" }}></div>
      {data.Photographers.map((d, i) => {
        return (
          <div key={i} className={`photographer-card ${current.includes(i) ? "active" : ""} ${current[1]===i ? "center" : ""}`} style={{ display: current.includes(i) ? "block" : "none" }}>
            <img src={d.imageUrl} alt={d.title} />
            <span className="photographer-card-title" style={{ display: current[1] === i ? "inline-flex" : "none" }}>
              {d.title.toUpperCase()}
            </span>
          </div>
        );
      })}
      <div className="photographer-card" style={{ display: current[2] > total - 1 ? "block" : "none" }}></div>
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" onClick={handleNext}>
        <path d="m15.8 42.15-1.55-1.5 16.8-16.7L14.25 7.2l1.55-1.45L34 23.95Z" fill="#FFFFFF" />
      </svg>
    </div>
  )
}

export default Sliders