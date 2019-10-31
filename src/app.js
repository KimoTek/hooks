import React, { Component } from "react";
import { hot } from "react-hot-loader";

class App extends Component {
  render() {
    const { name } = this.props;
    return <div>Hello {name}</div>;
  }
}

export default hot(module)(App);
