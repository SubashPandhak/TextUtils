import React from "react";
import "../App.css";
import Navbar from "./Navbar";

export default function HomeTheme(props) {
  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-dark");
  };
  const toggleMode = (cls) => {
    if (props.mode === "light") {
      props.setMode("dark");
      removeBodyClasses();
      document.body.classList.add("bg-" + cls);
      props.showAlert("Dark mode has been enabled.", "success");
      console.log(cls);
    } else if (props.mode === "dark") {
      props.setMode("light");
      removeBodyClasses();
      document.body.classList.add("bg-light");
      props.showAlert("Light mode has been enabled.", "success");
      console.log(cls);
    }
  };
  // } else if (props.mode === "light") {
  //   props.setMode("dark");
  // document.body.style.backgroundColor = "rgb(34 41 48)";
  //   props.showAlert("Dark mode has been enabled.", "success");
  // } else {
  //   props.setMode("light");
  //   document.body.style.backgroundColor = "white";
  //   props.showAlert("Light mode has been enabled.", "success");
  // }
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
