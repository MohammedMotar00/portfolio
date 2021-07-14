import React, { useRef, useEffect } from "react";
import image from "../../Img/image.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills({ setSkillsActive }) {
  // Ref
  const skillsRef = useRef(null);

  // Skills check
  const skillsCheck = () => {
    let skills = skillsRef.current;
    const sectionHeightSkills = skills.offsetHeight;
    const sectionTopSkills = skills.offsetTop - 50;

    if (
      window.scrollY > sectionTopSkills &&
      window.scrollY <= sectionTopSkills + sectionHeightSkills
    ) {
      setSkillsActive(true);
    } else {
      setSkillsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", skillsCheck);

    AOS.init({ duration: 2000, offset: 20, mirror: true });
  }, []);

  return (
    <section ref={skillsRef} className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <div className="skills__box">
          <h3 className="skills__subtitle" data-aos="fade-down">
            Development
          </h3>
          <span
            className="skills__name"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            HTML
          </span>
          <span
            className="skills__name"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            CSS
          </span>
          <span
            className="skills__name"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            JAVASCRIPT
          </span>
          <span
            className="skills__name"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            SCSS
          </span>
          <span
            className="skills__name"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            BOOTSTRAP
          </span>
          <span
            className="skills__name"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            STYLED COMPONENTS
          </span>
          <span
            className="skills__name"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            TAILWIND CSS
          </span>
          <span
            className="skills__name"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            REACT
          </span>
          <span
            className="skills__name"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            REDUX
          </span>
          <span
            className="skills__name"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            NEXT.JS
          </span>
          <span
            className="skills__name"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            VUE
          </span>
          <span
            className="skills__name"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            VUEX
          </span>
          <span
            className="skills__name"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            VUETIFY
          </span>
          <span
            className="skills__name"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            PHP
          </span>
          <span
            className="skills__name"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            LARAVEL
          </span>
          <span
            className="skills__name"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            WORDPRESS
          </span>
        </div>

        <div className="skills__img" data-aos="fade-down" data-aos-delay="300">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
