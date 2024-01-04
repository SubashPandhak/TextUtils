import React from "react";
import HomeTheme from "./HomeTheme";
import Alert from "./Alert";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#2b3036",
    backgroundColor: props.mode === "dark" ? "#2b3036" : "white",
  };

  return (
    <HomeTheme
      mode={props.mode}
      color={props.colour}
      setColor={props.setColour}
      setMode={props.setMode}
      showAlert={props.showAlert}
    >
      <div style={{ marginTop: "60px", width: "100vw" }}>
        <Alert alert={props.alert} />
      </div>
      <div className="container">
        <h2
          className="my-2"
          style={{
            color: props.mode === "dark" ? "white" : "#2b3036",
          }}
        >
          {" "}
          About Us
        </h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                Analyze your text
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>TextUtils</strong> is a app that is used to manipulate
                your text that includes text converter, text copy, text reader,
                text clear, etc.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                Free to use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>TextUtils</strong> is free to use app that is available
                in netlify.
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeTheme>
  );
}
