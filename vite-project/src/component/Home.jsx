import React from "react";
import home from "../assets/img/home-bread.png";
import homebg from "../assets/img/home-bg.jpg";
import bread1 from "../assets/img/bread-1.png";

function Home() {
  return (
    <>
      {/*  <!--==================== MAIN ====================--> */}

      {/* <!--==================== HOME ====================--> */}
      <section class="home section" id="home">
        <img src={homebg} alt="image" class="home__bg" />
        <div class="home__shadow"></div>

        <div class="home__container container grid">
          <div class="home__data">
            <h1 class="home__title">
              Select The Best <br /> Quality Breads
            </h1>

            <a href="#" class="button">
              Select Breads
            </a>

            <img src={bread1} alt="image" class="home__bread" />
          </div>

          <div class="home__image">
            <img src={home} alt="image" class="home__img" />
          </div>

          <footer class="home__footer">
            <div class="home__location">
              <i class="ri-map-pin-line"></i>
              <span>
                Happy Belly Bakes,
                <br /> Ashok Nagar,Bengaluru
              </span>
            </div>
            <div class="home__social">
              <a
                href="https://www.instagram.com/
               "
                target="_blank"
              >
                <i class="ri-instagram-line"></i>
              </a>

              <a
                href="https://www.youtube.com/
               "
                target="_blank"
              >
                <i class="ri-youtube-line"></i>
              </a>

              <a
                href="https://www.facebook.com/
               "
                target="_blank"
              >
                <i class="ri-facebook-line"></i>
              </a>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}

export default Home;
