
import { FaCode, FaLaptopCode, FaDatabase, FaPalette, FaShieldAlt, FaMobileAlt } from "react-icons/fa";

const services = [
    {
      id: 1,
      title: "Full-Stack Development",
      description: "Building scalable and efficient web applications using React, Node.js, and MongoDB.",
      icon: <FaCode />,
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Creating responsive and modern UI designs with React JS, HTML, CSS, and JavaScript.",
      icon: <FaLaptopCode />,
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Developing secure and optimized backend services with Node.js and Express.",
      icon: <FaDatabase />,
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Designing visually appealing and user-friendly web interfaces.",
      icon: <FaPalette />,
    },
    {
      id: 5,
      title: "Authentication & Security",
      description: "Implementing user authentication and security measures for applications.",
      icon: <FaShieldAlt />,
    },
    {
      id: 6,
      title: "Mobile Responsive Design",
      description: "Ensuring seamless experiences across all devices with responsive layouts.",
      icon: <FaMobileAlt />,
    },
  ];
  
  const Services = () => {
    return (
      <section id="services">
        <div className="main-container flex flex-col items-center my-28 pt-10">
          <div className="content text-center" data-aos="fade-up" data-aos-duration="1500">
            <h1>
              My <span>Services</span>
            </h1>
            <p>
              Here are the services I offer, from frontend and backend development to UI/UX design.
            </p>
          </div>
  
          <div className="services-container">
            {services.map((service) => (
              <div className="service-card" key={service.id} data-aos="zoom-in" data-aos-duration="1500">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  
