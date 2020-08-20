import React, { useRef, useEffect } from "react";

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
          <img src="https://i.ibb.co/wSvHMkG/Screenshot-10.png" alt="" />
          <div className="portfolio__link">
            <a
              href="https://tic-tac-toe-game-3f67b.web.app/"
              className="portfolio__link-name"
            >
              View details
            </a>
          </div>
        </div>

        <div
          className="portfolio__img"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <img src="https://i.ibb.co/DWWy4Dh/Screenshot-2.png" alt="" />
          <div className="portfolio__link">
            <a
              href="https://connect-four-game-f50f5.web.app/"
              className="portfolio__link-name"
            >
              View details
            </a>
          </div>
        </div>

        <div
          className="portfolio__img"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <img src="https://i.ibb.co/gD3FSh0/Screenshot-3.png" alt="" />
          <div className="portfolio__link">
            <a
              href="https://netflix-clone-fd9e4.web.app/"
              className="portfolio__link-name"
            >
              View details
            </a>
          </div>
        </div>

        <div
          className="portfolio__img"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <img src="https://i.ibb.co/jHv2fX8/Screenshot-4.png" alt="" />
          <div className="portfolio__link">
            <a
              href="https://website-clone.web.app/"
              className="portfolio__link-name"
            >
              View details
            </a>
          </div>
        </div>

        <div
          className="portfolio__img"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <img src="https://i.ibb.co/6yGBGzT/Screenshot-5.png" alt="" />
          <div className="portfolio__link">
            <a
              href="https://biltema-clone.web.app/"
              className="portfolio__link-name"
            >
              View details
            </a>
          </div>
        </div>

        <div
          className="portfolio__img"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <img src="https://i.ibb.co/svWSVG1/Screenshot-6.png" alt="" />
          <div className="portfolio__link">
            <a
              href="https://clone-7da8f.web.app/"
              className="portfolio__link-name"
            >
              View details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
