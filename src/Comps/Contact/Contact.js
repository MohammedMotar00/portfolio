import React, { useEffect, useRef } from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

import AOS from "aos";
import "aos/dist/aos.css";

function Contact({ setContactActive }) {
  // Ref
  const contactRef = useRef(null);

  // Contact check
  const contactCheck = () => {
    let contact = contactRef.current;
    const sectionHeightContact = contact.offsetHeight;
    const sectionTopContact = contact.offsetTop - 50;

    if (
      window.scrollY > sectionTopContact &&
      window.scrollY <= sectionTopContact + sectionHeightContact
    ) {
      setContactActive(true);
    } else {
      setContactActive(false);
    }
  };

  const preventRefresh = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  useEffect(() => {
    document.addEventListener("scroll", contactCheck);

    AOS.init({ duration: 2000, mirror: true });
  }, []);

  return (
    <section ref={contactRef} className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact__container bd-grid">
        <div className="contact__info">
          <h3
            className="contact__subtitle"
            data-aos-duration="1300"
            data-aos="fade-down"
          >
            EMAIL
          </h3>
          <span
            className="contact__text"
            data-aos-duration="1300"
            data-aos="fade-down"
          >
            mohammed.motar10@gmail.com
          </span>

          <h3
            className="contact__subtitle"
            data-aos-duration="1300"
            data-aos="fade-down"
          >
            {" "}
            PHONE
          </h3>
          <span
            className="contact__text"
            data-aos-duration="1300"
            data-aos="fade-down"
          >
            (+46) 722 816 330
          </span>

          <h3
            className="contact__subtitle"
            data-aos-duration="1300"
            data-aos="fade-down"
          >
            ADRESS
          </h3>
          <span
            className="contact__text"
            data-aos-duration="1300"
            data-aos="fade-down"
          >
            Bokvägen 15A
          </span>
        </div>

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
    </section>
  );
}

export default Contact;
