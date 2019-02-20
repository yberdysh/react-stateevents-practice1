import React, { Component } from "react";
import dogs from '../dogs'
import DogCard from '../Components/DogCard'

class DogList extends Component {
  // state = {
  //   dogs: dogs
  // }

  constructor(props){
    super(props)
    this.state = {
      dogs: dogs
    }
  }



  render() {
    let mappedDogs = this.state.dogs.map((dog, index) => <DogCard dog={dog} key={index}  />)
    return <div className="dogContainer">{mappedDogs}</div>;
  }
}

export default DogList;
