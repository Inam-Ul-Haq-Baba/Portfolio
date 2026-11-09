import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";



function App() {

  const [activeSection, setActiveSection] = useState("home")

  function renderSection(){

    switch(activeSection){
      case "home":
        return <Hero />;
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Hero />
    }
  }


  return (
    <div className="App bg-black h-screen">
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
      {renderSection()}
    </div>
  );
}

export default App;
