import React, { useEffect, useRef } from "react";

import myImg from "../../Img/portfolio1.png";

import AOS from "aos";
import "aos/dist/aos.css";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

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

  useEffect(() => {
    window.addEventListener("scroll", homeCheck);

    AOS.init({ duration: 2000, mirror: true });
  }, []);

  return (
    <section className="home" id="home" ref={homeRef}>
      <div className="home__container bg-grid">
        <h1 class="home__title" data-aos="fade-down">
          <span>Welcome To</span>
          <br />
          <span>My Portfolio</span>
        </h1>

        <div className="home__scroll" data-aos="fade-down" data-aos-delay="400">
          <a href="#about" className="home__scroll-link">
            <ArrowUpwardIcon className="arrowDown" />
            Scroll down
          </a>
        </div>

        <img
          src={myImg}
          alt=""
          className="home__img"
          data-aos="fade-left"
          data-aos-delay="550"
        />
      </div>
    </section>
  );
}

export default Home;
