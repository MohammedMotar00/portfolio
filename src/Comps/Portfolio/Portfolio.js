import React, { useRef, useEffect } from "react";

import ScrollReveal from "scrollreveal";

function Portfolio({ setPortfolioActive }) {
  // Ref
  const portfolioRef = useRef(null);

  const portfolioImg1 = useRef(null);
  const portfolioImg2 = useRef(null);
  const portfolioImg3 = useRef(null);
  const portfolioImg4 = useRef(null);
  const portfolioImg5 = useRef(null);
  const portfolioImg6 = useRef(null);

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

    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(portfolioImg1.current, { interval: 200 });
    sr.reveal(portfolioImg2.current, { interval: 200 });
    sr.reveal(portfolioImg3.current, { interval: 200 });
    sr.reveal(portfolioImg4.current, { interval: 200 });
    sr.reveal(portfolioImg5.current, { interval: 200 });
    sr.reveal(portfolioImg6.current, { interval: 200 });
  });

  return (
    <section ref={portfolioRef} class="portfolio section" id="portfolio">
      <h2 class="section-title">Portfolio</h2>

      <div class="portfolio__container bd-grid">
        <div ref={portfolioImg1} class="portfolio__img">
          <img
            src="https://raw.githubusercontent.com/bedimcode/responsive-portfolio-website-JhonDoe/master/assets/img/work1.jpg"
            alt=""
          />
          <div class="portfolio__link">
            <a href="#" class="portfolio__link-name">
              View details
            </a>
          </div>
        </div>

        <div ref={portfolioImg2} class="portfolio__img">
          <img
            src="https://raw.githubusercontent.com/bedimcode/responsive-portfolio-website-JhonDoe/master/assets/img/work2.jpg"
            alt=""
          />
          <div class="portfolio__link">
            <a href="#" class="portfolio__link-name">
              View details
            </a>
          </div>
        </div>

        <div ref={portfolioImg3} class="portfolio__img">
          <img
            src="https://raw.githubusercontent.com/bedimcode/responsive-portfolio-website-JhonDoe/master/assets/img/work3.jpg"
            alt=""
          />
          <div class="portfolio__link">
            <a href="#" class="portfolio__link-name">
              View details
            </a>
          </div>
        </div>

        <div ref={portfolioImg4} class="portfolio__img">
          <img
            src="https://raw.githubusercontent.com/bedimcode/responsive-portfolio-website-JhonDoe/master/assets/img/work4.jpg"
            alt=""
          />
          <div class="portfolio__link">
            <a href="#" class="portfolio__link-name">
              View details
            </a>
          </div>
        </div>

        <div ref={portfolioImg5} class="portfolio__img">
          <img
            src="https://raw.githubusercontent.com/bedimcode/responsive-portfolio-website-JhonDoe/master/assets/img/work5.jpg"
            alt=""
          />
          <div class="portfolio__link">
            <a href="#" class="portfolio__link-name">
              View details
            </a>
          </div>
        </div>

        <div ref={portfolioImg6} class="portfolio__img">
          <img
            src="https://raw.githubusercontent.com/bedimcode/responsive-portfolio-website-JhonDoe/master/assets/img/work6.jpg"
            alt=""
          />
          <div class="portfolio__link">
            <a href="#" class="portfolio__link-name">
              View details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
