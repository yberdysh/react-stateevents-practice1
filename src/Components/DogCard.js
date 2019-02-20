import React from "react";

class DogCard extends React.Component {
  state = {
    clicked: false
  }

  // ruff(){

  // }

  ruff = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    console.log("PROPS", this.props)
    console.log("STATE", this.state)
    const {name, img} = this.props.dog
    return (
      <div>
        <h2>{name}</h2>
        <div className="dogRuff">
          <img alt="" src={img} />
          {this.state.clicked && <h1>RUFF</h1>}
        </div>
        <button onClick={this.ruff}>Bark</button>
        {/*this.state.clicked ? <h1>RUFF</h1> : null*/}
      </div>
    );
  }
}

export default DogCard;
