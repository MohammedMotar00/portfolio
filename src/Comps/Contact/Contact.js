import React, { useEffect, useRef } from "react";

import ScrollReveal from "scrollreveal";

import "../../App.css";

function Contact({ setContactActive }) {
  // Ref
  const contactRef = useRef(null);

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

  useEffect(() => {
    document.addEventListener("scroll", contactCheck);

    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(contactSubtitle1.current, { reset: false });
    sr.reveal(contactSubtitle2.current, { reset: false });
    sr.reveal(contactSubtitle3.current, { reset: false });
    sr.reveal(contactText1.current, { interval: 200, reset: false });
    sr.reveal(contactText2.current, { interval: 200, reset: false });
    sr.reveal(contactText3.current, { interval: 200, reset: false });
    sr.reveal(contactInput1.current, { delay: 400, reset: false });
    sr.reveal(contactInput2.current, { delay: 400, reset: false });
    sr.reveal(contactInput3.current, { delay: 400, reset: false });
    sr.reveal(contactButton.current, { delay: 600, reset: false });
  }, []);

  return (
    <section ref={contactRef} class="contact section" id="contact">
      <h2 class="section-title">Contact</h2>

      <div class="contact__container bd-grid">
        <div class="contact__info">
          <h3 ref={contactSubtitle1} class="contact__subtitle">
            EMAIL
          </h3>
          <span ref={contactText1} class="contact__text">
            mohammed.motar.mm@gmail.com
          </span>

          <h3 ref={contactSubtitle2} class="contact__subtitle">
            PHONE
          </h3>
          <span ref={contactText2} class="contact__text">
            072 281 63 30
          </span>

          <h3 ref={contactSubtitle3} class="contact__subtitle">
            ADRESS
          </h3>
          <span ref={contactText3} class="contact__text">
            Bokvägen 15A
          </span>
        </div>

        <form action="" class="contact__form">
          <div class="contact__inputs">
            <input
              ref={contactInput1}
              type="text"
              placeholder="Name"
              class="contact__input"
            />
            <input
              type="email"
              placeholder="Email"
              class="contact__input"
              ref={contactInput2}
            />
          </div>

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            class="contact__input"
            ref={contactInput3}
          ></textarea>

          <input
            ref={contactButton}
            type="submit"
            value="Send"
            class="contact__button"
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
