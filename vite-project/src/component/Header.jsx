import React from "react";
import { useEffect, useState } from "react";
import bread1 from "../assets/img/bread-1.png";
import bread4 from "../assets/img/bread-4.png";

function Header() {
  const [isHeaderBlurred, setIsHeaderBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than or equal to 50 pixels
      if (window.scrollY >= 50) {
        setIsHeaderBlurred(true); // If true, set isHeaderBlurred to true
      } else {
        setIsHeaderBlurred(false); // If false, set isHeaderBlurred to false
      }
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Remove scroll event listener on component unmount
    };
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <header
      className={isHeaderBlurred ? "header blur-header" : "header"}
      id="header"
    >
      {/* <!--=============== FAVICON ===============--> */}
      <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon" />

      {/* <!--=============== REMIXICONS ===============--> */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.7.0/remixicon.css"
      />

      {/* <!--=============== BOXICONS ===============--> */}
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />

      <nav class="nav container">
        <a href="#" class="nav__logo">
          Bakery
        </a>
        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="#home" class="nav__link active-link">
                Home
              </a>
            </li>

            <li class="nav__item">
              <a href="#new" class="nav__link">
                News
              </a>
            </li>

            <li class="nav__item">
              <a href="#about" class="nav__link">
                About Us
              </a>
            </li>

            <li class="nav__item">
              <a href="#favorite" class="nav__link">
                Favorites
              </a>
            </li>

            <li class="nav__item">
              <a href="#visit" class="nav__link">
                Location
              </a>
            </li>

            <li class="nav__item">
              <a id="Cart" href="#cart" class="nav__link">
                <i class="bx bx-cart"> Cart</i>
              </a>
            </li>

            <li>
              <a id="loginButton" href="#login" class="nav__link">
                <i class="bx bx-log-in"> Login</i>
              </a>
            </li>
          </ul>
          {/* <!-- close button --> */}
          <div class="nav__close" id="nav-close">
            <i class="ri-close-line"></i>
          </div>
          <img src={bread4} alt="image" class="nav___img-1" />
          <img src={bread1} alt="image" class="nav___img-2" />
        </div>

        {/* <!-- Toggle button --> */}
        <div class="nav__toggle" id="nav-toggle">
          <i class="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
