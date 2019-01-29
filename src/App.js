import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DogsList from "./Containers/DogsList";
import Favorites from "./Containers/Favorites";

class App extends Component {
  state = {
    favoriteDogs: []
  };

  addToFavorites = dogObj => {
    this.setState({
      favoriteDogs: [...this.state.favoriteDogs, dogObj]
    });
  };

  removeFromFavorites = dogObj => {
    let newFavorites = this.state.favoriteDogs.filter(
      dog => dog.id !== dogObj.id
    );
    this.setState({
      favoriteDogs: newFavorites
    });
  };

  render() {
    return (
      <div className="list-container">
        <DogsList clickHandler={this.addToFavorites} />
        <Favorites
          clickHandler={this.removeFromFavorites}
          dogs={this.state.favoriteDogs}
        />
      </div>
    );
  }
}

export default App;
