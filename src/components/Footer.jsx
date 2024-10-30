import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"; // Import the Footer-specific CSS

function Footer() {
  return (
    <footer className="footer bg-custom">
      <div className="container">
        <div className="row text-center py-3">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We offer a curated collection of timeless summer dresses that
              blend classic elegance with modern style. Discover your perfect
              dress today.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/collection" className="footer-link">
                  Collection
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@summerdresses.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Fashion Street, Nairobi, Kenya</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="/privacy" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/terms" className="footer-link">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12">
            <p>&copy; 2024 Summer Dresses. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
