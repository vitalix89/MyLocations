import React from "react";
import { Component } from "react";
import Main from "./main";
import Header from "./header";

export default class App extends Component {
  componentDidMount() {
    console.log("I was triggered during componentDidMount");
  }
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}
