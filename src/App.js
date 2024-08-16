import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Booking from "./components/Booking";
import Services from "./components/Services";
import Navbar from "./components/Navbar";

function App() {
    return (
      <Router>
         <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/service" element={<Services />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;