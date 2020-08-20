import React, { useRef, useEffect } from "react";

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
            data-aos-delay="800"
          >
            REACT
          </span>
        </div>

        <div className="skills__img" data-aos="fade-down" data-aos-delay="300">
          <img
            // src="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            // src="https://www.haconsultancies.com/wp-content/uploads/2017/10/html-programming-1030x682.jpg"
            src="https://sdtimes.com/wp-content/uploads/2016/03/0303.sdt-ada.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
