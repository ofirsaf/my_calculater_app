import React from "react";
import "../Styles/DeleteButton.css";

const DeleteButton = (props) => (
  <div className="delete-btn" onClick={props.handleDelete}>
    {props.children}
  </div>
);

export default DeleteButton;
