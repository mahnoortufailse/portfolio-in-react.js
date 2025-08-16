import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactUs = () => {
  const formRef = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_j5e6ymh", 
        "template_fqfrae4", 
        formRef.current,
        "FT0eM3e95JU1Guiy8" 
    
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setIsSent(true);
          setLoading(false);
          formRef.current.reset(); // Reset the form after submission
        },
        (error) => {
          console.log("Error:", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-black via-transparent to-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold tracking-wide text-white drop-shadow-lg">
            Contact <span className="contactMetext">Me</span>
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Feel free to reach out for any project inquiries or collaborations.
          </p>
        </div>
        {/* Contact Container */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              { icon: FaPhone, text: "+123 456 7890" },
              { icon: FaEnvelope, text: "mahnoortufail@example.com" },
              { icon: FaMapMarkerAlt, text: "Islamabad, Pakistan" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4 text-lg transition group">
                <div className="p-4 bg-green-400/30 rounded-full shadow-lg backdrop-blur-md group-hover:scale-110 transition">
                  <item.icon className="text-white text-xl" />
                </div>
                <p className="hover:text-green-400 cursor-pointer transition">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Glassy Contact Form */}
          <div className="bg-white/5 p-8 rounded-2xl shadow-xl backdrop-blur-2xl border border-white/20">
            
            {/* Social Links */}
            <div className="flex justify-center space-x-4 mb-6">
              {[
                { icon: FaGithub, link: "https://github.com/mahnoortufailse" },
                { icon: FaLinkedin, link: "https://linkedin.com/in/mahnoortufail" },
                { icon: FaFacebook, link: "https://facebook.com/mahnoortufail" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-full shadow-md text-green-400 text-xl hover:bg-green-400 hover:text-white transition transform hover:scale-110 hover:shadow-green-400/50">
                  <social.icon />
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              {["Your Name", "Your Email"].map((placeholder, index) => (
                <input
                  key={index}
                  type={index === 1 ? "email" : "text"}
                  name={index === 1 ? "user_email" : "user_name"} // EmailJS field names
                  placeholder={placeholder}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 transition placeholder-white/60 text-white shadow-sm"
                  required
                />
              ))}
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 transition placeholder-white/60 text-white shadow-sm"
                required
              ></textarea>
              
              {/* Show Success Message */}
              {isSent && <p className="text-green-600 text-sm text-center">Message sent successfully!</p>}
              <button 
                type="submit" 
                className="btnCon" 
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactUs;
