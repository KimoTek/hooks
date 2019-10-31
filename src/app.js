import React, { Component, useState } from "react";
import { hot } from "react-hot-loader";

function Button() {
  const [buttonText, setButtonText] = useState("Click me, please");

  return (
    <button onClick={() => setButtonText("Thanks, been clicked!")}>
      {buttonText}
    </button>
  );
}

class App extends Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <Button />
        <div>Hello {name}</div>
      </>
    );
  }
}

export default hot(module)(App);
