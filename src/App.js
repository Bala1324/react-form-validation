import React, { Component } from "react";
import "./App.css";

import MyForm from "./components/MyForm";
import ValidationForm from "./components/ValidationForm";
import ImageSlider from './components/ImageSlider';
import Counter from './components/Counter';
// import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <ValidationForm />
        {/* <MyForm/> */}
        {/* <ImageSlider/> */}
        {/* <Counter/> */}
      </div>
    );
  }
}

export default App;
