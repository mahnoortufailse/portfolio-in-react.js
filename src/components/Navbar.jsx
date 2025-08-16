import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo flex" data-aos="zoom-in" data-aos-duration="1500">
          <span>MT.</span>
        </div>
        {/* Navigation Links */}
        <div className={`links ${menuOpen ? "active" : ""}`}>
          <a href="#home" data-aos="fade-up" onClick={() => setMenuOpen(false)}>HOME</a>
          <a href="#about" data-aos="fade-up" onClick={() => setMenuOpen(false)}>ABOUT</a>
          <a href="#skills" data-aos="fade-up" onClick={() => setMenuOpen(false)}>SKILLS</a>
          <a href="#projects" data-aos="fade-up" onClick={() => setMenuOpen(false)}>PROJECTS</a>
          <a href="#services" data-aos="fade-up" onClick={() => setMenuOpen(false)}>SERVICES</a>
          <a href="#contact" data-aos="fade-up"  onClick={() => setMenuOpen(false)}>CONTACT</a>
        </div>
        {/* Hamburger Menu */}
        <div className="hamburg" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
