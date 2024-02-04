import React, { Component } from "react";
import { render } from "react-dom";
import MouseParticles from "react-mouse-particles";
import profile from "./index";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <>
        <profile />
        <MouseParticles
          g={1}
          color="random"
          cull="socialIcons"
          level={6}
        />
      </>
    );
  }
}

render(<App />, document.getElementById("profile"));