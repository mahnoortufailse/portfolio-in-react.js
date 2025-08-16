import image3 from "../../public/images/bg.jpg"; // Replace with the actual image path
import SocialLinks from "./SocialLinks";

const AboutUs = () => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Mahnoor_Tufail_CV.pdf"; 
    link.download = "Mahnoor_Tufail_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <section id="about">
      <div className="main-container my-20 pt-14">
        <div className="content">
          <h1 data-aos="fade-left" data-aos-duration="1500" className="text-8xl">
            About<span>Me</span>
          </h1>
          <p data-aos="fade-up" data-aos-duration="1500">
            I am <span className="font-bold aboutName">Mahnoor Tufail</span>, a
            passionate <span className="font-bold">Software Engineering</span>{" "}
            student dedicated to{" "}
            <span className="font-bold aboutName">full-stack web development</span>.
            With expertise in React JS, Node.js, Express, and MongoDB, I specialize 
            in creating dynamic and efficient web applications. I have completed 
            multiple internships and worked on real-world projects to sharpen my skills.
          </p>
          <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            My goal is to build{" "}
            <span className="font-bold">
              scalable and high-performance web applications
            </span>{" "}
            with a focus on user experience, responsiveness, and security. I am
            always eager to learn new technologies and stay up-to-date with
            industry trends.
          </p>
          {/* Social Links with Icons */}
          <SocialLinks />

          {/* Download CV Button */}
          <div className="btn" data-aos="zoom-in">
            <button onClick={handleDownloadCV}>Download Resume</button>
          </div>
        </div>
        {/* Image Section */}
        <div data-aos="fade-right" data-aos-duration="1500">
          <img src={image3} alt="About Me" className="w-full h-96" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
