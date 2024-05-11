// Footer.js

import React from 'react';
import './footer.css'; // Importing CSS file for styling

function Footer() {
  return (

    <footer className="footer">
              <span>Questions? Call 000-800-919-1694</span>

      <div className="container">

        <div className="footer-left">
          <div className="footer-links">
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Help Centre</a></li>
              <li><a href="#">Account</a></li>
              <li><a href="#">Media Centre</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Jobs</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <ul>
              <li><a href="#">Ways to Watch</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Cookie Preferences</a></li>
              <li><a href="#">Corporate Information</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Speed Test</a></li>
              <li><a href="#">Legal Notices</a></li>
              <li><a href="#">Only on Netflix</a></li>
            </ul>
          </div>
        
        </div>
        
      
       
      </div>
      <div className="footer-dropdown">
            <select className="language-selector">
              <option value="en">English</option>
            </select>
          </div>
          <div className="footer-country">
            <span>Netflix India</span>
          </div>
    </footer>
  );
}

export default Footer;
