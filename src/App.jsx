import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Services from "./components/Services";

import "./App.css";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({ offset: 0 });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Skills />
      <Project />
      <Services />
      <ContactUs/>
      <Footer/>
    </>
  );
};

export default App;
