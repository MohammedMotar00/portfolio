import React, { useRef, useEffect } from "react";

import ConnectFourImg from "../../Img/connect-four.png";
import NetflixImage from "../../Img/netflix.png";
import DisneyPlusImage from "../../Img/disney-plus.png";
import SlackImage from "../../Img/slack.png";
import MicrosoftImage from "../../Img/microsoft.png";

import AOS from "aos";
import "aos/dist/aos.css";

function Portfolio({ setPortfolioActive }) {
  // Ref
  const portfolioRef = useRef(null);

  // Portfolio check
  const portfolioCheck = () => {
    let portfolio = portfolioRef.current;
    const sectionHeightPortfolio = portfolio.offsetHeight;
    const sectionTopPortfolio = portfolio.offsetTop - 50;

    if (
      window.scrollY > sectionTopPortfolio &&
      window.scrollY <= sectionTopPortfolio + sectionHeightPortfolio
    ) {
      setPortfolioActive(true);
    } else {
      setPortfolioActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", portfolioCheck);

    AOS.init({ duration: 2000, mirror: true });
  });

  return (
    <section ref={portfolioRef} className="portfolio section" id="portfolio">
      <h2 className="section-title">Portfolio</h2>

      <div className="portfolio__container bd-grid">
        <div
          className="portfolio__img"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <img src={NetflixImage} alt="" />
          <div className="portfolio__link">
            <a
              href="https://netflix-clone-build-4519a.web.app/"
              className="portfolio__link-name"
            >
              <p>React</p>
              <p>Redux</p>
              <p>Styled Components</p>
            </a>
          </div>
        </div>

        <div
          className="portfolio__img"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <img src={DisneyPlusImage} alt="" />
          <div className="portfolio__link">
            <a
              href="https://disney-plus-clone-app-8b3e5.web.app/"
              className="portfolio__link-name"
            >
              <p>React</p>
              <p>Redux</p>
              <p>Styled Components</p>
            </a>
          </div>
        </div>

        <div
          className="portfolio__img"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <img src={SlackImage} alt="" />
          <div className="portfolio__link">
            <a
              href="https://slack-clone-1ff2b.web.app/"
              className="portfolio__link-name"
            >
              <p>React</p>
              <p>Redux</p>
              <p>Styled Components</p>
              <p>Firebase Hooks</p>
            </a>
          </div>
        </div>

        <div
          className="portfolio__img"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <img src={ConnectFourImg} alt="" />
          <div className="portfolio__link">
            <a
              href="https://connect-four-game-f50f5.web.app/"
              className="portfolio__link-name"
            >
              <p>React</p>
            </a>
          </div>
        </div>

        <div
          className="portfolio__img"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <img src={MicrosoftImage} alt="" />
          <div className="portfolio__link">
            <a
              href="https://clone-app-10ecb.web.app/"
              className="portfolio__link-name"
            >
              <p>React</p>
              <p>SCSS</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
