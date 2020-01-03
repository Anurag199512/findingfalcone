import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Coding Problem - <a
          href="https://www.geektrust.in/coding-problem/frontend/space"
          rel="noopener noreferrer"
          target="_blank"
          hrefLang="en"
        >Finding Falcone</a>
          {` | `}
          <a
            href="https://www.geektrust.in"
            rel="noopener noreferrer"
            target="_blank"
            hrefLang="en"
          >
            GeekTrust Home
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;