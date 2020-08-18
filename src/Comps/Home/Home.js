import React, { useEffect, useRef } from "react";

import myImg from "../../Img/portfolio1.png";

import "../../App.css";

// import ScrollReveal from "scrollreveal";
// import ScrollReveal from "../../scrollReveal";
import AOS from "aos";
import "aos/dist/aos.css";

function Home({ setHomeActive, setStartActive }) {
  // Ref
  const homeRef = useRef(null);

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

  // useEffect(() => {
  //   window.addEventListener("scroll", homeCheck);

  //   const sr = ScrollReveal({
  //     origin: "top",
  //     distance: "80px",
  //     duration: 2000,
  //     reset: true,
  //   });

  //   sr.reveal(homeImg, { origin: "right", delay: 400 });
  //   sr.reveal(homeTitle, {});
  //   sr.reveal(homeScroll, { delay: 400 });
  // }, []);

  useEffect(() => {
    window.addEventListener("scroll", homeCheck);

    AOS.init({ duration: 2000, mirror: true });
  }, []);

  return (
    <section className="home" id="home" ref={homeRef}>
      <div className="home__container bg-grid">
        <h1 class="home__title">
          <span>Mohammed</span>
          <br />
          Motar
        </h1>

        <div className="home__scroll">
          <a href="#about" className="home__scroll-link">
            <i className="bx bx-up-arrow-alt"></i>Scroll down
          </a>
        </div>

        <img src={myImg} alt="" className="home__img" data-aos="fade-left" />
      </div>
    </section>
  );
}

export default Home;
