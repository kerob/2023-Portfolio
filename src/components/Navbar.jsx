import React, { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex">
      <a href="#">
        <div className="ff-highlight nav-logo">KR</div>
      </a>

      <button
        className="nav-hamburger"
        aria-controls="primary-navigation"
        aria-expanded={toggle}
        onClick={() => setToggle((prevState) => !prevState)}
      >
        <svg
          fill="var(--clr-bars)"
          className="hamburger"
          viewBox="0 0 100 100"
          width="35"
        >
          <rect
            className="line top"
            width="80"
            height="10"
            x="10"
            y="25"
            rx="5"
          ></rect>
          <rect
            className="line middle"
            width="80"
            height="10"
            x="10"
            y="45"
            rx="5"
          ></rect>
          <rect
            className="line bottom"
            width="80"
            height="10"
            x="10"
            y="65"
            rx="5"
          ></rect>
        </svg>
      </button>

      <ul
        className={`nav-list flex uppercase ${toggle ? "nav-active" : ""}`}
        role="list"
      >
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
