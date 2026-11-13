import './index.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


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
      <div className="App bg-black w-full min-h-screen flex flex-col overflow-x-hidden">
        <Navbar setActiveSection={setActiveSection} activeSection={activeSection}/>

        <main className="w-full flex-1">
          {renderSection()}
        </main>
        <Footer />
      </div>
    );
}

export default App;
