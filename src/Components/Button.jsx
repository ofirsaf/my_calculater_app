import React from "react";
import "../Styles/Button.css";

const Button = (props) => (
  <div
    className={`button-wrapper ${props.large ? "large" : ""} ${
      isNaN(props.children) ? "operator" : ""
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);

export default Button;
