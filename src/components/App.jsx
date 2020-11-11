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
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  const [language, setLanguage] = useState(ca[1].substring(ca[1].indexOf("=") + 1, ca[1].length))

  function languageChange(newLanguage){
    if(newLanguage == "EN") {
      document.cookie = "language=EN; path=/";
    } else {
      document.cookie = "language=PT; path=/";
    }
    
    setLanguage(newLanguage)
  }

  return (
    
    <div>
      <BackToTop />
      <Navbar callback={languageChange} language={language}/>
      <Intro language={language} />
      <About language={language}/>
      <SkillSet language={language}/>
      <AcademicPath language={language}/>
      <ProfessionalPath language={language}/>
      <Portfolio language={language} />
      <CV language={language}/>
      <Contact language={language} />
      <Preloader />
    </div>
  );
}

export default App;
