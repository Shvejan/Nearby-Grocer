import React from "react";
import { Slide } from "react-slideshow-image";
import b1 from "./images/banner1.png";
import b2 from "./images/banner2.png";
import b3 from "./images/banner3.png";

const slideImages = [b1, b1, b1];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const Slides = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <img src={b1} />
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <img src={b2} />
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <img src={b3} />
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default Slides;
