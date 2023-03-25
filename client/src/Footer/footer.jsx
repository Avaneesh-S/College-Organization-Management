import React from 'react';
import './style.css';
import { FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li><a href="#">about us</a></li>
              <li><a href="#">our services</a></li>
              <li><a href="#">privacy policy</a></li>
              
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#"><FiFacebook/></a>
              <a href="#"><FiTwitter /></a>
              <a href="#"><FiInstagram /></a>
              <a href="#"><FiLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;