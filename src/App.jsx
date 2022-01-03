import TopBar from "./components/topbar/TopBar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import AboutMe from "./components/aboutMe/AboutMe";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import './App.scss'
import { useState } from 'react';

function App() {

  const [ menuOpen, setMenuOpen ] = useState(false);

  return (
    <div className="App">
      <TopBar 
        menuOpen={ menuOpen } 
        setMenuOpen={ setMenuOpen }
      />
      <Menu 
        menuOpen={ menuOpen } 
        setMenuOpen={ setMenuOpen }
      />
      <div className="sections">
        <Intro />
        <AboutMe />
        <Skills />
        {/* <Portfolio /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
