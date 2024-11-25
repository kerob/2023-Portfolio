import React from 'react';
import { FaCodepen, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <h3 className="footer__title">Kyle Robles @ 2024</h3>
      <ul className="social-list flex" role="list">
        <li className="social-list__item">
          <a
            href="https://github.com/kerob"
            className="social-list__link"
            target="_blank"
          >
            <FaGithub />
          </a>
        </li>

        <li className="social-list__item">
          <a
            href="https://codepen.io/kerob/"
            className="social-list__link"
            target="_blank"
          >
            <FaCodepen />
          </a>
        </li>
      </ul>
    </footer>
  );
}
