import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__item">
            <span>Tel: 010-5883-9930</span>
          </div>
          <div className="footer__item">
            <span>Email: ryuhojin95@gmail.com</span>
          </div>
        </div>
        <div className="footer__copyright">© 2024 All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
