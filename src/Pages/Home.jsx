import React from "react";
import logo from "../assets/home.png";
import "../Styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="half-screen">
        <h1 className="title">Let's Calculate</h1>
        <p className="paragraph">
          We know subjects like math can be a problem when studying. Therefore,
          we are here to make math easier and more fun for you!
        </p>
      </div>
      <div className="half-screen">
        <img className="math-image" src={logo} alt="Math" />
      </div>
    </div>
  );
}
