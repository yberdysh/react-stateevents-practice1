import React, { Component } from "react";
import DogCard from '../Components/DogCard'
import dogs from '../dogs'

class DogList extends Component {
  state = {
    dogs: dogs
  }
  render() {
    return <div className="dogContainer">{this.state.dogs.map(dog => <DogCard key={dog.id} dog={dog}/>)}</div>;
  }
}

export default DogList;
