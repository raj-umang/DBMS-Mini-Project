import React from "react";
import bread1 from "../assets/img/new-bread-1.png";
import bread2 from "../assets/img/new-bread-2.png";
import bread3 from "../assets/img/new-bread-3.png";

function News() {
  return (
    <div>
      {/* <!--==================== NEWS ====================--> */}
      <h2 class="section__title">New Breads</h2>

      <div class="new__container container grid">
        <div class="new__content grid">
          <article class="new__card">
            <div class="new__data">
              <h2 class="new__title">Rye Bread</h2>
              <p class="new__description">
                Baked with healthy, gluten-free sourdough for good nutrition.
              </p>
            </div>
            <img src={bread1} alt="image" class="new__img" />
          </article>
          <article class="new__card">
            <div class="new__data">
              <h2 class="new__title">Whole Grain Bread</h2>
              <p class="new__description">
                Crispy and homemade prepared from organic yeast-free flour.
              </p>
            </div>
            <img src={bread2} alt="image" class="new__img" />
          </article>
          <article class="new__card">
            <div class="new__data">
              <h2 class="new__title">Multigrain Bread</h2>
              <p class="new__description">
                Tasty and made with different natural grains from the
                countryside.
              </p>
            </div>
            <img src={bread3} alt="image" class="new__img" />
          </article>
        </div>

        <a href="#" class="new__button button">
          See More Breads
        </a>
      </div>
    </div>
  );
}

export default News;
