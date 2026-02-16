import React from "react";
import "./Slide.css";
import sliderImg from "../../assets/slider-image.png";

const Slide = ({ text, name, position, image }) => {
  return (
    <div className="slide-container">
      <img src={sliderImg} alt="slider-img" className="slider-img" />
      <p>{text}</p>

      <div className="news-author">
        <div className="news-author-img">
          <img src={image} className="news-author-image" alt={name} />
        </div>
        <div className="author-description">
          <h4>{name}</h4>
          <span style={{ color: "#E5E5E5" }}>
            {position}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
