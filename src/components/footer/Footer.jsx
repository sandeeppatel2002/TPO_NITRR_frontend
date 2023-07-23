import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-text">
          <span>&copy; 2023 Sandeep Patel - All rights reserved</span>
        </div>
        <div className="footer-social-links">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/wellsandeep.patel"
                target="_blank"
                rel="nofollow"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/__.san_deep.__/"
                target="_blank"
                rel="nofollow"
              >
                <i className="fab fa-instagram-square"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sandeep-patel-824283221/"
                target="_blank"
                rel="nofollow"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@Cluc_IO"
                target="_blank"
                rel="nofollow"
              >
                <i className="fab fa-youtube-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
