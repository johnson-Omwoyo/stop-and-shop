import React, { useState } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Navbar.css"; // Import the Navbar-specific CSS

const cartItems = [
  {
    id: 1,
    name: "Floral Maxi Dress",
    img: "dresses/bd741bcd36864b84c5664fbef1caf17d.jpg",
    hoverImg: "dresses/62b5a3c7d983a305e070cf6088dd524b.jpg",
    price: "$99",
    description: "A beautiful floral dress perfect for summer.",
  },
  {
    id: 2,
    name: "Casual Summer Dress",
    img: "dresses/path_to_image2.jpg",
    hoverImg: "dresses/path_to_hover_image2.jpg",
    price: "$89",
    description: "Casual and comfortable for everyday wear.",
  },
  // Additional items can be added here
];

function Navbar() {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShow = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-custom">
      <a className="navbar-brand" href="#">
        Summer Dresses
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/collection">
              Collection
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
        <button
          className="btn btn-outline-dark"
          onClick={() => handleShow(cartItems[0])} // Open modal for the first cart item
        >
          <i className="fas fa-shopping-cart"></i> Cart
        </button>
      </div>

      {selectedItem && (
        <Modal show={show} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel interval={3000}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={selectedItem.img}
                  alt={selectedItem.name}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={selectedItem.hoverImg}
                  alt={selectedItem.name}
                />
              </Carousel.Item>
            </Carousel>
            <div className="text-center mt-3">
              <p>{selectedItem.description}</p>
              <p className="font-weight-bold">
                <strong>Price: </strong>
                {selectedItem.price}
              </p>
              <div className="form-group">
                <label htmlFor="quantity">Quantity:</label>
                <select className="form-control" id="quantity">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success">Add to Cart</Button>
          </Modal.Footer>
        </Modal>
      )}
    </nav>
  );
}

export default Navbar;
