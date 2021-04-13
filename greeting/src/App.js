import React, { useEffect } from "react";
import './App.css';
import bg1 from './bg.jpg';
import { gsap, Power2, Back } from "gsap";
import { grey, blue } from "@material-ui/core/colors";
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

function App() {

  const introAnimation = () => {
    const container = document.querySelector("#container");
    const hero = document.querySelector(".hero");
    const slider = document.querySelector(".slider");
    const logo = document.querySelector("#logo");
    const hamburger = document.querySelector(".hamburger");
    const headline = document.querySelector(".headline");

    const tl1 = gsap.timeline();

    tl1
        .fromTo(hero, 1.0, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
        .fromTo(hero, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
        .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeOut }, "-=1.2")
        .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
        .fromTo(hamburger, 0.5, { opacity: 0, y: -40 }, { opacity: 1, y: 0 }, "-=0.5")
        .fromTo(hamburger, 0.5, { rotation: 0 }, { rotation: 90 }, "-=0.5")
        .fromTo(headline, 0.5, { opacity: 0, x: 100 }, { opacity: 1, x: 10, ease: Back.easeOut }, "-=0.5");
      
  }

  useEffect(() => {
    introAnimation();
  })

  return (
    <div className="App">
      <div id="container">
        <header>
          <nav>
            <h1 id="logo">Happy Birthday</h1>
            <LabelImportantIcon className="hamburger" fontSize="large"/>
          </nav>
          <section>
            <div className="hero">
              <img
                src={bg1}
                alt=""
              />
              <div className="headline">
                <h1 className="headline2">Dad</h1>
                <h3 className="headline3">13 April 2021</h3>
              </div>
            </div>
          </section>
        </header>

        <div className="page_bg" ></div>
        <div className="slider" style={{backgroundImage: `url(${bg1})`}}></div>

      </div>
    </div>
  );
}

export default App;