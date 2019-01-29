import React, { Component } from "react";
import Dogs from "../dogs";
import DogCard from "../Components/DogCard";

class DogsList extends Component {
  state = {
    dogsList: Dogs
  };
  render() {
    let dogs = this.state.dogsList.map(dog => (
      <DogCard key={dog.id} dog={dog} />
    ));
    return (
      <div className="dogContainer">
        <h1>Dogs Index</h1>
        {dogs}
      </div>
    );
  }
}

export default DogsList;
