import React from "react";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref: heroRef, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px",
    threshold: 0.2,
  });

  return (
    <section
      ref={heroRef}
      className={`hero grid ${inView ? "animate-slideUp" : "hidden"}`}
      id="hero"
    >
      <div className="hero-container">
        <h1 className="ff-highlight fw-lite fs-900">
          Hi, I'm <span className="txt-highlight">Kyle</span>
        </h1>
        <h2 className="ff-highlight fw-lite fs-700">Web Developer</h2>
        <div className="hero-links">
          <a className="btn-link" role="button" href="#portfolio">
            My Work
          </a>

          <a className="btn-link" role="button" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
