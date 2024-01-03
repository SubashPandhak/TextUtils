import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  // let newColor
  // const changeColor = () => {
  //   if(props.colour === "#013501"){
  //     return newColor = "success"
  //   }else if(props.colour === "#3b0101"){
  //     return newColor = "danger"
  //   }else if(props.colour === "#050541"){
  //     return newColor = "primary"
  //   }else{
  //    return newColor = "primary"
  //   }
  //   }
  // }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared text", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Computer is speaking", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("my-box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "info");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  const wordLength = text.split(" ");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <h1>Enter the text to analyze below</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="my-box"
            rows="10"
            style={{
              backgroundColor:
                props.mode === "dark" ? "rgb(34 41 48)" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={speak}>
          Speak
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words, {text.replace(/\s+/g, "").length} characters,{" "}
          {text.split("\n").length} lines
        </p>
        <p>
          {(
            0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          ).toFixed(2)}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
        <p>Shortest word length is 2</p>

        <p>Longest word length is 5</p>
      </div>
    </>
  );
}
