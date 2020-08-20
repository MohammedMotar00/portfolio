import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container bd-grid">
        <div className="footer__data">
          <h2 className="footer__title">Mohammed Motar</h2>
          <p className="footer__text">
            I'm Mohammed Motar and this is my portfolio website
          </p>
        </div>

        <div className="footer__data">
          <h2 className="footer__title">EXPLORE</h2>
          <ul>
            <li>
              <a href="#home" className="footer__link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__link">
                Skills
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__data">
          <h2 className="footer__title">FOLLOW</h2>
          <a
            href="https://www.facebook.com/mohammed.motar.3"
            className="footer__social"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://github.com/MohammedMotar00/"
            className="footer__social"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.instagram.com/mohammed.alka3bii/"
            className="footer__social"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
