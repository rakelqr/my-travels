// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes, baby...</h1>
        </header>
        <Travel
          destination="Madrid"
          country="España"
          photo="https://upload.wikimedia.org/wikipedia/commons/9/99/Calle_de_Alcalá_%28Madrid%29_16.jpg"
          distance="2000"       
        />
        <Travel
          destination="Roma"
          country="Italia"
          photo="https://upload.wikimedia.org/wikipedia/commons/c/c0/Rome_Montage_2017.png"
          distance="1500"/>
      </div>
    );
  }
}

export default App;
