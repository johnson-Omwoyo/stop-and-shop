import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Collection from "./routes/Collection";
import Contact from "./routes/Contact";
import About from "./routes/About";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="collection" element={<Collection />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
    </Route>
  </Routes>
);

export default AppRoutes;
