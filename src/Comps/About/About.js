import React, { useRef, useEffect } from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

import myImg from "../../Img/portfolio1.png";

import AOS from "aos";
import "aos/dist/aos.css";

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

    AOS.init({ duration: 2000, mirror: true });
  }, []);

  return (
    <section ref={aboutRef} className="about section" id="about">
      <h2 className="section-title">About</h2>

      <div className="about__container bd-grid">
        <div className="about__img" data-aos="fade-down" data-aos-delay="500">
          <img src={myImg} alt="" />
        </div>

        <div>
          <h2
            className="about__subtitle"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            I'm Mohammed Motar
          </h2>
          <span
            className="about__profession"
            data-aos="fade-down"
            data-aos-delay="350"
          >
            Front-End Developer
          </span>
          <p className="about__text" data-aos="fade-down" data-aos-delay="500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quo
            possimus temporibus nobis, suscipit ab dolore sequi nihil dolorem
            accusamus. Et aut quaerat minus voluptatem explicabo quis ea,
            deserunt eligendi.
          </p>

          <div className="about__social">
            <div data-aos-delay="700" data-aos="fade-left">
              <a
                href="https://www.facebook.com/mohammed.motar.3"
                className="about__social-icon"
              >
                <FacebookIcon />
              </a>
            </div>

            <div data-aos-delay="700" data-aos="fade-up">
              <a
                href="https://github.com/MohammedMotar00"
                className="about__social-icon"
              >
                <GitHubIcon />
              </a>
            </div>

            <div data-aos-delay="700" data-aos="fade-right">
              <a
                href="https://www.instagram.com/mohammed.alka3bii/"
                className="about__social-icon"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
