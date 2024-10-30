import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css"; // Import the Contact-specific CSS

function Contact() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <p className="text-center">
        We'd love to hear from you! Whether you have a question about our
        products, an order, or anything else, our team is ready to answer all
        your questions.
      </p>
      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <h4>Get in Touch</h4>
          <form>
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
        <div className="col-md-6 mb-4">
          <h4>Contact Information</h4>
          <p>Email: info@summerdresses.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Fashion Street, Nairobi, Kenya</p>
          <h4>Our Location</h4>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.960366945383!2d-122.08424968483804!3d37.42206597982578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb730c490de99%3A0xc23b0c2d1c9b75bd!2sGoogleplex!5e0!3m2!1sen!2sus!4v1586900793064!5m2!1sen!2sus"
              width="100%"
              height="300"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <h4>Follow Us</h4>
          <p>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark mr-2"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark mr-2"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
