import React from "react";

class DogCard extends React.Component {
  state = {
    clicked: false
  }

  clickBark = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    return (
      <div>
        <h2>{this.props.dog.name}</h2>
        <div className="ruffContainer">
          <img alt="" src={this.props.dog.img} />
          {this.state.clicked && <h1>RUFF</h1>}
        </div>
        <button onClick={this.clickBark}>Bark</button>
      </div>
    );
  }
}

export default DogCard;
