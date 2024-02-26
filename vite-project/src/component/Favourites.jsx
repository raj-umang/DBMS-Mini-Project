import React from "react";
import bread1 from "../assets/img/favorite-bread-1.png";
import bread2 from "../assets/img/favorite-bread-2.png";
import bread3 from "../assets/img/favorite-bread-3.png";
import bread4 from "../assets/img/favorite-bread-4.png";
import bread5 from "../assets/img/favorite-bread-5.png";
import bread6 from "../assets/img/favorite-bread-6.png";

function Favourites() {
  return (
    <div>
      <h2 class="section__title">Customer Favorites</h2>

      <div class="favorite__container container grid">
        <article class="favorite__card">
          <img src={bread1} alt="image" class="favorite__img" />

          <div class="favorite__data">
            <h2 class="favorite__title">Whole Grain</h2>
            <span class="favorite__subtitle">Bread</span>
            <h3 class="favorite__price">$6.00</h3>
          </div>
          <button class="favorite__button button">
            <i class="ri-add-line"></i>
          </button>
        </article>

        <article class="favorite__card">
          <img src={bread2} alt="image" class="favorite__img" />

          <div class="favorite__data">
            <h2 class="favorite__title">Rye</h2>
            <span class="favorite__subtitle">Bread</span>
            <h3 class="favorite__price">$8.00</h3>
          </div>
          <button class="favorite__button button">
            <i class="ri-add-line"></i>
          </button>
        </article>

        <article class="favorite__card">
          <img src={bread3} alt="image" class="favorite__img" />

          <div class="favorite__data">
            <h2 class="favorite__title">Wheat</h2>
            <span class="favorite__subtitle">Bread</span>
            <h3 class="favorite__price">$3.00</h3>
          </div>
          <button class="favorite__button button">
            <i class="ri-add-line"></i>
          </button>
        </article>

        <article class="favorite__card">
          <img src={bread4} alt="image" class="favorite__img" />

          <div class="favorite__data">
            <h2 class="favorite__title">Multigrain</h2>
            <span class="favorite__subtitle">Bread</span>
            <h3 class="favorite__price">$5.00</h3>
          </div>
          <button class="favorite__button button">
            <i class="ri-add-line"></i>
          </button>
        </article>

        <article class="favorite__card">
          <img src={bread5} alt="image" class="favorite__img" />

          <div class="favorite__data">
            <h2 class="favorite__title">Sourdough</h2>
            <span class="favorite__subtitle">Bread</span>
            <h3 class="favorite__price">$7.00</h3>
          </div>
          <button class="favorite__button button">
            <i class="ri-add-line"></i>
          </button>
        </article>

        <article class="favorite__card">
          <img src={bread6} alt="image" class="favorite__img" />

          <div class="favorite__data">
            <h2 class="favorite__title">French</h2>
            <span class="favorite__subtitle">Bread</span>
            <h3 class="favorite__price">$3.00</h3>
          </div>
          <button class="favorite__button button">
            <i class="ri-add-line"></i>
          </button>
        </article>
      </div>
    </div>
  );
}

export default Favourites;
