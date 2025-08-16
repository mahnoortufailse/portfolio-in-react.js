/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

import image3 from "../../public/images/image3.png";
import SocialLinks from "./SocialLinks";

const Home = () => {
  const texts = ["WEB DEVELOPER", "WEB DESIGNER"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Mahnoor_Tufail_CV.pdf"; 
    link.download = "Mahnoor_Tufail_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && charIndex < texts[textIndex].length) {
        setDisplayText(prev => prev + texts[textIndex].charAt(charIndex));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === texts[textIndex].length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section id="home">
      <div className="main-container mt-20">
        <div className="image" data-aos="zoom-out" data-aos-duration="3000">
          <img src={image3} alt="Mahnoor" />
        </div>
        <div className="content">
          <h1 data-aos="fade-left" data-aos-duration="1500">
            Hey, I'm <span>Mahnoor Tufail</span>
          </h1>
          <div className="typewriter" data-aos="fade-right">
            I'm a <span className="typewriter-text">{displayText}</span>|
          </div>
          <p data-aos="flip-down">
            Skilled in React JS, Node.js, Express, and MongoDB, with experience in building full-stack web applications, authentication, API integration, and responsive UI development.</p>
          {/* Social Links with Icons */}
          <SocialLinks/>
          <div className="btn" data-aos="zoom-in">
            <button onClick={handleDownloadCV}>Download Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
