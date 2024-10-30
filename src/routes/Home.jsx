import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css"; // Import the Home-specific CSS
import Carousel from "react-bootstrap/Carousel";

function Home() {
  const dresses = [
    {
      id: 1,
      name: "Floral Maxi Dress",
      img: "dresses/background-remover/WhatsApp Image 2024-10-29 at 17.55.45.png",
      price: "$99",
      description: "A beautiful floral dress perfect for summer.",
    },
    {
      id: 2,
      name: "Casual Summer Dress",
      img: "dresses/WhatsApp Image 2024-10-29 at 17.55.42 (1).png",
      price: "$89",
      description: "Casual and comfortable for everyday wear.",
    },
    {
      id: 3,
      name: "Romantic Lace Dress",
      img: "dresses/background-remover (2)/WhatsApp Image 2024-10-29 at 17.55.48 (2).png",
      price: "$129",
      description: "Lace details for a romantic look.",
    },
  ];

  const heroImages = [
    {
      id: 1,
      img: "https://i.pinimg.com/564x/90/76/59/907659ac3b91817ab6f003df5a72030a.jpg",
      title: "Elevate Your Wardrobe.",
      text: "Discover the confidence that comes with our expertly crafted dresses designed for every occasion.",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/564x/91/c1/93/91c19309853f86125f76e7a7b900e350.jpg",
      title: "Embrace the Summer Spirit.",
      text: "Unleash your inner style icon with our latest summer collection, tailored just for you.",
    },
    {
      id: 3,
      img: "dresses/background-remover (2)/WhatsApp Image 2024-10-29 at 17.55.52.png",
      title: "Experience Timeless Elegance.",
      text: "Step into a world of sophistication and charm with our stunning range of summer dresses.",
    },
  ];

  return (
    <div>
      <Carousel className="hero-carousel" interval={3000}>
        {heroImages.map((image) => (
          <Carousel.Item key={image.id}>
            <div className="hero-content">
              <img
                className="d-block hero-image"
                src={image.img}
                alt={image.title}
              />
              <div className="hero-text">
                <h1 className="display-4">{image.title}</h1>
                <p className="lead">{image.text}</p>
                <a
                  className="btn btn-primary btn-lg"
                  href="/collection"
                  role="button"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="container mt-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <p className="text-center mb-5">
          At Summer Dresses, we offer the finest collection of dresses perfect
          for any occasion. Our commitment to quality and style ensures that you
          will always find something you love.
        </p>
        <div className="row">
          {dresses.map((dress) => (
            <div key={dress.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-lg">
                <img
                  src={dress.img}
                  className="card-img-top"
                  alt={dress.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{dress.name}</h5>
                  <p className="card-price">{dress.price}</p>
                  <p className="card-text">{dress.description}</p>
                  <a href="/collection" className="btn btn-primary">
                    View Collection
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
