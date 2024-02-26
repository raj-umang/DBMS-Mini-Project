import React from "react";
import footer1 from "../assets/img/bread-4.png";
import footer2 from "../assets/img/bread-3.png";

function Footer() {
  return (
    <div class="footer__container container grid">
      <div>
        <a href="#" class="footer__logo">
          Bakery
        </a>
        <p class="footer__description">
          We make the best bread <br /> in the city.
        </p>
      </div>

      <div class="footer__container grid">
        <div>
          <h3 class="footer__title">Address</h3>
          <ul class="footer__list">
            <li>
              <address class="footer__info">
                {" "}
                AV. The Sun #321 <br /> Lima Peru
              </address>
            </li>
            <li>
              <address class="footer__info"> 9AM - 11PM</address>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="footer__title">Contact Me</h3>
          <ul class="footer__list">
            <li>
              <address class="footer__info"> bakery@email.com</address>
            </li>
            <li>
              <address class="footer__info"> +00 987 654 321</address>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="footer__title">Follow Us</h3>
          <div class="footer__social">
            <a href="https://www.facebook.com/" target="_blank">
              <i class="ri-facebook-circle-line"></i>
            </a>

            <a href="https://www.instagram.com/" target="_blank">
              <i class="ri-instagram-line"></i>
            </a>

            <a href="https://www.youtube.com/" target="_blank">
              <i class="ri-youtube-line"></i>
            </a>
          </div>
        </div>
      </div>

      <img src={footer1} alt="" class="footer__img-1" />
      <img src={footer2} alt="" class="footer__img-2" />
      <span class="footer__copy">&#169; © All Rights Reserved</span>
    </div>
  );
}

export default Footer;
