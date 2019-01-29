import React from "react";
import DogCard from "../Components/DogCard";

class Favorites extends React.Component {
  render() {
    let dogs = this.props.dogs.map(dog => (
      <DogCard
        key={dog.id}
        dog={dog}
        favoriteClickHandler={this.props.clickHandler}
      />
    ));
    return (
      <div className="favorites">
        <h1>Favorite Dogs</h1>
        {dogs}
      </div>
    );
  }
}

export default Favorites;
