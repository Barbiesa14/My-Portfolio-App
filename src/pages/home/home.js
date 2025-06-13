import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";
import profileImg from "../../assets/profile.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage">
      {/* Left Section - Profile Picture */}

      {/* Center Section - Text and Icons */}
      <div className="center-section section-box">
        <div className="image-sec">
          <div className="profile-frame">
            <img src={profileImg} alt="Profile" className="profile-img" />
          </div>
        </div>
        <div className="text-content">
          <h1>
            <span className="first-name">Samyuktha</span>
            <br />
            <span className="last-name">Raghavi S R</span>
          </h1>
          <p className="role">Software Engineer</p>

          <div className="icons">
            {/* Gmail compose link */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=samyuktharaghavisr14@gmail.com"
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Send Email"
            >
              <FaEnvelope />
            </a>

            {/* Phone dialer link (works on phones) */}
            <a href="tel:+919629322047" className="icon" title="Call">
              <FaPhone />
            </a>

            {/* LinkedIn profile */}
            <a
              href="https://www.linkedin.com/in/samyuktha-raghavi-s-r-020b30242/"
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      {/* Right Section - Navigation Icons */}
      <div className="right-section">
        <div className="nav-icon">
          <Link to="/about">
            <FaUser />
            <span>About</span>
          </Link>
        </div>

        <div className="nav-icon">
          <Link to="/education">
            <FaGraduationCap />
            <span>Education</span>
          </Link>
        </div>

        <div className="nav-icon">
          <Link to="/experience">
            <FaBriefcase />
            <span>Experience</span>
          </Link>
        </div>

        <div className="nav-icon">
          <Link to="/skills">
            <FaCode />
            <span>Skills</span>
          </Link>
        </div>

        <div className="nav-icon">
          <Link to="/certificates">
            <FontAwesomeIcon icon={faAward} />
            <span>Certificate</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
