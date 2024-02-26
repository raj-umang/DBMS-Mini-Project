import React from "react";
import visit from "../assets/img/visit-bg.jpg";

function Visit() {
  return (
    <div class="visit__container">
      <img src={visit} alt="image" class="visit__bg" />
      <div class="visit__shadow">
        <div class="visit__container container grid">
          <div class="visit__data">
            <h2 class="section__title">Visit Us</h2>

            <p class="visit__description">
              Discover the best bread, we look forward to your visit.
            </p>
            <a href="#" class="button">
              See Location
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visit;
