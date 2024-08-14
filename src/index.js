import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Work from "./Pages/Work";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </Router>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
reportWebVitals();
