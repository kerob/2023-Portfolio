import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaFigma,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref: aboutRef, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px",
    threshold: 0.2,
  });
  return (
    <section ref={aboutRef} id="about" className="about">
      <div className="about-container">
        <div className={`about-text ${inView ? "animate-left" : "hidden"}`}>
          <h2 className="about-title section-title txt-highlight">About Me</h2>
          <p>
            Hello! My name is Kyle and I am web developer living in the San
            Francisco Bay Area. While I had casually known about web development
            tools like HTML and CSS, it wasn't until 2020 when I made a joke
            website for some friends that I began to look deeper into the
            technology. Since then I have taught myself the essentials of the
            web with an emphasis on front end design.
          </p>
          <p>
            Although I have limited experience as a developer, I have had
            experience working in tech on the side of quality assurance. My time
            in QA allowed me to become familiar with the flow of development as
            well as tools I would use for the web such as HTML, Javascript, and
            unit testing. I look forward to joining tech as a developer this
            time.
          </p>
          <p>I am currently working with the following tech:</p>
          <div className="grid about-stack">
            <span>HTML/CSS</span>
            <span>Javascript</span>
            <span>React</span>
            <span>Firebase</span>
            <span>Figma</span>
            <span>VSCode</span>
          </div>
        </div>
        <div
          className={`about-cube-container ${
            inView ? "animate-right" : "hidden"
          }`}
        >
          <div className="cube">
            <div className="face1">
              <FaHtml5 />
            </div>
            <div className="face2">
              <FaCss3Alt />
            </div>
            <div className="face3">
              <FaJsSquare />
            </div>
            <div className="face4">
              <FaReact />
            </div>
            <div className="face5">
              <FaFigma />
            </div>
            <div className="face6">
              <IoLogoFirebase />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
