import React, {useState} from "react";
//import components
import Navbar from "./navbar.jsx";
import Intro from "./intro.jsx";
import About from "./about.jsx";
import Portfolio from "./portfolio.jsx";
import Contact from "./contact.jsx";
import BackToTop from "./back-top.jsx";
import Preloader from "./preloader";
import ProfessionalPath from "./professional_path";
import AcademicPath from "./academic_path";
import SkillSet from "./skillset";
import CV from "./cv";

function App() {

  return (
    <div>
      <BackToTop />
      <Navbar />
      <Intro />
      <About />
      <SkillSet />
      <AcademicPath />
      <ProfessionalPath />
      <Portfolio />
      <CV />
      <Contact />
      <Preloader />
    </div>
  );
}

export default App;
