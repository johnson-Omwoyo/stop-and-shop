import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css"; // Import the About-specific CSS

function About() {
  return (
    <div className="container mt-5 about-container">
      <h2 className="text-center mb-4">About Us</h2>
      <p className="text-center about-description">
        At Summer Dresses, we believe that every woman deserves to feel
        beautiful and confident in her own skin. Our mission is to provid d-flex flex-column justify-content-centere
        high-quality, timeless dresses that bring out the best in you.
      </p>

      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <img
            src="https://i.pinimg.com/564x/1f/70/bf/1f70bf18264267e77dfa37f719c141e8.jpg"
            className="img-fluid about-image"
            alt="Our Mission"
          />
        </div>
        <div className="col-md-6 mb-4 d-flex flex-column justify-content-center">
          <h4 className="text-center section-title">Our Mission</h4>
          <p>
            Our mission is to create a seamless shopping experience that lets
            you find the perfect dress with ease. We are committed to offering a
            wide range of styles that cater to different tastes and occasions,
            ensuring that you always find something that makes you shine.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6 mb-4 d-flex flex-column justify-content-center">
          <h4 className="text-center section-title">Our Values</h4>
          <ul className="list-unstyled values-list">
            <li>
              <strong>Quality:</strong> We use only the finest materials to
              craft dresses that last.
            </li>
            <li>
              <strong>Style:</strong> Our designs are timeless, ensuring you
              look great now and in the future.
            </li>
            <li>
              <strong>Affordability:</strong> We believe that great fashion
              should be accessible to everyone.
            </li>
            <li>
              <strong>Customer Service:</strong> Your satisfaction is our top
              priority.
            </li>
          </ul>
        </div>
        <div className="col-md-6 mb-4">
          <img
            src="https://i.pinimg.com/564x/27/4d/36/274d36080312d8077fed991dff302dc9.jpg"
            className="img-fluid about-image"
            alt="Our Values"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
