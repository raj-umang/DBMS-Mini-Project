import React from "react";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import News from "./component/News";
import About from "./component/About";
import Favourites from "./component/Favourites";
import Visit from "./component/Visit";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <header class="header" id="header">
        <Header />
      </header>

      <main className="main">
        <section className="home section" id="home">
          <Home />
        </section>

        <section className="new section" id="new">
          <News />
        </section>

        <section className="about section" id="about">
          <About />
        </section>

        <section className="favorite section" id="favorite">
          <Favourites />
        </section>

        <section className="visit section" id="visit">
          <Visit />
        </section>
      </main>

      <footer className="footer">
        <Footer />
      </footer>

      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>

      {/* <!--=============== SCROLLREVEAL ===============--> */}
      <script src="assets/js/scrollreveal.min.js"></script>

      {/* <!--=============== MAIN JS ===============--> */}
      <script src="assets/js/main.js"></script>
    </>
  );
}

export default App;
