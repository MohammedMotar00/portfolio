import React, { useRef, useEffect } from "react";

import ScrollReveal from "scrollreveal";

function Skills({ setSkillsActive }) {
  // Ref
  const skillsRef = useRef(null);
  const skillsSubtitle = useRef(null);
  const skillsName1 = useRef(null);
  const skillsName2 = useRef(null);
  const skillsName3 = useRef(null);
  const skillsName4 = useRef(null);
  const skillsName5 = useRef(null);
  const skillsImg = useRef(null);

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

    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(skillsSubtitle.current, {});
    sr.reveal(skillsName1.current, {
      distance: "20px",
      delay: 20,
      interval: 100,
    });
    sr.reveal(skillsName2.current, {
      distance: "30px",
      delay: 20,
      interval: 100,
    });
    sr.reveal(skillsName3.current, {
      distance: "40px",
      delay: 20,
      interval: 100,
    });
    sr.reveal(skillsName4.current, {
      distance: "40px",
      delay: 20,
      interval: 100,
    });
    sr.reveal(skillsName5.current, {
      distance: "50px",
      delay: 20,
      interval: 100,
    });
    sr.reveal(skillsImg.current, { delay: 400 });
  }, []);

  return (
    <section ref={skillsRef} class="skills section" id="skills">
      <h2 class="section-title">Skills</h2>

      <div class="skills__container bd-grid">
        <div class="skills__box">
          <h3 ref={skillsSubtitle} class="skills__subtitle">
            Development
          </h3>
          <span ref={skillsName1} class="skills__name">
            HTML
          </span>
          <span ref={skillsName2} class="skills__name">
            CSS
          </span>
          <span ref={skillsName3} class="skills__name">
            JAVASCRIPT
          </span>
          <span ref={skillsName4} class="skills__name">
            SCSS
          </span>
          <span ref={skillsName5} class="skills__name">
            REACT
          </span>
        </div>

        <div ref={skillsImg} class="skills__img">
          <img
            src="https://raw.githubusercontent.com/bedimcode/responsive-portfolio-website-JhonDoe/master/assets/img/skill.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
