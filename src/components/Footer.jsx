import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 border-t border-gray-800">
      <div className="max-w-8xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Section - Logo & Name */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold contactMetext">MT.</h2>
          <p className="text-gray-400 text-sm">
            Full Stack Developer | Passion for clean code & elegant design
          </p>
        </div>
       <div className="flex flex-col gap-5 items-end">

        {/* Middle Section - Quick Links */}
        <ul className="flex gap-6 text-base font-medium uppercase">
          {["Home", "About", "Skills", "Projects", "Services", "Contact"].map((item, index) => (
            <li key={index}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-[#077b32] transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section - Social Links */}
        <div className="flex gap-4 items-end content-end ">
          {[
            { icon: FaGithub, link: "https://github.com/mahnoortufailse" },
            { icon: FaLinkedin, link: "https://linkedin.com/in/mahnoortufail" },
            { icon: FaFacebook, link: "https://facebook.com/mahnoortufail" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-900 rounded-full shadow-md  text-xl hover:bg-[#077b32] hover:text-black transition transform hover:scale-110 contactMetext"
            >
              <social.icon />
            </a>
          ))}
        </div>
       </div>
      </div>
      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} Mahnoor Tufail. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
