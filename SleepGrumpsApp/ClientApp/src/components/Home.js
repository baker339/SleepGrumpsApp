import { motion } from "framer-motion";
import React, { Component } from "react";
import HomeTwo from "./HomeTwo";
import PageTransition from "./PageTransition";

export class Home extends Component {
  static displayName = Home.name;

  componentDidMount() {
    // Movement Animation to Happen
    const homeTwoContainer = document.querySelector(".home-two-container");

    //Moving Animation Event
    homeTwoContainer.addEventListener("mousemove", (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 300;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 300;

      homeTwoContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    //Animate in
    homeTwoContainer.addEventListener("mouseenter", (e) => {
      homeTwoContainer.style.transition = "none";
    });

    //Animate out
    homeTwoContainer.addEventListener("mouseleave", (e) => {
      homeTwoContainer.style.transition = "all 0.5s ease";
      homeTwoContainer.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
  }

  render() {
    return <HomeTwo />;
  }
}
