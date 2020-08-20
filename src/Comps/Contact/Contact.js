import React, { useEffect, useRef } from "react";

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
            mohammed.motar.mm@gmail.com
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

        <form onSubmit={preventRefresh} className="contact__form">
          <div className="contact__inputs">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="contact__input"
              data-aos="fade-down"
              data-aos-duration="1300"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="contact__input"
              data-aos="fade-down"
              data-aos-duration="1300"
            />
          </div>

          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your message..."
            className="contact__input"
            data-aos-duration="1300"
            data-aos="fade-down"
          ></textarea>

          <button type="submit" className="contact__button">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
