// src/pages/About.js
import React from "react";
import "./about.css";
import profilePic from "../../assets/profile.jpg"; // Ensure this is correct

function About() {
  return (
    <div className="about-wrapper">
      {/* Left Section: Text + Image Side-by-Side */}
      <div className="about-main creative-section">
        <div className="about-info-box">
          <div className="about-left">
            <h1 className="about-title gradient-text">ABOUT ME</h1>
            <p className="about-text">
              I’m a passionate software engineer currently working at Tech Mahindra. 
               I hold a Master’s degree in Computer Applications (MCA) and specialize in application development and big data technologies. 
               I thrive on building intuitive user experiences, 
              architecting scalable systems, and turning complex data into meaningful insights. Blending creativity with engineering, 
              I constantly push myself to learn, adapt, and build products that make a difference.

            </p>
          </div>

          <div className="about-center">
            <div className="profile-frame">
              <img src={profilePic} alt="Profile" className="profile-image" />
              <div className="glow-ring"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Skills */}
      <div className="about-right creative-section">
        <div className="skill-box">
          <h3 className="category-title">Area of Interest</h3>
          <div className="skills-bubbles">
            {["Big Data", "AI", "Application Development"].map((item, i) => (
              <span className="bubble" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="skill-box">
          <h3 className="category-title">Languages Known</h3>
          <div className="skills-bubbles">
            {["English", "Tamil", "Hindi (Read & Write)"].map((lang, i) => (
              <span className="bubble" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
