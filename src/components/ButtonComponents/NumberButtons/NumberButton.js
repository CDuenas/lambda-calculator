import React from "react";
import './Numbers.css';

const NumberButton = props => {
  return (
    <React.Fragment>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="numbersButton">{props.text}</button>
    </React.Fragment>
  );
};

export default NumberButton;