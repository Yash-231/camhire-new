import React from "react";
import data from "../data/data.json";
// import { Card } from "react-bootstrap";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import './Slider.css'

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide:1,
    className: "center",
    centerMode: true,
    centerPadding: "0px",

    
    
    
    // autoplay: true,
    // speed: 800,
    // autoplaySpeed: 100,
    // cssEase: "linear",
  };
  const styles = {
    width: "18rem",
    margin: "10px 50px",
    
    // height:'230px',
  };
  const post = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div id="hello" className="row  ">
      <div className="col-10 mx-auto  ">
        <Slider {...settings}>
          {post.map((index) => {
            return (
              <div>
                <div class="card" style={styles}>
                  <img
                    class="card-img-top"
                    src={data.Photographers[index].imageUrl}
                    alt="photographer"
                  />

                  <div class="card-body">
                    <h5 class="card-title">
                      {data.Photographers[index].title}
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;

