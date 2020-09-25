import React, { Component, useState } from "react";
import ArtDisplay from "./ArtDisplay";
import Poetry from "./Poetry";
import Audio from "./Audio";

export default class Gallery extends Component {
  state = {
    count: Number(sessionStorage.getItem("count") || 1),
    music: !!(sessionStorage.getItem("music") || true),
    author: sessionStorage.getItem("author") || "johnson"
  };

  handleNext = () => {
    if (this.state.count === 4) {
      this.setState({ count: 0 });
      sessionStorage.setItem("count", JSON.stringify(0));
    } else {
      const new_count = this.state.count + 1;
      this.setState({ count: new_count });
      console.log("count next: " + new_count);
      sessionStorage.setItem("count", JSON.stringify(this.state.count + 1));
    }
  };

  handlePrevious = () => {
    if (this.state.count === 0) {
      this.setState({ count: 4 });
      sessionStorage.setItem("count", JSON.stringify(4));
    } else {
      const new_count = this.state.count - 1;
      this.setState({ count: this.state.count - 1 });
      sessionStorage.setItem("count", JSON.stringify(new_count));
    }
  };

  handleMusic = () => {
    this.setState({ music: !this.state.music });
    var new_music = null;
    if (this.state.music === true) {
      new_music = false;
      sessionStorage.setItem("music", JSON.stringify(new_music));
    } else {
      new_music = true;
      sessionStorage.setItem("music", JSON.stringify(new_music));
    }
  };
  handlePoetry = () => {
    if (this.state.author === "johnson") {
      this.setState({ author: "bronte" });
      const new_author = "bronte";
      sessionStorage.setItem("author", new_author);
    } else {
      this.setState({ author: "johnson" });
      const new_author = "johnson";
      sessionStorage.setItem("author", new_author);
    }
  };

  handleColors = () => {};

  handleFavorite = () => {
    const { count, author, music } = this.state;

    localStorage.setItem("count", count.toString());
    localStorage.setItem("music", music.toString());
    localStorage.setItem("author", author);
  };

  handleRetrieveFavorite = () => {
    const count_string = localStorage.getItem("count");
    const author = localStorage.getItem("author");
    const music_string = localStorage.getItem("music");
    var count;
    var music;

    if (count_string != null && music_string != null) {
      count = JSON.parse(count_string);
      music = JSON.parse(music_string);
      this.setState({ count, author, music });
    }
  };

  render() {
    console.log("count state: " + this.state.count);
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
          <Audio music={this.state.music}></Audio>
          <div id="gallery-box">
            <button
              id="btnRound"
              className="button_interaction"
              onClick={this.handlePrevious}
            >
              &#8249;
            </button>
            <div id="box">
              <ArtDisplay count={this.state.count}></ArtDisplay>
              <Poetry
                count={this.state.count}
                author={this.state.author}
              ></Poetry>
            </div>
            <button
              id="btnRound"
              className="button_interaction"
              onClick={this.handleNext}
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
