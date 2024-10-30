import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css"; // Importing animate.css for scroll animations
import "./Collection.css"; // Import the Collection-specific CSS
import { Modal, Button, Carousel } from "react-bootstrap";

function Collection() {
  const [selectedDress, setSelectedDress] = useState(null);
  const [dresses, setDresses] = useState([]);
  const [likes, setLikes] = useState({});
  const dressUrl =
    "https://gist.githubusercontent.com/johnson-Omwoyo/f0cda6defdd23d1256b442c2ff6a06e9/raw/e1934c6dce532c0d2043463cce98010a0d5dbd91/stop&shop.json";
  useEffect(() => {
    const fetchDresses = async () => {
      try {
        const response = await fetch(dressUrl);
        if (response.ok) {
          const dart = await response.json();
          const data = dart.dresses;
          setDresses(data);
          setLikes(
            data.reduce((acc, dress) => {
              acc[dress.id] =
                Number(localStorage.getItem(`likes-${dress.id}`)) || 0;
              return acc;
            }, {})
          );
        } else {
          throw new Error("Network response was not ok " + response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchDresses();
  }, []);

  const handleShow = (dress) => setSelectedDress(dress);
  const handleClose = () => setSelectedDress(null);

  const handleLike = (id) => {
    const isLiked = localStorage.getItem(`liked-${id}`);
    const newLikes = { ...likes, [id]: likes[id] + (isLiked ? -1 : 1) };
    setLikes(newLikes);
    localStorage.setItem(`likes-${id}`, newLikes[id]);
    if (isLiked) {
      localStorage.removeItem(`liked-${id}`);
    } else {
      localStorage.setItem(`liked-${id}`, true);
    }

    // Add animation class to the button
    const button = document.getElementById(`like-button-${id}`);
    if (button) {
      button.classList.add("animate__animated", "animate__heartBeat");
      setTimeout(() => {
        button.classList.remove("animate__animated", "animate__heartBeat");
      }, 1000); // Remove the animation class after it completes
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Collection</h2>
      <div className="row">
        {dresses.map((dress) => (
          <div
            key={dress.id}
            className="col-6 col-md-3 mb-4 animate__animated animate__fadeInUp"
            onScroll={() => {
              const element = document.getElementById(`card-${dress.id}`);
              if (element) {
                element.classList.add("animate__animated", "animate__fadeInUp");
                setTimeout(() => {
                  element.classList.remove(
                    "animate__animated",
                    "animate__fadeInUp"
                  );
                }, 1000);
              }
            }}
          >
            <div
              id={`card-${dress.id}`}
              className="card shadow-sm border-0 transition"
            >
              <img
                src={dress.img}
                className="card-img-top transition-img img-fluid"
                alt={dress.name}
                onMouseOver={(e) =>
                  (e.currentTarget.src = dress.hoverImg || dresses.img)
                }
                onMouseOut={(e) => (e.currentTarget.src = dress.img)}
                onClick={() => handleShow(dress)}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{dress.name}</h5>
                <p className="card-text">{dress.price}</p>
                <div className="mt-auto d-flex justify-content-between">
                  <Button variant="primary" onClick={() => handleShow(dress)}>
                    View Details
                  </Button>
                  <Button
                    id={`like-button-${dress.id}`}
                    variant={
                      localStorage.getItem(`liked-${dress.id}`)
                        ? "success"
                        : "outline-danger"
                    }
                    onClick={() => handleLike(dress.id)}
                  >
                    ❤️ {likes[dress.id]}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedDress && (
        <Modal show={true} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedDress.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel interval={3000}>
              <Carousel.Item className="text-center">
                <img
                  className="img-fluid zoom-on-hover"
                  src={selectedDress.img}
                  alt={selectedDress.name}
                />
              </Carousel.Item>
              {selectedDress.hoverImg && (
                <Carousel.Item className="text-center">
                  <img
                    className="img-fluid zoom-on-hover"
                    src={selectedDress.hoverImg}
                    alt={selectedDress.name}
                  />
                </Carousel.Item>
              )}
            </Carousel>
            <div className="text-center mt-3">
              <p>{selectedDress.description}</p>
              <p>
                <strong>Price: </strong>
                {selectedDress.price}
              </p>
              <p>
                <strong>Likes: </strong>
                {likes[selectedDress.id]}
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success">Add to Shopping Bag</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Collection;
