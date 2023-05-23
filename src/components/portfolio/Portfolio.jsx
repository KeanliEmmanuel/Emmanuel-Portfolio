import React from "react";
import "./portfolio.css";
import img1 from "../../assets/b1.webp";
import img2 from "../../assets/b2.webp";
import img3 from "../../assets/b3.webp";
import img5 from "../../assets/b4.jpg";
import img6 from "../../assets/b5.jpg";
import img7 from "../../assets/b6.jpg";
import img8 from "../../assets/b5.jpg";
import img9 from "../../assets/b5.jpg";
import ListPortfolio from "./listPortfolio";

export const Portfolio = () => {
  const portfolioContent = [
   
  ]
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
<ListPortfolio/>  
      <div className="container portfolio__container">
      {
        portfolioContent.map((content, id) =>{
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item__image">
                <img src={content.image} alt=" one" className="portImage" />
              </div>
              <h3> {content.title} </h3>
              <div className="portfolio__item__cta">
                <a
                  href={content.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={content.demo}
                  className="btn btn-primary"
                  target="blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        }
        
        )
      }
      </div>
    </section>
  );
};
export default Portfolio;
