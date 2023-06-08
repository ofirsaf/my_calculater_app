import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Calculator from "./Pages/Calculator";
import Home from "./Pages/Home";
import Quote from "./Pages/Quete";
import Navbar from "./Components/Navbar";

import * as math from "mathjs";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  );
};

export default App;
