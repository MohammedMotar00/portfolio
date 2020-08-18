import React, { useState, useEffect, useRef } from "react";

import ScrollReveal from "scrollreveal";

import myImg from "../../Img/portfolio1.png";

import "./herader.css";

function Header() {
  // State
  const [startActive, setStartActive] = useState("active");
  const [homeActive, setHomeActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [skillsActive, setSkillsActive] = useState(false);
  const [portfolioActive, setPortfolioActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  // Ref
  const homeRef = useRef(null);
  const homeTitle = useRef(null);
  const homeScroll = useRef(null);
  const homeImg = useRef(null);

  // Toggle
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  // Home check
  const homeCheck = () => {
    let home = homeRef.current;
    const sectionHeightHome = home.offsetHeight;
    const sectionTopHome = home.offsetTop - 50;

    if (
      window.scrollY > sectionTopHome &&
      window.scrollY <= sectionTopHome + sectionHeightHome
    ) {
      setHomeActive(true);
    } else {
      setHomeActive(false);
      setStartActive(null);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", homeCheck);

    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(homeTitle.current, {});
    sr.reveal(homeScroll.current, { delay: 400 });
    sr.reveal(homeImg.current, { origin: "right", delay: 400 });
  }, []);

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
                  class={`nav__link ${portfolioActive && "active"}`}
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
            {/* <i class="bx bx-menu"></i> */}x
          </div>
        </nav>
      </header>
      {/* <!-- Home --> */}
      <section className="home" id="home" ref={homeRef}>
        <div className="home__container bg-grid">
          <h1 ref={homeTitle} class="home__title">
            <span>Mohammed</span>
            <br />
            Motar
          </h1>

          <div ref={homeScroll} className="home__scroll">
            <a href="#about" className="home__scroll-link">
              <i className="bx bx-up-arrow-alt"></i>Scroll down
            </a>
          </div>

          <img src={myImg} alt="" className="home__img" ref={homeImg} />
        </div>
      </section>
    </>
  );
}

export default Header;
