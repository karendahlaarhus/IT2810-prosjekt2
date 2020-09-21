import React, { Component } from "react";
import ArtDisplay from "./ArtDisplay";
import Buttons from "./Buttons";
import Poetry from "./Poetry";
import Audio from "./Audio";
//import Icon from "../svg/my_svg";

export default class Gallery extends Component {
  state = {
    count: 0,
    music: true
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

  handleMusic = () => {
    this.setState({music: !this.state.music})
      /* Dette skal gjøre at musikken loades og klarer å bytte fil, men funker ikke???!!!!
      , function(){
      
      this.refs.audio.pause();
      this.refs.audio.load();
      this.refs.audio.play();
    }) 
    */
  };

  render() {
    return (
      <div className="gallery">
        <Buttons handleMusic= {this.handleMusic}></Buttons>
        <div id="box">
          <ArtDisplay count={this.state.count}></ArtDisplay>
          <Poetry count={this.state.count}></Poetry>
        </div>
        <Audio music={this.state.music}></Audio>

        <div>
          <button className="button_interaction" onClick={this.handlePrevious}>
            Forrige
          </button>
          <button className="button_interaction" onClick={this.handleNext}>
            Neste
          </button>
        </div>
      </div>
    );
  }
}
