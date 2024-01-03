import React from "react";
import "../App.css";
import Navbar from "./Navbar";

export default function HomeTheme(props) {
  const toggleMode = () => {
    if (props.mode === "light") {
      props.setMode("dark");
      document.body.style.backgroundColor = "rgb(34 41 48)";
      props.showAlert("Dark mode has been enabled.", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      props.setMode("light");
      document.body.style.backgroundColor = "white";
      props.showAlert("Light mode has been enabled.", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Navbar
        title={"TextUtils"}
        mode={props.mode}
        colour={props.colour}
        setColour={props.setColour}
        toggleMode={toggleMode}
      />
      {props.children}
    </>
  );
}
