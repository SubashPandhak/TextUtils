import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { useState } from "react";

function App() {
  let [mode, setMode] = useState("light");
  let [alert, setAlert] = useState(null);
  const [colour, setColour] = useState("white");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      {
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  mode={mode}
                  color={colour}
                  setColor={setColour}
                  setMode={setMode}
                  showAlert={showAlert}
                  alert={alert}
                />
              }
            />
            <Route
              path="/about"
              element={
                <About
                  mode={mode}
                  color={colour}
                  setColor={setColour}
                  setMode={setMode}
                  showAlert={showAlert}
                  alert={alert}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      }
    </>
  );
}

export default App;
