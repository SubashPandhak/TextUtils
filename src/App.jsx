import React from "react";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";

export default function Home() {
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
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(34 41 48)";
      showAlert("Dark mode has been enabled.", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Navbar
        title={"TextUtils"}
        mode={mode}
        colour={colour}
        setColour={setColour}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <Alert alert={alert} />
        <Textform mode={mode} colour={colour} showAlert={showAlert} />
      </div>
      <About />
    </>
  );
}

// import React from "react";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Home from "./components/Home";
// // import About from "./components/About";

// function App() {
//   return (
//     <>
//       {/* <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </BrowserRouter> */}
//     </>
//   );
// }

// export default App;