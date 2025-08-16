import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
const SocialLinks = () => {
  return (
    <>
      {/* Social Links with Icons */}
      <div className="social-links">
        <a
          href="#"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="1300"
        >
          <FaGithub className="social-icon" />
        </a>
        <a
          href="#"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="1400"
        >
          <FaFacebook className="social-icon" />
        </a>
        <a
          href="#"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="1500"
        >
          <FaLinkedin className="social-icon" />
        </a>
        <a
          href="#"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="1600"
        >
          <FaTwitter className="social-icon" />
        </a>
      </div>
    </>
  );
};

export default SocialLinks;
