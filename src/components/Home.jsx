import React from "react";
import HomeTheme from "./HomeTheme";
import Textform from "./Textform";
import Alert from "./Alert";

function Home(props) {
  return (
    <HomeTheme
      mode={props.mode}
      color={props.colour}
      setColor={props.setColour}
      setMode={props.setMode}
      showAlert={props.showAlert}
    >
      <div style={{ marginTop: "60px" }}>
        <Alert alert={props.alert} />
        <div className="container my-3">
          <Textform
            mode={props.mode}
            colour={props.colour}
            showAlert={props.showAlert}
          />
        </div>
      </div>
    </HomeTheme>
  );
}

export default Home;
