import React, { useRef, useEffect } from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

// import ScrollReveal from "scrollreveal";
import ScrollReveal from "../../scrollReveal";

import myImg from "../../Img/portfolio1.png";

import "../../App.css";

function About({ setAboutActive }) {
  // Ref
  const aboutRef = useRef(null);

  // About check
  const aboutCheck = () => {
    let about = aboutRef.current;
    const sectionHeightAbout = about.offsetHeight;
    const sectionTopAbout = about.offsetTop - 50;

    if (
      window.scrollY > sectionTopAbout &&
      window.scrollY <= sectionTopAbout + sectionHeightAbout
    ) {
      setAboutActive(true);
    } else {
      setAboutActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", aboutCheck);
  }, []);

  return (
    <section ref={aboutRef} class="about section" id="about">
      <h2 class="section-title">About</h2>

      <div class="about__container bd-grid">
        <div class="about__img">
          <img src={myImg} alt="" />
        </div>

        <div>
          <h2 class="about__subtitle">I'm Mohammed Motar</h2>
          <span class="about__profession">Front-End Developer</span>
          <p class="about__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quo
            possimus temporibus nobis, suscipit ab dolore sequi nihil dolorem
            accusamus. Et aut quaerat minus voluptatem explicabo quis ea,
            deserunt eligendi.
          </p>

          <div class="about__social">
            <a href="#" class="about__social-icon">
              <FacebookIcon />
            </a>
            <a href="#" class="about__social-icon">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
