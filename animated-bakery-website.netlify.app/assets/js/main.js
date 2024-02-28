/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//Login Button
document.getElementById("loginButton").addEventListener("click", function () {
  // Redirect to another page
  window.location.href = "/login"; // Change "/login" to the URL of your login page
});

//Cart Button
document.getElementById("Cart").addEventListener("click", function () {
  // Redirect to another page
  window.location.href = "/cart"; // Change "/login" to the URL of your login page
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  opacity: 1,
  scale: 1.1,
  duration: 2500,
  delay: 300,
  //reset: true, //animation repeat
});

sr.reveal(`.home__data, .about__img, .about__data, .visit__data`);

sr.reveal(
  `.home__image, .footer__img-1, .footer__img-2
`,
  {
    rotate: {
      z: -15,
    },
  }
);
sr.reveal(`.home__bread, .about__bread`, {
  rotate: {
    z: 15,
  },
});
sr.reveal(`.home__footer`, {
  scale: 1,
  origin: "bottom",
});

sr.reveal(`.new__card:nth-child(1) img`, {
  rotate: {
    z: -30,
  },
  distance: 0,
});
sr.reveal(`.new__card:nth-child(2) img`, {
  rotate: {
    z: 15,
  },
  distance: 0,
  delay: 600,
});
sr.reveal(`.new__card:nth-child(3) img`, {
  rotate: {
    z: -30,
  },
  distance: 0,
  delay: 900,
});

sr.reveal(`.favorite__card img`, {
  interval: 100,
  rotate: {
    z: 15,
  },
  distance: 0,
});

sr.reveal(`.footer__container`, {
  scale: 1,
});

function increaseQuantityPopup(popupId) {
  let quantityPopupElement = document.querySelector(
    `#${popupId} .quantity-popup`
  );
  let currentQuantity = parseInt(quantityPopupElement.textContent);
  quantityPopupElement.textContent = currentQuantity + 1;
}

function decreaseQuantityPopup(popupId) {
  let quantityPopupElement = document.querySelector(
    `#${popupId} .quantity-popup`
  );
  let currentQuantity = parseInt(quantityPopupElement.textContent);
  if (currentQuantity > 1) {
    quantityPopupElement.textContent = currentQuantity - 1;
  }
}

function showPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "flex";
}

function addToCartFromPopup(productName, quantity, popupId) {
  // Implement your addToCart functionality here
  console.log("Adding to cart from popup: " + quantity + " " + productName);
  console.log("Popup ID: " + popupId);
  // You can perform actions like updating the cart state, making API calls, etc.
}

// Close the popup when clicking outside of it
window.onclick = function (event) {
  if (event.target.classList.contains("popup")) {
    event.target.style.display = "none";
  }
};

// let quantityElement = document.querySelector('.quantity');
// let quantityPopupElement = document.querySelector('.quantity-popup');

//     function increaseQuantity() {
//         let currentQuantity = parseInt(quantityElement.textContent);
//         quantityElement.textContent = currentQuantity + 1;
//     }

//     function decreaseQuantity() {
//         let currentQuantity = parseInt(quantityElement.textContent);
//         if (currentQuantity > 1) {
//             quantityElement.textContent = currentQuantity - 1;
//         }
//     }

//     function increaseQuantityPopup() {
//       let currentQuantity = parseInt(quantityPopupElement.textContent);
//       quantityPopupElement.textContent = currentQuantity + 1;
//   }

//   function decreaseQuantityPopup() {
//       let currentQuantity = parseInt(quantityPopupElement.textContent);
//       if (currentQuantity > 1) {
//           quantityPopupElement.textContent = currentQuantity - 1;
//       }
//   }

// function showPopup(popupId) {
//   var popup = document.getElementById(popupId);
//   popup.style.display = "flex";
// }

// function addToCartFromPopup(productName, quantity) {
//   // Implement your addToCart functionality here
//   console.log("Adding to cart from popup: " + quantity + " " + productName);
//   // You can perform actions like updating the cart state, making API calls, etc.
// }

// // Close the popup when clicking outside of it
// window.onclick = function(event) {
//   if (event.target.classList.contains("popup")) {
//     event.target.style.display = "none";
//   }
// };

// function addToCart(productName, quantity) {
//   // Implement your addToCart functionality here
//   console.log("Adding to cart: " + quantity + " " + productName);

// }

// function addToCartFromFavorite(productName, quantity) {
//   // Implement your addToCart functionality here
//   console.log("Adding to cart from favorite: " + quantity + " " + productName);
//   // You can perform actions like updating the cart state, making API calls, etc.
// }
