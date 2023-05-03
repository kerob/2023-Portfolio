import React from "react";

export default function Navbar() {
  return (
    <nav className="flex">
      <a href="#">
        <div className="ff-highlight fs-500">KR</div>
      </a>

      <ul className="nav-list flex uppercase" role="list">
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
