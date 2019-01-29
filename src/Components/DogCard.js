import React from "react";

class DogCard extends React.Component {
  state = {
    bark: false
  };

  clickHandler = () => {
    this.setState({
      bark: !this.state.bark
    });
  };
  render() {
    return (
      <div>
        <h2>{this.props.dog.name}</h2>
        <img alt="" src={this.props.dog.img} />
        <button onClick={this.clickHandler}>Bark</button>
        <button onClick={() => this.props.favoriteClickHandler(this.props.dog)}>
          Favorite/Unfavorite
        </button>
        {this.state.bark ? <h1>"RUFF"</h1> : null}
      </div>
    );
  }
}

export default DogCard;
