import React from "react";
import Slider from "react-slick";
import "./certificate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cert1 from "../../assets/certificates/cert1.png";
import cert2 from "../../assets/certificates/cert2.png";
import cert3 from "../../assets/certificates/cert3.png";
// Add more as needed...

const certificateData = [
  { name: "Python for Everybody", image: cert1 },
  { name: "Big Data Basics", image: cert2 },
  { name: "Cloud Computing", image: cert3 },
  // Add more certificates here
];

const Certificates = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="certificates-page">
      <h1 className="certificates-title">My Certificates</h1>
      <div className="creative-section">
        <Slider {...settings} className="certificates-slider">
        {certificateData.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <img
              src={cert.image}
              alt={cert.name}
              className="certificate-image"
            />
            <h3 className="certificate-name">{cert.name}</h3>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Certificates;
