import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DogsList from "./Containers/DogsList";
import Favorites from "./Containers/Favorites";

class App extends Component {
  state = {
    favorites: []
  };

  addToFavorites = dogObj => {
    this.setState({
      favorites: [...this.state.favorites, dogObj]
    });
  };
  render() {
    return (
      <div className="list-container">
        <DogsList clickHandler={this.addToFavorites} />
        <Favorites dogs={this.state.favorites} />
      </div>
    );
  }
}

export default App;
