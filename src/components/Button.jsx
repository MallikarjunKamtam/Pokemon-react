import React from "react";
import "./button.css";

function Button(props) {
  return (
    <div>
      <button>{props.children}</button>
    </div>
  );
}

export default Button;
