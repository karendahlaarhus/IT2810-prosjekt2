import React, { Component } from "react";
import ArtDisplay from "./ArtDisplay";
import Buttons from "./Buttons";
import Poetry from "./Poetry";
import Audio from "./Audio";

export default class Gallery extends Component {
  state = {
    count: 0,
    author: "johnson"
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

  handlePoetry = () => {
    if (this.state.author === "johnson") {
      this.setState({ author: "bronte" });
    } else {
      this.setState({ author: "johnson" });
    }
  };

  handleMusic = () => {};

  handleColors = () => {};

  handleFavorite = () => {
    const { count, author } = this.state;

    localStorage.setItem("count", count.toString());
    localStorage.setItem("author", author);
  };

  handleRetrieveFavorite = () => {
    const count_string = localStorage.getItem("count");
    const author = localStorage.getItem("author");
    var count;

    if (count_string != null) {
      count = JSON.parse(count_string);
    }
    this.setState({ count, author });
  };

  render() {
    return (
      <div>
        <button className="favorite" onClick={this.handleFavorite}>
          Save favorite
        </button>
        <button className="favorite" onClick={this.handleRetrieveFavorite}>
          Retrieve favorite
        </button>
        <div id="buttons_interaction">
          <button className="button_interaction" onClick={this.handleColors}>
            Colors
          </button>
          <button className="button_interaction" onClick={this.handleMusic}>
            Music
          </button>
          <button className="button_interaction" onClick={this.handlePoetry}>
            Change author
          </button>
        </div>
        <div className="gallery">
          <div id="box">
            <ArtDisplay count={this.state.count}></ArtDisplay>
            <Poetry
              count={this.state.count}
              author={this.state.author}
            ></Poetry>
          </div>
          <Audio></Audio>

          <div>
            <button
              className="button_interaction"
              onClick={this.handlePrevious}
            >
              Forrige
            </button>
            <button className="button_interaction" onClick={this.handleNext}>
              Neste
            </button>
          </div>
        </div>
      </div>
    );
  }
}
