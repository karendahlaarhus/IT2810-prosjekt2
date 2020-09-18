import React, { Component } from "react";
import ArtDisplay from "./ArtDisplay";
import Buttons from "./Buttons";
import Poetry from "./Poetry";
import Audio from "./Audio";
//import Icon from "../svg/my_svg";

export default class Gallery extends Component {
  state = {
    count: 0
  };

  handleNext = () => {
    if (this.state.count === 4) {
      this.setState({ count: 0 });
    } else {
      this.setState({ count: this.state.count + 1 });
    }
  };

  handlePrevious = () => {
    if (this.state.count === 0) {
      this.setState({ count: 4 });
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="gallery">
        <Buttons></Buttons>
        <div id="box">
          <ArtDisplay count={this.state.count}></ArtDisplay>
          <Poetry count={this.state.count}></Poetry>
        </div>
        <Audio></Audio>

        <div>
          <button onClick={this.handlePrevious}>Forrige</button>
          <button onClick={this.handleNext}>Neste</button>
        </div>
      </div>
    );
  }
}
