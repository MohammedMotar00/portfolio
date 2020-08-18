// import React, { useState, useRef, useEffect } from "react";

// import "./App.css";

// import Home from "./Comps/Home/Home";
// import About from "./Comps/About/About";
// import Skills from "./Comps/Skills/Skills";
// import Portfolio from "./Comps/Portfolio/Portfolio";
// import Contact from "./Comps/Contact/Contact";
// import Footer from "./Comps/Footer/Footer";

// import ScrollReveal from "scrollreveal";

// function App() {
//   // Toggle
//   const [toggle, setToggle] = useState(false);

//   // State
//   const [startActive, setStartActive] = useState("active");
//   const [homeActive, setHomeActive] = useState(false);
//   const [aboutActive, setAboutActive] = useState(false);
//   const [skillsActive, setSkillsActive] = useState(false);
//   const [portfolioActive, setPortfolioActive] = useState(false);
//   const [contactActive, setContactActive] = useState(false);

//   // Ref
//   // Home
//   const homeRef = useRef(null);
//   // const homeTitle = useRef(null);
//   const homeScroll = useRef(null);
//   const homeImg = useRef(null);

//   // About
//   const aboutRef = useRef(null);
//   const aboutImg = useRef(null);
//   const aboutSubtitle = useRef(null);
//   const aboutProfession = useRef(null);
//   const aboutText = useRef(null);
//   const aboutSocial__icon1 = useRef(null);
//   const aboutSocial__icon2 = useRef(null);

//   // Skills
//   const skillsRef = useRef(null);
//   const skillsSubtitle = useRef(null);
//   const skillsName1 = useRef(null);
//   const skillsName2 = useRef(null);
//   const skillsName3 = useRef(null);
//   const skillsName4 = useRef(null);
//   const skillsName5 = useRef(null);
//   const skillsImg = useRef(null);

//   // Portfolio
//   const portfolioImg1 = useRef(null);
//   const portfolioImg2 = useRef(null);
//   const portfolioImg3 = useRef(null);
//   const portfolioImg4 = useRef(null);
//   const portfolioImg5 = useRef(null);
//   const portfolioImg6 = useRef(null);

//   // Contact
//   const contactSubtitle1 = useRef(null);
//   const contactSubtitle2 = useRef(null);
//   const contactSubtitle3 = useRef(null);
//   const contactText1 = useRef(null);
//   const contactText2 = useRef(null);
//   const contactText3 = useRef(null);
//   const contactInput1 = useRef(null);
//   const contactInput2 = useRef(null);
//   const contactInput3 = useRef(null);
//   const contactButton = useRef(null);

//   const handleToggle = () => {
//     setToggle(!toggle);
//   };

//   const closeMenu = () => {
//     setToggle(false);
//   };

//   // useEffect(() => {
//   //   const sr = ScrollReveal({
//   //     origin: "top",
//   //     distance: "80px",
//   //     duration: 2000,
//   //     reset: true,
//   //   });

//   //   // Home
//   //   sr.reveal(homeTitle.current, {});
//   //   sr.reveal(homeScroll.current, { delay: 400 });
//   //   sr.reveal(homeImg.current, { origin: "right", delay: 400 });

//   //   // About
//   //   sr.reveal(aboutImg.current, { delay: 500 });
//   //   sr.reveal(aboutSubtitle.current, { delay: 300 });
//   //   sr.reveal(aboutProfession.current, { delay: 400 });
//   //   sr.reveal(aboutText.current, { delay: 500 });
//   //   sr.reveal(aboutSocial__icon1.current, { delay: 600, interval: 200 });
//   //   sr.reveal(aboutSocial__icon2.current, { delay: 600, interval: 200 });

//   //   // SCROLL SKILLS
//   //   sr.reveal(skillsSubtitle.current, {});
//   //   sr.reveal(skillsName1.current, {
//   //     distance: "20px",
//   //     delay: 20,
//   //     interval: 100,
//   //   });
//   //   sr.reveal(skillsName2.current, {
//   //     distance: "30px",
//   //     delay: 20,
//   //     interval: 100,
//   //   });
//   //   sr.reveal(skillsName3.current, {
//   //     distance: "40px",
//   //     delay: 20,
//   //     interval: 100,
//   //   });
//   //   sr.reveal(skillsName4.current, {
//   //     distance: "40px",
//   //     delay: 20,
//   //     interval: 100,
//   //   });
//   //   sr.reveal(skillsName5.current, {
//   //     distance: "50px",
//   //     delay: 20,
//   //     interval: 100,
//   //   });
//   //   sr.reveal(skillsImg.current, { delay: 400 });

//   //   // SCROLL PORTFOLIO
//   //   sr.reveal(portfolioImg1.current, { interval: 200 });
//   //   sr.reveal(portfolioImg2.current, { interval: 200 });
//   //   sr.reveal(portfolioImg3.current, { interval: 200 });
//   //   sr.reveal(portfolioImg4.current, { interval: 200 });
//   //   sr.reveal(portfolioImg5.current, { interval: 200 });
//   //   sr.reveal(portfolioImg6.current, { interval: 200 });

//   //   // SCROLL CONTACT
//   //   sr.reveal(contactSubtitle1.current, { reset: false });
//   //   sr.reveal(contactSubtitle2.current, { reset: false });
//   //   sr.reveal(contactSubtitle3.current, { reset: false });
//   //   sr.reveal(contactText1.current, { interval: 200, reset: false });
//   //   sr.reveal(contactText2.current, { interval: 200, reset: false });
//   //   sr.reveal(contactText3.current, { interval: 200, reset: false });
//   //   sr.reveal(contactInput1.current, { delay: 400, reset: false });
//   //   sr.reveal(contactInput2.current, { delay: 400, reset: false });
//   //   sr.reveal(contactInput3.current, { delay: 400, reset: false });
//   //   sr.reveal(contactButton.current, { delay: 600, reset: false });
//   // }, []);

//   return (
//     <>
//       <header className="l-header">
//         <nav className="nav bd-grid">
//           <div>
//             <a href="#" className="nav__logo">
//               Mohammed Motar
//             </a>
//           </div>

//           <div className={`nav__menu ${toggle && "show"}`} id="nav-menu">
//             <ul className="nav__list">
//               <li className="nav__item">
//                 <a
//                   href="#home"
//                   className={`nav__link ${startActive} ${
//                     homeActive && "active"
//                   }`}
//                   onClick={closeMenu}
//                 >
//                   Home
//                 </a>
//               </li>
//               <li className="nav__item">
//                 <a
//                   onClick={closeMenu}
//                   href="#about"
//                   className={`nav__link ${aboutActive && "active"}`}
//                 >
//                   About
//                 </a>
//               </li>
//               <li className="nav__item">
//                 <a
//                   href="#skills"
//                   className={`nav__link ${skillsActive && "active"}`}
//                   onClick={closeMenu}
//                 >
//                   Skills
//                 </a>
//               </li>
//               <li className="nav__item">
//                 <a
//                   href="#portfolio"
//                   class={`nav__link ${portfolioActive && "active"}`}
//                   onClick={closeMenu}
//                 >
//                   Portfolio
//                 </a>
//               </li>
//               <li className="nav__item">
//                 <a
//                   href="#contact"
//                   className={`nav__link ${contactActive && "active"}`}
//                   onClick={closeMenu}
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div onClick={handleToggle} className="nav__toggle" id="nav-toggle">
//             {/* <i class="bx bx-menu"></i> */}x
//           </div>
//         </nav>
//       </header>
//       <main>
//         <Home setStartActive={setStartActive} setHomeActive={setHomeActive} />
//         <About setAboutActive={setAboutActive} />
//         <Skills setSkillsActive={setSkillsActive} />
//         <Portfolio setPortfolioActive={setPortfolioActive} />
//         <Contact setContactActive={setContactActive} />
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default App;

///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////

import React, { useState, useRef, useEffect } from "react";

import "./App.css";

import Home from "./Comps/Home/Home";
import About from "./Comps/About/About";
import Skills from "./Comps/Skills/Skills";
import Portfolio from "./Comps/Portfolio/Portfolio";
import Contact from "./Comps/Contact/Contact";
import Footer from "./Comps/Footer/Footer";

import ScrollReveal from "scrollreveal";

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

  // Ref
  // Home
  const homeRef = useRef(null);
  // const homeTitle = useRef(null);
  const homeScroll = useRef(null);
  const homeImg = useRef(null);

  // About
  const aboutRef = useRef(null);
  const aboutImg = useRef(null);
  const aboutSubtitle = useRef(null);
  const aboutProfession = useRef(null);
  const aboutText = useRef(null);
  const aboutSocial__icon1 = useRef(null);
  const aboutSocial__icon2 = useRef(null);

  // Skills
  const skillsRef = useRef(null);
  const skillsSubtitle = useRef(null);
  const skillsName1 = useRef(null);
  const skillsName2 = useRef(null);
  const skillsName3 = useRef(null);
  const skillsName4 = useRef(null);
  const skillsName5 = useRef(null);
  const skillsImg = useRef(null);

  // Portfolio
  const portfolioImg1 = useRef(null);
  const portfolioImg2 = useRef(null);
  const portfolioImg3 = useRef(null);
  const portfolioImg4 = useRef(null);
  const portfolioImg5 = useRef(null);
  const portfolioImg6 = useRef(null);

  // Contact
  const contactSubtitle1 = useRef(null);
  const contactSubtitle2 = useRef(null);
  const contactSubtitle3 = useRef(null);
  const contactText1 = useRef(null);
  const contactText2 = useRef(null);
  const contactText3 = useRef(null);
  const contactInput1 = useRef(null);
  const contactInput2 = useRef(null);
  const contactInput3 = useRef(null);
  const contactButton = useRef(null);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  // useEffect(() => {
  //   const sr = ScrollReveal({
  //     origin: "top",
  //     distance: "80px",
  //     duration: 2000,
  //     reset: true,
  //   });

  //   // Home
  //   sr.reveal(homeTitle.current, {});
  //   sr.reveal(homeScroll.current, { delay: 400 });
  //   sr.reveal(homeImg.current, { origin: "right", delay: 400 });

  //   // About
  //   sr.reveal(aboutImg.current, { delay: 500 });
  //   sr.reveal(aboutSubtitle.current, { delay: 300 });
  //   sr.reveal(aboutProfession.current, { delay: 400 });
  //   sr.reveal(aboutText.current, { delay: 500 });
  //   sr.reveal(aboutSocial__icon1.current, { delay: 600, interval: 200 });
  //   sr.reveal(aboutSocial__icon2.current, { delay: 600, interval: 200 });

  //   // SCROLL SKILLS
  //   sr.reveal(skillsSubtitle.current, {});
  //   sr.reveal(skillsName1.current, {
  //     distance: "20px",
  //     delay: 20,
  //     interval: 100,
  //   });
  //   sr.reveal(skillsName2.current, {
  //     distance: "30px",
  //     delay: 20,
  //     interval: 100,
  //   });
  //   sr.reveal(skillsName3.current, {
  //     distance: "40px",
  //     delay: 20,
  //     interval: 100,
  //   });
  //   sr.reveal(skillsName4.current, {
  //     distance: "40px",
  //     delay: 20,
  //     interval: 100,
  //   });
  //   sr.reveal(skillsName5.current, {
  //     distance: "50px",
  //     delay: 20,
  //     interval: 100,
  //   });
  //   sr.reveal(skillsImg.current, { delay: 400 });

  //   // SCROLL PORTFOLIO
  //   sr.reveal(portfolioImg1.current, { interval: 200 });
  //   sr.reveal(portfolioImg2.current, { interval: 200 });
  //   sr.reveal(portfolioImg3.current, { interval: 200 });
  //   sr.reveal(portfolioImg4.current, { interval: 200 });
  //   sr.reveal(portfolioImg5.current, { interval: 200 });
  //   sr.reveal(portfolioImg6.current, { interval: 200 });

  //   // SCROLL CONTACT
  //   sr.reveal(contactSubtitle1.current, { reset: false });
  //   sr.reveal(contactSubtitle2.current, { reset: false });
  //   sr.reveal(contactSubtitle3.current, { reset: false });
  //   sr.reveal(contactText1.current, { interval: 200, reset: false });
  //   sr.reveal(contactText2.current, { interval: 200, reset: false });
  //   sr.reveal(contactText3.current, { interval: 200, reset: false });
  //   sr.reveal(contactInput1.current, { delay: 400, reset: false });
  //   sr.reveal(contactInput2.current, { delay: 400, reset: false });
  //   sr.reveal(contactInput3.current, { delay: 400, reset: false });
  //   sr.reveal(contactButton.current, { delay: 600, reset: false });
  // }, []);

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
