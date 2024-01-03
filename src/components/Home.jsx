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
      <div className="container my-3">
        <Alert alert={props.alert} />
        <Textform
          mode={props.mode}
          colour={props.colour}
          showAlert={props.showAlert}
        />
      </div>
    </HomeTheme>
  );
}

export default Home;
