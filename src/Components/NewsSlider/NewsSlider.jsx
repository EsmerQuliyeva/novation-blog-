import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./NewsSlider.css";
import Slide from "../Slide/Slide";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import author1 from "../../assets/author.jpg";
import author2 from "../../assets/author1.webp";
import author3 from "../../assets/author2.jfif";
import author4 from "../../assets/author3.jfif";
import author5 from "../../assets/author4.jpg";
import author6 from "../../assets/author5.jfif";

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <FiChevronRight size={22} />
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <FiChevronLeft size={22} />
    </div>
  );
};

const reviews = [
  {
    text: "Your company’s innovative approach and use of modern technologies truly impressed us. We wish you continued success!",
    name: "Orxan Babayev",
    position: "Principal Software Engineer",
    image: author1,
  },
  {
    text: "Working with your team has been a fantastic experience. The professionalism you demonstrated exceeded our expectations.",
    name: "Akif Aliyev",
    position: "Frontend Developer",
    image: author2,
  },
  {
    text: "The quality of service and attention to detail were outstanding. Your solutions helped us optimize our processes and achieve better results.",
    name: "Murad Karimov",
    position: "Backend Engineer",
    image: author3,
  },
  {
    text: "We truly appreciate your dedication and commitment to delivering excellence. The results positively impacted our business growth.",
    name: "Nigar Mammadova",
    position: "UI/UX Designer",
    image: author4,
  },
  {
    text: "Your forward-thinking mindset and creative problem-solving skills set you apart. The collaboration was smooth and productive.",
    name: "Gunay Huseynova",
    position: "Software Architect",
    image: author5,
  },
  {
    text: "From start to finish, the entire process was handled with professionalism and care. Highly recommended!",
    name: "Kenan Ibrahimov",
    position: "Product Manager",
    image: author6,
  },
];

const NewsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // still ok
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1175,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 810,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="news-slider-container">
      <h2>
        Shape the Future
        <br /> With Your Ideas!
      </h2>

      <Slider {...settings}>
        {reviews.map((review, i) => (
          <Slide
            key={i}
            text={review.text}
            name={review.name}
            position={review.position}
            image={review.image}
          />
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;

