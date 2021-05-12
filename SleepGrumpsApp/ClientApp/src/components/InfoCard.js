import { motion } from "framer-motion";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PageTransition from "./PageTransition";
import PageVariants from "./PageVariants";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

export default class InfoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWhyMakeApp: true,
      showResources: false,
      showAboutCreator: false,
    };

    this.toggleShowText = this.toggleShowText.bind(this);
  }

  componentDidMount() {
    // Movement Animation to Happen
    const infoCardContainer = document.querySelector(".home-two-container");

    //Moving Animation Event
    infoCardContainer.addEventListener("mousemove", (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 300;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 300;

      infoCardContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    //Animate in
    infoCardContainer.addEventListener("mouseenter", (e) => {
      infoCardContainer.style.transition = "none";
    });

    //Animate out
    infoCardContainer.addEventListener("mouseleave", (e) => {
      infoCardContainer.style.transition = "all 0.5s ease";
      infoCardContainer.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
  }

  toggleShowText = (section) => {
    switch (section) {
      case "whyMakeApp":
        this.setState({
          showWhyMakeApp: true,
          showResources: false,
          showAboutCreator: false,
        });
        break;
      case "resources":
        this.setState({
          showWhyMakeApp: false,
          showResources: true,
          showAboutCreator: false,
        });
        break;
      case "aboutCreator":
        this.setState({
          showWhyMakeApp: false,
          showResources: false,
          showAboutCreator: true,
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <motion.div
        className={"home-two-container"}
        initial="initial"
        animate="in"
        exit="out"
        variants={PageVariants}
        transition={PageTransition}
      >
        <Link to="/">
          <img
            style={{
              width: "20%",
              height: "undefined",
              justifyContent: "center",
              paddingBottom: "2%",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/3/38/Game_Grumps_logo_2018.png"
            alt="Game Grumps Logo"
          ></img>
        </Link>
        <h2>Info</h2>
        <br />
        <section id="why-make-this-app">
          <span onClick={() => this.toggleShowText("whyMakeApp")}>
            <h4>
              Why Make This App?{" "}
              {this.state.showWhyMakeApp ? (
                <BsFillCaretDownFill />
              ) : (
                <BsFillCaretUpFill />
              )}
            </h4>
          </span>
          {this.state.showWhyMakeApp && (
            <div className="info-text">
              <p>
                Game Grumps sleeping compilations exist, but some of them are 12
                hours long. Moreover, when watching GG, I prefer to support
                their channel as much as possible.
              </p>
              <p>
                But options can be limited. You can choose a single video but
                they tend not to last long enough to fall asleep through. You
                could pick a playlist, but more times than not, a playlist will
                play through the entire night.
              </p>
              <p>
                I wanted to have an option to let Game Grumps lull me to sleep,
                but have it shut off in a reasonable amount of time so that I
                wouldn't wake up at 3 in the morning to have to turn off a video
                or playlist. I also preferred to put in as little effort as
                possible to pick videos.
              </p>
              <p>Enter the Game Grumps Sleep Timer App!</p>
              <p>
                This web app was made purely to honor Game Grumps, and to fill a
                void in my own life as well as to be able to support the channel
                where I could. This project is a project of love and reverance.
                It is free to use and will remain that way forever. All video
                content comes from the Game Grumps channel, so all views will
                directly support them.
              </p>
            </div>
          )}
        </section>
        <br />
        <section id="resource-credits">
          <span onClick={() => this.toggleShowText("resources")}>
            <h4>
              Resource Credits{" "}
              {this.state.showResources ? (
                <BsFillCaretDownFill />
              ) : (
                <BsFillCaretUpFill />
              )}
            </h4>
          </span>
          {this.state.showResources && (
            <div className="info-text">
              <ul className="no-bullets">
                <li>
                  Videos:{" "}
                  <a
                    href="https://www.youtube.com/user/GameGrumps"
                    target="_blank"
                  >
                    Game Grumps YoutTube Channel
                  </a>
                </li>
                <li>
                  Logo:{" "}
                  <a
                    href="https://upload.wikimedia.org/wikipedia/commons/3/38/Game_Grumps_logo_2018.png"
                    target="_blank"
                  >
                    Wikipedia
                  </a>
                </li>
                <li>
                  Background:{" "}
                  <a
                    href="https://wallpapercave.com/wp/wp2274538.jpg"
                    target="_blank"
                  >
                    WallpaperCave.com
                  </a>
                </li>
              </ul>
            </div>
          )}
        </section>
        <br />
        <section id="about-the-create">
          <span onClick={() => this.toggleShowText("aboutCreator")}>
            <h4>
              About the Creator{" "}
              {this.state.showAboutCreator ? (
                <BsFillCaretDownFill />
              ) : (
                <BsFillCaretUpFill />
              )}
            </h4>
          </span>
          {this.state.showAboutCreator && (
            <div className="info-text">
              <p>
                Hi! Thanks for checking out the Game Grumps Sleep Timer App! My
                name is Aidan. I am a full stack developer and a huge Game
                Grumps fan. I run on coffee, sparkling water, and good vibes ✌.
              </p>
              <p>
                Back in 2017, I became really sick. I couldn't leave my bed and
                could barely keep my eyes open for more than an hour at a time.
                Not being able to do anything, a friend of my recommended that I
                check out the Sonic '06 playthrough from Arin and Jon. I started
                watching and would intermittently fall in and out of sleep. But
                the videos kept my spirits up and kept me entertained when there
                was really nothing else I could do.
              </p>
              <p>
                Ever since then, the sound of "Hey I'm grump..." has been a
                natural calming agent for me. For years, I have used this to
                help calm me down and especially to help me sleep. My SO is now
                a doctor and is often gone late night or for weeks at a time.
                Game Grumps has been some of my greatest company in this time.
              </p>
            </div>
          )}
        </section>
        <br />
        <div>
          <button className="btn btn-primary">
            <Link to="/" style={{ color: "white" }}>
              Back to the Sleep Timer
            </Link>
          </button>
        </div>
      </motion.div>
    );
  }
}
