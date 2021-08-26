import React, { useRef, useEffect, useState } from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

import myImg from "../../Img/portfolio1.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { blue } from "@material-ui/core/colors";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import { Modal } from "react-bootstrap";
import Eng from "../CV/Eng";
import Swe from "../CV/Swe";

function About({ setAboutActive }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
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
            I am Mohammed Motar
          </h2>
          <span
            className="about__profession"
            data-aos="fade-down"
            data-aos-delay="350"
          >
            Front End Developer
          </span>

          <p className="about__text" data-aos="fade-down" data-aos-delay="500">
            I am 21 years old and i am Front End Developer <br /> <br /> I studied for two years at Helsingborgs Polytechnic School - EC Utbildning! <br /> I
            have learned a lot of things until today. I am a fast learner and
            flexible guy that can use google to solve the problems. <br />
            <br /> You can read my CV{" "}
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpenModal(true)}
              style={{ marginLeft: "10px" }}
            >
              here!
            </Button>
            <Modal
              show={openModal}
              onHide={() => setOpenModal(false)}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  <List component="nav" aria-label="main mailbox folders">
                    <div className="modal_language">
                      <ListItem
                        button
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                      >
                        <ListItemText primary="Eng" />
                      </ListItem>

                      <ListItem
                        button
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                      >
                        <ListItemText primary="Swe" />
                      </ListItem>
                    </div>
                  </List>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {selectedIndex == 0 && <Eng />}
                {selectedIndex == 1 && <Swe />}
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => setOpenModal(false)}>
                  {selectedIndex == 0 ? "Close" : "Stäng"}
                </Button>
              </Modal.Footer>
            </Modal>
            <br /> <br /> If you want to know more about me, <br /> you can find
            me here{" "}
            <a href="#contact" style={{ color: "blue" }}>
              contact page!
            </a>
          </p>

          <div className="about__social">
            <div data-aos-delay="700" data-aos="fade-left">
              <a
                href="https://www.facebook.com/mohammed.motar.16"
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
                href="https://www.instagram.com/motar.dev/"
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
