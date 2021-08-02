import React, { Component } from "react";
import Header from "./Bootstrap/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header containerClass="justify-content-center">
          ChatBot without using AI{" "}
        </Header>

        {/* <h1>Learn React</h1>
        <p>you are the best</p> */}
      </div>
    );
  }
}

export default App;
