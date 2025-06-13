import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import "./App.css";
import About from "./pages/about_me/aboutMe";
import Education from "./pages/education/education";
import Experience from "./pages/experience/experience";
import Skills from "./pages/skill/skill.js";
import Certificates from "./pages/certificate/certificate.js";

function App() {
  return (
    <div>
      <Router className="app-container">
        <Routes className="main-content">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
