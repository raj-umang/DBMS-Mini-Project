import React from "react";
import bread2 from "../assets/img/bread-2.png";
import aboutbread from "../assets/img/about-bread.png";

function About() {
  return (
    <div>
      <div class="about__container container grid">
        <div class="about__data">
          <h2 class="section__title">About Us</h2>
          <p class="about__description">
            We prepare all types of bread that are made at home, maintaining the
            tradition of using only the best ingredients made with local
            products whenever possible. We have an extensive line of freshly
            prepared bakery and coffee products.
          </p>
          <a href="" class="button">
            Know More
          </a>

          <img src={bread2} alt="image" class="about__bread" />
        </div>
        <img src={aboutbread} alt="image" class="about__img" />
      </div>
    </div>
  );
}

export default About;
