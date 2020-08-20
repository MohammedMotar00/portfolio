import React, { useState, useRef, useEffect } from "react";

// import "./App.css";
import "./main.css";

import Home from "./Comps/Home/Home";
import About from "./Comps/About/About";
import Skills from "./Comps/Skills/Skills";
import Portfolio from "./Comps/Portfolio/Portfolio";
import Contact from "./Comps/Contact/Contact";
import Footer from "./Comps/Footer/Footer";

import MenuIcon from "@material-ui/icons/Menu";

function App() {
  // Toggle
  const [toggle, setToggle] = useState(false);

  // State
  const [startActive, setStartActive] = useState("active");
  const [homeActive, setHomeActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [skillsActive, setSkillsActive] = useState(false);
  const [portfolioActive, setPortfolioActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <>
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="#" className="nav__logo">
              Mohammed Motar
            </a>
          </div>

          <div className={`nav__menu ${toggle && "show"}`} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#home"
                  className={`nav__link ${startActive} ${
                    homeActive && "active"
                  }`}
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  onClick={closeMenu}
                  href="#about"
                  className={`nav__link ${aboutActive && "active"}`}
                >
                  About
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#skills"
                  className={`nav__link ${skillsActive && "active"}`}
                  onClick={closeMenu}
                >
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#portfolio"
                  className={`nav__link ${portfolioActive && "active"}`}
                  onClick={closeMenu}
                >
                  Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#contact"
                  className={`nav__link ${contactActive && "active"}`}
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div onClick={handleToggle} className="nav__toggle" id="nav-toggle">
            <MenuIcon />
          </div>
        </nav>
      </header>
      <main>
        <Home setStartActive={setStartActive} setHomeActive={setHomeActive} />
        <About setAboutActive={setAboutActive} />
        <Skills setSkillsActive={setSkillsActive} />
        <Portfolio setPortfolioActive={setPortfolioActive} />
        <Contact setContactActive={setContactActive} />
      </main>
      <Footer />
    </>
  );
}

export default App;
