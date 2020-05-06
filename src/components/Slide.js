import React from "react";
import { Slide } from "react-slideshow-image";

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

const Slides = (props) => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div>
            <img src={props.banners[0]} />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={props.banners[1]} />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={props.banners[2]} />
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default Slides;
