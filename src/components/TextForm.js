import React, { useState } from "react";

export default function TextForm(props) {
  // Hooks
  // const [variable, function]
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked. The original text was: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    // console.log("Lowercase button was clicked. The orgonal text is: " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary ms-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container mt-3">
        <h2>Your Text Summary: </h2>
        <p>
          <b>
            {text.split(" ").length - 1} words and {text.length} characters
          </b>
        </p>
        <p>
          Average reading time: {(text.split(" ").length - 1) * 0.008} minutes
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
