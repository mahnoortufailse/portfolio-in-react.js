import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaPython, FaJava } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold uppercase tracking-wide">
            My <span className="contactMetext">Skills</span>
          </h1>
          <p className="mt-3 text-lg text-gray-400 max-w-3xl mx-auto">
            I specialize in full-stack development, creating scalable applications with React, Node.js, and MongoDB.
          </p>
        </div>
        {/* Skills Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { icon: FaHtml5, name: "HTML5" },
            { icon: FaCss3Alt, name: "CSS3" },
            { icon: FaJs, name: "JavaScript" },
            { icon: FaReact, name: "React JS" },
            { icon: FaNodeJs, name: "Node.js" },
            { icon: FaDatabase, name: "MongoDB" },
            { icon: FaPython, name: "Python" },
            { icon: FaJava, name: "Java" },
            
          ].map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-[#161b22] backdrop-blur-lg border border-gray-700 rounded-lg shadow-md flex flex-col items-center transition duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="p-3 bg-[#00ff88]/20 rounded-full shadow-md mb-3">
                <skill.icon className="text-[#00ff88] text-3xl" />
              </div>
              {/* Skill Name */}
              <p className="text-md font-semibold tracking-wide text-gray-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
